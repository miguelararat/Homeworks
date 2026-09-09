import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../models/Node';

@Component({
  imports: [],
  selector: 'app-patient-queue',
  styleUrl: './patient-queue.css',
  templateUrl: './patient-queue.html',
})
export class PatientQueue {
  @Input() patient: Node | null = null;
  @Output() atender = new EventEmitter<Node>();

  attendPatient() {
    if (this.patient === null) {
      return;
    }
    this.atender.emit(this.patient);
  }
}