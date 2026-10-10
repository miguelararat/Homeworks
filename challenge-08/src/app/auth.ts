import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  usuario = signal<string | null>(null);

  estaLogueado(){
    return this.usuario() !== null;

  }

  entrar(email: string, password: string): boolean {
    if (email === 'user@mail.com' && password === '123') {
      this.usuario.set(email);
      return true;
    }
    return false;
  }

  salir(){
    this.usuario.set(null);
  }
}

