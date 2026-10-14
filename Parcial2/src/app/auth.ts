import {Injectable, signal} from '@angular/core';
import {signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/config';

@Injectable({
  providedIn: 'root'
})
export class Auth{
    usuario = signal<string | null>(null);
    error = signal<string | null>(null);
    listo: Promise<void>;

    constructor(){
        this.listo = new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.usuario.set(user.email);
                } else {
                    this.usuario.set(null);
                }
                resolve();
            });
        });
    }

    estaLogueado(): boolean {
        return this.usuario() !== null;
    }

    async Login(email: string, password: string){
        this.error.set(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error: any) {
            this.error.set(error.message);
            return false;
        }
    }

    async Register(email: string, password: string){
        this.error.set(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error: any) {
            this.error.set(error.message);
            return false;
        }
    }

    async Logout(){
        await signOut(auth);
    }
}