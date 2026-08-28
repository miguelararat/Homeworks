import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Challenge2');

  public contacts = signal<Contact[]>([]);
  public isLoading = signal<boolean> ( true );

  constructor(){
  setTimeout(()=> {
    this.contacts.set([
      {id: 1, name: "Juan", phone: "3203206060"}
    , {id: 2, name: "Daniel" , phone : "3213217070"}])
    this.isLoading.set(false);
    
  }, 2000);
  }
}
