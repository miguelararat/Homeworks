import { Component, inject, OnInit } from '@angular/core';
import { Arbol } from '../arbol';
import { NodoVista } from '../nodo-vista/nodo-vista';

@Component({
  selector: 'app-explorador',
  imports: [NodoVista],
  providers: [Arbol],
  templateUrl: './explorador.html',
  styleUrl: './explorador.scss'
})
export class Explorador implements OnInit {
  protected readonly arbol = inject(Arbol);

  ngOnInit() {
    this.arbol.getAll();
  }
}
