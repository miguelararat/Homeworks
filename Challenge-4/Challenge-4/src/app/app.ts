import { Component, signal } from '@angular/core';
import { Stack } from './stack';
import { FormsModule } from '@angular/forms';
import { libro as Libro} from './libro';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreLibro : string | any
  autorLibro : string | any
  editorial : string | any;
  isbn : string | any;
  stack = new Stack();
  libro : any;

  constructor(){
    this.stack.push(new Libro("Libro 1", "Pepito Perez", "Editorial 1", "ISBN-1"))
    this.stack.push(new Libro("Libro 2", "Fernando Perez", "Editorial 2", "ISBN-2"))
    this.stack.push(new Libro("Asesinato para principiantes", "Holly Jackson", "Editorial 3", "ISBN-3"))
    this.stack.print();
  }

  enviarDatos(datos: any){
     const libro = new Libro(this.nombreLibro, this.autorLibro, this.editorial, this.isbn);
    this.stack.push(libro)
    
  this.nombreLibro = "";
  this.autorLibro = "";
  this.editorial = "";
  this.isbn = "";
  }

}
