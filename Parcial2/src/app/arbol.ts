import { Injectable, inject, signal } from '@angular/core';
import { collection, getDocs, addDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Auth } from './auth';
import { Nodo } from './Models/Nodo';
import { NaryTree } from './Models/NaryTree';
 
// providedIn: 'root' => una única instancia compartida por todos los componentes
@Injectable({ providedIn: 'root' })
export class Arbol {
  private readonly auth = inject(Auth);
  private readonly collectionName = 'nodos';
 
  readonly arbol = signal<NaryTree>(this.crearArbolVacio());
  readonly isPending = signal<boolean>(false);
  readonly error = signal<string | null>(null);
 
  root(): Nodo {
    return this.arbol().root;
  }
 
  private crearArbolVacio(): NaryTree {
    return new NaryTree(new Nodo('raiz', 'mi unidad', 'carpeta', 'sistema', null));
  }
 
  async getAll(): Promise<void> {
    this.isPending.set(true);
    this.error.set(null);
 
    try {
      const snapshot = await getDocs(collection(db, this.collectionName));
 
      let pendientes: Nodo[] = snapshot.docs.map((d) => {
        const data = d.data();
        return new Nodo(d.id, data['value'], data['tipo'], data['creadoPor'], data['padreId']);
      });
 
      const nuevo = this.crearArbolVacio();
 
      // Se insertan los nodos cuyo padre ya está en el árbol; los demás se reintentan
      while (pendientes.length > 0) {
        const sinPadre: Nodo[] = [];
 
        for (const nodo of pendientes) {
          if (nodo.padreId && nuevo.find(nodo.padreId)) {   // CORREGIDO: el padre ya existe
            nuevo.addNode(nodo, nodo.padreId);
          } else {
            sinPadre.push(nodo);                            // CORREGIDO: aún no llega su padre
          }
        }
 
        if (sinPadre.length === pendientes.length) {
          console.warn('Nodos huérfanos (su padre no existe):', sinPadre);
          break;
        }
        pendientes = sinPadre;
      }
 
      this.arbol.set(nuevo);
    } catch (err) {
      console.error(err);
      this.error.set('Error al obtener los nodos');
    } finally {
      this.isPending.set(false);
    }
  }
 
  async add(value: string, tipo: 'carpeta' | 'archivo', padreId: string): Promise<void> {
    const email = this.auth.usuario();
    if (!email) {
      this.error.set('Usuario no autenticado');
      return;
    }
 
    const padre = this.arbol().find(padreId);
    if (!padre || padre.tipo === 'archivo') {
      this.error.set('Solo las carpetas pueden tener hijos');
      return;
    }
 
    this.isPending.set(true);
    this.error.set(null);
 
    try {
      await addDoc(collection(db, this.collectionName), {
        value,
        tipo,
        creadoPor: email,
        padreId,
        creadoEn: Timestamp.now(),
      });
      await this.getAll();
    } catch (err: any) {
      this.error.set(err.message ?? 'Error al agregar el nodo');
      this.isPending.set(false);
    }
  }
 
  async remove(id: string): Promise<void> {
    const nodo = this.arbol().find(id);
    if (!nodo) return;
 
    if (!nodo.isLeaf()) {
      this.error.set('No se puede eliminar una carpeta que tiene contenido');
      return;
    }
 
    this.isPending.set(true);
    this.error.set(null);
 
    try {
      await deleteDoc(doc(db, this.collectionName, id));
      await this.getAll();
    } catch (err) {
      console.error(err);
      this.error.set('Error al eliminar el nodo');
      this.isPending.set(false);
    }
  }
}
 