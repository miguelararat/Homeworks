import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BinaryTree } from './binaryTree';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  arbolBinario = new BinaryTree();
  tipoActual : string = "";
   resultado: number[] = [];
  constructor(){
    this.arbolBinario.insertar(25);
        this.arbolBinario.insertar(15);
        this.arbolBinario.insertar(50);
        this.arbolBinario.insertar(10);
        this.arbolBinario.insertar(22);
        this.arbolBinario.insertar(35);
        this.arbolBinario.insertar(70);
        this.arbolBinario.insertar(12);
        this.arbolBinario.insertar(18);
        this.arbolBinario.insertar(44);
        this.arbolBinario.insertar(66);
        this.arbolBinario.insertar(90);
        this.arbolBinario.insertar(11);
        this.arbolBinario.insertar(64);

  }

  preOrder() {
    this.resultado = this.arbolBinario.preorden();
    this.tipoActual = 'PreOrder';
    console.log('Resultado:', this.resultado); // ← temporal, para debug
}

  postOrden(){
    this.resultado = this.arbolBinario.postorden();
    this.tipoActual = 'PostOrden';
  }

  inOrder(){
    this.resultado = this.arbolBinario.inorden();
    this.tipoActual = 'InOrden';
  }
}
