import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItem } from '../contact-item/contact-item';


@Component({
  selector: 'app-contact-list',
  imports: [ContactItem],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  @Input() contacts: Contact[] = [];
  @Output() deleteContact = new EventEmitter<number>();

  enviarId(id : number){
    this.deleteContact.emit(id)
  }
}
