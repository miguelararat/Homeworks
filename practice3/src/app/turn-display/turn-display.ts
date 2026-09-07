import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-turn-display',
  imports: [],
  templateUrl: './turn-display.html',
  styleUrl: './turn-display.css',
})
export class TurnDisplay {

    @Input() currentTurn: any;
    @Output() next = new EventEmitter<void>();

    onNextClick(){
      this.next.emit();
    }

}
