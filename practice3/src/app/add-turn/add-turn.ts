import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-turn',
  imports: [FormsModule],
  templateUrl: './add-turn.html',
  styleUrl: './add-turn.css',
})
export class AddTurn {
 
  @Output() newTurnAdded = new EventEmitter<string>();
  turnValue: string = ""
  addTurn(){
    if(this.turnValue === "" || this.turnValue === null){
      return;
    }
    this.newTurnAdded.emit(this.turnValue);
    this.turnValue = "";
  }
}
