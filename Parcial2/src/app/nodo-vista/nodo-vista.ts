
import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Nodo } from '../Models/Nodo';
import { Arbol } from '../arbol';
 
@Component({
  selector: 'app-nodo-vista',
  imports: [FormsModule],   // se usa a sí mismo en la plantilla (recursión), Angular lo permite sin importarlo
  templateUrl: './nodo-vista.html',
  styleUrl: './nodo-vista.scss',
})
export class NodoVista {
  protected readonly arbol = inject(Arbol);
 
  nodo = input.required<Nodo>();
 
  expandido = signal(true);
  creando = signal<'carpeta' | 'archivo' | null>(null);
  nombre = '';
 
  alternar(): void {
    this.expandido.update((v) => !v);
  }
 
  empezarCreacion(tipo: 'carpeta' | 'archivo'): void {
    this.creando.set(tipo);
    this.nombre = '';
    this.expandido.set(true);
  }
 
  cancelar(): void {
    this.creando.set(null);
  }
 
  async guardar(): Promise<void> {
    const tipo = this.creando();
    const nombre = this.nombre.trim();
    if (!tipo || !nombre) return;
 
    await this.arbol.add(nombre, tipo, this.nodo().id);
    this.creando.set(null);
  }
 
  async eliminar(): Promise<void> {
    await this.arbol.remove(this.nodo().id);
  }
}
 