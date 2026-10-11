import { Injectable, signal } from '@angular/core';
import {signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/config';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  usuario = signal<string | null>(null);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);
  listo: Promise<void>;

  constructor(){
    onAuthStateChanged(auth, (user) =>{
      this.usuario.set(user ? user.email: null);
      this.cargando.set(false);
    })

     this.listo = new Promise<void>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      this.usuario.set(user ? user.email : null);
      this.cargando.set(false);
      resolve();
    });
  });
  }

  estaLogueado(){
    return this.usuario() !== null;
  }

  async entrar(email: string, password: string){
    this.error.set(null);
    try {
      await signInWithEmailAndPassword(auth, email,password)
      return true;
    } catch (err: any) {
      this.error.set(err.message);
      return false;
    }
  }
 
  async registrar(email: string, password: string) {
    this.error.set(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: any) {
      this.error.set(error.message);
      return false;
    }
  }

  async salir(){
    await signOut(auth);
  }
}

