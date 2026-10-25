import { Component } from '@angular/core';
import { inject, signal } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Tareas } from '../services/tareas';
import { Supabase } from '../services/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.scss',
})
export class TareasComponent implements OnInit, OnDestroy {

  protected srv = inject(Tareas);
  private sb = inject(Supabase).cliente;
  private canal?: RealtimeChannel;

  tareas = signal<any[]>([]);
  nueva = '';
  mensajeError = '';

  async ngOnInit() {
    await this.cargar();
    this.canal = this.srv.escuchar(() => this.cargar());
  }
  async cargar() {
    const { data } = await this.srv.listar();
    this.tareas.set(data ?? []);
  }
  async agregar() {
    this.mensajeError = '';

    try {
      await this.srv.crear(this.nueva);
      this.nueva = '';
    } catch (error: unknown) {
      this.mensajeError =
        error instanceof Error ? error.message : 'No se pudo crear la tarea.';
    }
  }

  ngOnDestroy() {
    if (this.canal)
      this.sb.removeChannel(this.canal);
  }
}
