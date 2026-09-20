import { Component, Input } from '@angular/core';
import { Person } from '../Models/Person';

@Component({
  selector: 'app-queue-list',
  imports: [],
  templateUrl: './queue-list.html',
  styleUrl: './queue-list.css',
})
export class QueueList {
  @Input() people: Person[] = [];
  
  

  
}
