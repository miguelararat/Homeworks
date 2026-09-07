import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedList } from './models/linked-list';
import { TurnDisplay } from './turn-display/turn-display';
import { AddTurn } from './add-turn/add-turn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TurnDisplay, AddTurn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   list = new LinkedList();
   current = signal(this.list.head);

  constructor(){{
    this.list.append("Turno 1");
    this.list.append("Turno 2");
    this.list.append("Turno 3");
    this.current.set(this.list.head)
  }}

  nextTurn(){
    var current = this.current();
    if(current){
      this.current.set(current.next);
    }
    
  }

  handleAddTurn(value : string){
    this.list.append(value);
  }
}
