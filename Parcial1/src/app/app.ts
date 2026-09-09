import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { Node } from './models/Node';
import { LinkedList } from './models/LinkedList';
import { DoublyNode } from './models/DoublyNode';
import { DoublyLinkedList } from './models/DoublyLinkedList';
import { DoublyCircularLinkedList } from './models/DoublyCircularLinkedList';
import { CircularList } from './models/CircularList';
import { PatientQueue } from './patient-queue/patient-queue';
import {FormsModule} from '@angular/forms';
import { PatientHistorial } from './patient-historial/patient-historial';
import { DoctorRotation } from './doctor-rotation/doctor-rotation';
import { AdministrativeCommitee } from './administrative-commitee/administrative-commitee';



@Component({
  imports: [PatientQueue, FormsModule, PatientHistorial, DoctorRotation, AdministrativeCommitee],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  intervalId: any;
  listaPacientes = new LinkedList();
  historialPacientesAtendidos = new DoublyLinkedList();
  medicos = new CircularList();
  medicoActual = signal<Node | null>(null);
  comiteAdmnistrativo = new DoublyCircularLinkedList();
  administradorActual = signal<DoublyNode | null>(null);  
  nombrePaciente = '';


  constructor() {
    this.listaPacientes.append("Juan"); 


    this.medicos.append("Dr Smith");
    this.medicos.append("Dra Johnson");
    this.medicos.append("Dr Rodriguez");
    this.medicos.append("Enfermera Realpe");
    this.medicoActual.set(this.medicos.current);

    this.comiteAdmnistrativo.append("Jefe Andrés");
    this.comiteAdmnistrativo.append("Jefa Maria");
    this.comiteAdmnistrativo.append("Jefe Carlos");
    this.administradorActual.set(this.comiteAdmnistrativo.current);


  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.avanzarTurno();
      this.medicoActual.set(this.medicos.current);
    }, 10000); 
  }

  ngOnDestroy() {
    
      clearInterval(this.intervalId);
    
  }

  agregarPaciente(nombre: string) {
    this.listaPacientes.append(nombre); 
  }

  atenderPaciente(pacienteAtendido: Node) {
    this.historialPacientesAtendidos.append(pacienteAtendido.nombre); 
    this.listaPacientes.remove(pacienteAtendido.nombre); 
  }

  verPacienteActual(): Node | null {
    let pacienteActual = this.listaPacientes.head;
    if (pacienteActual) {
      return pacienteActual; 
    } else {
      return null; 
    }
  }
  obtenerHistorialComoArreglo(): DoublyNode[] {
  let resultado: DoublyNode[] = [];
  let current = this.historialPacientesAtendidos.tail; 
  while (current) {
    resultado.push(current);
    current = current.prev;
  }
  return resultado;

}

  avanzarTurno() {
  this.medicos.getNext();
  }

  avanzarComite() {
  this.comiteAdmnistrativo.getNext();
  this.administradorActual.set(this.comiteAdmnistrativo.current);
}

retrocederComite() {
  this.comiteAdmnistrativo.getPrev();
  this.administradorActual.set(this.comiteAdmnistrativo.current);
}

}
