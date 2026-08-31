import { Component,  EventEmitter,  signal, Output } from '@angular/core';
import { Contact, NewContact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  public name = signal<string>('');
  public phone = signal<string>('');

  @Output() contactAdded = new EventEmitter<NewContact>();

  agregarContacto() {
    const newContact: NewContact = {
      
      name: this.name(),
      phone: this.phone()
    };
    this.contactAdded.emit(newContact);
    
  }

  capturarNombre(e : any){
    this.name.set(e.target.value);
  }
  capturarTelefono(e : any){
    this.phone.set(e.target.value);
  }
}
