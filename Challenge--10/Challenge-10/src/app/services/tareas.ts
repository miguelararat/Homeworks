import { Injectable, inject } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({ providedIn: 'root' })
export class Tareas {
  private sb = inject(Supabase).cliente;

  listar() {
    return this.sb.from('tareas').select('*').order('created_at', { ascending: false });
  }

  async crear(titulo: string): Promise<void> {
    const descripcion = titulo.trim();
    if (!descripcion) {
      throw new Error('La descripción de la tarea no puede estar vacía.');
    }

    const { error } = await this.sb.from('tareas').insert({ titulo: descripcion });
    if (error) {
      throw error;
    }
  }

  completar(id: number, valor: boolean) {
    return this.sb.from('tareas').update({ completada: valor }).eq('id', id);
  }

  borrar(id: number) {
    return this.sb.from('tareas').delete().eq('id', id);
  }

  escuchar(alCambiar: () => void) {
    return this.sb.channel('tareas-ng')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tareas' }, alCambiar)
      .subscribe();
  }
}