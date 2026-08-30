import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  imports: [],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItem {
  @Input() contact!: Contact;

  @Output() parentMethod = new EventEmitter<number>();

  borrarContacto(){
    this.parentMethod.emit(this.contact.id);
  }  

}
