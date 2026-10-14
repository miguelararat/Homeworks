import { Injectable, inject, signal } from "@angular/core";
import {collection, getDocs,  addDoc, deleteDoc, doc, Timestamp} from "firebase/firestore";
import { db } from "../firebase/config";
import { Auth } from "./auth";
import {Nodo} from "./Models/Nodo";
import {NaryTree} from "./Models/NaryTree";
import id from "@angular/common/locales/extra/id";

@Injectable()
export class Arbol{
    private auth = inject(Auth)
    private collectionName = 'nodos';

    readonly arbol = signal<NaryTree>(new NaryTree(new Nodo('raiz', 'mi unidad', 'carpeta', 'sistema', null)));
    readonly isPending = signal<boolean>(false);
    readonly error = signal<string | null>(null);

    root(){
        return this.arbol().root;
    }
    async getAll(){
        this.isPending.set(true);
        this.error.set(null);

        try {
            const snapshot = await getDocs(collection(db, this.collectionName));
            let pendientes = snapshot.docs.map((d) => {
                const data = d.data();
                return new Nodo(d.id, data['value'], data['tipo'], data['creadoPor'], data['padreId'])
            });

        const nuevo = new NaryTree(new Nodo('raiz', 'mi unidad', 'carpeta', 'sistema', null));
            while (pendientes.length > 0){
                const sinPadre: Nodo[] = [];
                for (const nodo of pendientes){
                    if (nuevo.find(nodo.padreId!) === null){
                        nuevo.addNode(nodo, nodo.padreId!);
                    }
                    else{
                        sinPadre.push(nodo);
                    }
                }
                if(sinPadre.length === pendientes.length) break;
                pendientes = sinPadre;
            }

            this.arbol.set(nuevo);
            this.isPending.set(false);
        } catch (error) {
            this.error.set('Error al obtener los nodos');
            this.isPending.set(false);
        }
    }

    async add(value: string, tipo: 'carpeta' | 'archivo', padreId: string){
    const email = this.auth.usuario();
    if(!email){
        this.error.set('Usuario no autenticado');
        return;
            }
    const padre = this.arbol().find(padreId);
    if(!padre || padre.tipo === 'archivo'){
        this.error.set('Solo las carpetas pueden tener hijos');
        return; 
    }
    this.isPending.set(true);
    this.error.set(null);

    try {
        await addDoc(collection(db, this.collectionName), {
            value: value,
            tipo: tipo,
            creadoPor: email,
            padreId: padreId,
            creadoEn: Timestamp.now()
        });
        this.isPending.set(false);
        await this.getAll();
    }
   catch (err: any){
    this.error.set(err.message ?? 'Error al agregar el nodo');
    this.isPending.set(false);
   } 
}

   async remove(id: string){
    

    const nodo = this.arbol().find(id);
    
    if(!nodo) return;

    if(!nodo.isLeaf()){
        this.error.set('No se puede eliminar una carpeta que tiene contenido');
        return;
    }
    this.isPending.set(true);
    this.error.set(null);

    try{
        await deleteDoc(doc(db, this.collectionName, id));
        this.isPending.set(false);
        await this.getAll();
    }
    catch (error) {
        this.error.set('Error al eliminar el nodo');
        this.isPending.set(false);
    }

   }
}