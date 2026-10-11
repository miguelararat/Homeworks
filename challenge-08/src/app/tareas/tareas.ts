import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../tareas-service';

interface Tarea {
  id?: string;
  titulo: string;
  hecha: boolean;
}

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas implements OnInit {
  protected readonly servicio = inject<TareasService<Tarea>>(TareasService).init('tareas');

  titulo = '';
  editandoId = signal<string | null>(null);
  tituloEditado = '';

  ngOnInit() {
    this.servicio.getAll();
  }

  async agregar() {
    if (!this.titulo.trim()) return;
    await this.servicio.add({ titulo: this.titulo, hecha: false });
    this.titulo = '';
    await this.servicio.getAll();
  }

  async alternar(t: Tarea) {
    await this.servicio.update(t.id!, { hecha: !t.hecha });
    await this.servicio.getAll();
  }

  empezarEdicion(t: Tarea) {
    this.editandoId.set(t.id!);
    this.tituloEditado = t.titulo;
  }

  async guardarEdicion(t: Tarea) {
    if (!this.tituloEditado.trim()) return;
    await this.servicio.update(t.id!, { titulo: this.tituloEditado });
    this.editandoId.set(null);
    await this.servicio.getAll();
  }

  cancelarEdicion() {
    this.editandoId.set(null);
  }

  async eliminar(id: string) {
    await this.servicio.remove(id);
    await this.servicio.getAll();
  }
}