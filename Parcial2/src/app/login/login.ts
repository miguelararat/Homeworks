import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected readonly auth = inject(Auth);
  private router = inject(Router)

  email = '';
  password = '';
  error = false;

  async entrar(){
    const ok = await this.auth.Login(this.email, this.password);
    if(ok){
      this.router.navigate(['/explorador'])
    }
  }
}