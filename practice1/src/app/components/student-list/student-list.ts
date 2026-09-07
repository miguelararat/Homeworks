import { Component, input, output } from '@angular/core';
import { Node } from '../../../models/node';
@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  estudiantes = input<Node[]>([]);
  eliminar = output<number>();

  eliminarClick(id : number){
    this.eliminar.emit(id);
  }
}
