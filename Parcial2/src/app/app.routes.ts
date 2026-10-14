import { Routes } from '@angular/router';
import { guardGuard } from './guard-guard';
import { Login } from './login/login';
import { Register } from './register/register';
import { Explorador } from './explorador/explorador';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'explorador', component: Explorador, canActivate: [guardGuard] },
  { path: '**', redirectTo: 'login' }
];
