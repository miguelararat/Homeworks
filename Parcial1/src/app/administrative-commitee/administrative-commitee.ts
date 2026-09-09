import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {DoublyNode} from '../models/DoublyNode';

@Component({
  imports: [],
  selector: 'app-administrative-commitee',
  styleUrl: './administrative-commitee.css',
  templateUrl: './administrative-commitee.html',
})
export class AdministrativeCommitee {
  
  @Input() administrador: DoublyNode | null = null;
  @Output() avanzar = new EventEmitter<void>();
  @Output() retroceder = new EventEmitter<void>();

  avanzarMiembro() {
    if (this.administrador == null) {
      return;
    }
    this.avanzar.emit();
  }

  retrocederMiembro() {
    if (this.administrador == null) {
      return;
    }
    this.retroceder.emit();
  }
}

