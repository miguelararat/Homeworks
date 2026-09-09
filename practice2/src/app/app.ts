import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoublyNode } from '../models/doubly-node';
import { DoublyLinkedList } from '../models/circular-doubly-linked-list';
import { ProductDisplay } from './components/product-display/product-display';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy{
  private intervalId: any;
  lista = signal(new DoublyLinkedList());
  actual = signal<DoublyNode | null>(null);
  
  constructor(){
    this.lista().append("Producto A");
    this.lista().append("Producto B");
    this.lista().append("Producto C");
    this.actual.set(this.lista().head)


  }
  
  ngOnInit() {
      this.intervalId = setInterval(()=>
      {
        this.siguiente();
      },3000);
  }
  ngOnDestroy() {
       clearInterval(this.intervalId);
  }

  siguiente(){
  this.actual.set(this.actual()!.next);
  }

  anterior(){
  this.actual.set(this.actual()!.prev);
  }

}
