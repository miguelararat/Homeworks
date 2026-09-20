import { Component, signal } from '@angular/core';
import { Queue } from './Models/Queue';
import { PersonForm } from './person-form/person-form';
import { Person } from './Models/Person';
import { QueueList } from './queue-list/queue-list';

@Component({
  selector: 'app-root',
  imports: [PersonForm, QueueList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Queue = new Queue();
  lista: Person [] = [];

  constructor() {
  this.Queue.enqueue(new Person('Carlos Ramírez', 150));
  this.Queue.enqueue(new Person('María López', 300));
  this.Queue.enqueue(new Person('José Martínez', 50));
  this.Queue.enqueue(new Person('Ana Torres', 500));
  this.Queue.enqueue(new Person('Luis Herrera', 200));

  this.ordenarLista();
}

  onPersonAdded(person: Person) {
    this.Queue.enqueue(person);
    this.ordenarLista();
  }

  private ordenarLista(){
    this.lista = [...this.Queue.items].sort(
      (a,b) => a.arrivalDate - b.arrivalDate
    )
  }
}
