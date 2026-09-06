  import { Component } from '@angular/core';
  import { LinkedList as LinkedListModel } from '../../models/linked-list';
  


  @Component({
    selector: 'app-linked-list',
    templateUrl: './linked-list.html',
    styleUrl: './linked-list.css',
  })
  export class LinkedListComponent {
    linkedList: LinkedListModel;
    current: any;
    constructor() {
      this.linkedList = new LinkedListModel();
      this.linkedList.append("Drivers License - Olivia Rodrigo");
      this.linkedList.append("Birds of a Feather - Billie Eilish");
      this.linkedList.append("Una noche más - Guinda Forever");
      this.linkedList.append("La Vida Es Un Carnaval - Celia Cruz");
      this.linkedList.append("Not Like Us - Kendrick Lamar");
      this.linkedList.append("Te entiendo - Daddy Yankee");
      this.current = this.linkedList.head;
    }

    // Getter para mostrar el valor actual en el HTML
  get currentValue(): string {
    return this.current ? this.current.value : 'No hay reproducción';
  }

  // Función para avanzar a la siguiente canción
  nextTrack(): void {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }

  }