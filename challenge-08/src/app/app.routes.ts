import { Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard-guard';
import { Login } from './login/login';
import { Register } from './register/register';
import { Tareas } from './tareas/tareas';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'tareas', component: Tareas, canActivate: [authGuardGuard] },
  { path: '**', redirectTo: 'login' }
];