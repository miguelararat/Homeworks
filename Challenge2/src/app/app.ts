import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact, NewContact } from './contact.model';
import { Loader } from './loader/loader';
import { ContactList } from './contact-list/contact-list';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader, ContactList, ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Challenge2');

  public contacts = signal<Contact[]>([]);
  public isLoading = signal<boolean> ( true );
  eliminarContacto(id: number) {
  this.contacts.set(this.contacts().filter(contacto => contacto.id !== id))
}

  agregarContacto(nuevo: NewContact) {
    const newContact: Contact = {
      id: Date.now(),
      name: nuevo.name,
      phone: nuevo.phone
    };
    this.contacts.set([...this.contacts(), newContact]);
  }

  constructor(){
  setTimeout(()=> {
    this.contacts.set([
      {id: 1, name: "Juan", phone: "3203206060"}
    , {id: 2, name: "Daniel" , phone : "3213217070"}])
    this.isLoading.set(false);
    
  }, 2000);
  }
}
