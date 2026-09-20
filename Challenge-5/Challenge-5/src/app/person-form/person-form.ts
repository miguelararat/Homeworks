import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../Models/Person';

@Component({
  selector: 'app-person-form',
  imports: [FormsModule],
  templateUrl: './person-form.html',
  styleUrl: './person-form.css',
})
export class PersonForm {
  name = '';
  withdrawalAmount : number | null = null;
  @Output() salida = new EventEmitter<Person>();

  onSubmit(){
  this.salida.emit(new Person(this.name,this.withdrawalAmount))
  };

}

