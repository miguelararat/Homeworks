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
  anoPublicacion : number | any;
  stack = new Stack();
  libro : any;

  constructor(){
    this.stack.push(new Libro("Libro 1", "Pepito Perez", 2022))
    this.stack.push(new Libro("Libro 2", "Fernando Perez", 2023))
    this.stack.push(new Libro("Asesinato para principiantes", "Holly Jackson", 2018))
    this.stack.print();
  }

  enviarDatos(datos: any){
     const libro = new Libro(this.nombreLibro, this.autorLibro, this.anoPublicacion);
    this.stack.push(libro)
    
  this.nombreLibro = "";
  this.autorLibro = "";
  this.anoPublicacion = null; 
  }

}
