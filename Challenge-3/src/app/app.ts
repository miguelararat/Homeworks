import { Component, signal } from '@angular/core';
import { LinkedListComponent } from './pages/linked-list/linked-list';

@Component({
  selector: 'app-root',
  imports: [LinkedListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
