import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedList } from '../models/linked-list';
import { Node } from '../models/node';
import { FormsModule } from '@angular/forms';
import { StudentList } from './components/student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  lista = signal(new LinkedList());
  nombre = '';
  edad: number | null = null;
  codigo: number | null = null;

agregarEstudiante(nombre: string, edad: number | null, codigo: number | null){
    if (!nombre || edad === null || codigo === null) {
    return; 
  }
    this.lista().append(nombre,edad,codigo);
    this.lista.set(this.lista());
  }

  eliminarEstudiante(id: number){
    this.lista().remove(id);
    this.lista.set(this.lista());
  }

  estudianteArray(): Node []{
    const result: Node [] = []
    let current = this.lista().head;

    while(current){
      result.push(current);
      current = current.next;
    }

    return result;
  }
}
