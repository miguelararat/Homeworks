import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  email = ''; clave = ''; msg = '';

  async entrar() {
    const { error } = await this.auth
      .entrar(this.email, this.clave);
    if (error) this.msg = error.message;
    else this.router.navigate(['/tareas']);
  }

  async registrar() {
    const { data, error } = await this.auth.registrar(this.email, this.clave);

    if (error) {
      this.msg = error.message;
      return;
    }

    this.msg = data.session
      ? 'Cuenta creada e iniciada correctamente.'
      : 'Cuenta creada. Revisa tu correo para confirmar el registro.';
  }
}