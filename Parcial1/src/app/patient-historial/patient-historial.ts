import { Component, Input } from '@angular/core';
import { DoublyNode } from '../models/DoublyNode';

@Component({
  imports: [],
  selector: 'app-patient-historial',
  styleUrl: './patient-historial.css',
  templateUrl: './patient-historial.html',
})
export class PatientHistorial {
  @Input() historial: DoublyNode[] = [];
  
   
}
