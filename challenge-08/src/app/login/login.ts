import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router)

  email = '';
  password = '';
  error = false;

  entrar(){
    if(this.auth.entrar(this.email, this.password)){
      this.error = false;
      this.router.navigate(['/ejercicio-6'])
    }
    else{
      this.error = true;
    }
  }
}
