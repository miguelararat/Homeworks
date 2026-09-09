import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Node } from '../models/Node';

@Component({
  imports: [],
  selector: 'app-doctor-rotation',
  styleUrl: './doctor-rotation.css',
  templateUrl: './doctor-rotation.html',
})
export class DoctorRotation {
  @Input() medico: Node | null = null;
  @Output() nextDoctor = new EventEmitter<void>();

  rotateDoctor() {
    if (this.medico === null) {
      return;
    }
    this.nextDoctor.emit();
  }
}
