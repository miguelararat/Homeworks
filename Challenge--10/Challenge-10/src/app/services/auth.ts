import { inject, Injectable, signal } from '@angular/core';
import { Supabase } from './supabase';
import {Session} from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root',
})
export class Auth {

  private sb = inject(Supabase).cliente;
  session = signal<Session | null>(null);
  constructor () {
 
    this.sb.auth.getSession().then(({data}) => this.session.set(data.session));
    this.sb.auth.onAuthStateChange((_evento, s) => this.session.set(s));

    

  }

  registrar(email: string, clave: string){
      return this.sb.auth.signUp({email, password: clave});
  }

  entrar(email: string, clave: string){
    return this.sb.auth.signInWithPassword({email, password: clave});
  }

  salir(){
    return this.sb.auth.signOut();
  }

  async getSession() {
  const { data } = await this.sb.auth.getSession();
  return data.session;
  }
}
