import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Nodo } from '../Models/Nodo';
import { Arbol } from '../arbol';

@Component({
  selector: 'app-nodo-vista',
  imports: [FormsModule],
  templateUrl: './nodo-vista.html',
  styleUrl: './nodo-vista.scss'
})
export class NodoVista {
  protected readonly arbol = inject(Arbol);

  nodo = input.required<Nodo>();

  expandido = signal(true);
  creando = signal<'carpeta' | 'archivo' | null>(null);
  nombre = '';

  alternar() {
    this.expandido.set(!this.expandido());
  }

  empezarCreacion(tipo: 'carpeta' | 'archivo') {
    this.creando.set(tipo);
    this.nombre = '';
    this.expandido.set(true);
  }

  cancelar() {
    this.creando.set(null);
  }

  async guardar() {
    const tipo = this.creando();
    if (!tipo || !this.nombre.trim()) return;
    await this.arbol.add(this.nombre.trim(), tipo, this.nodo().id);
    this.creando.set(null);
  }

  async eliminar() {
    await this.arbol.remove(this.nodo().id);
  }
}
