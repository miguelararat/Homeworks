import { authGuardGuard } from './auth-guard-guard';
import { Routes} from '@angular/router';
import { App as Ejercicio6 } from '../Challenge6/src/app/app';
import { App as Ejercicio7 } from '../Challenge7/src/app/app';
import { Login } from './login/login';

export const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full'},
{path: 'login', component: Login},
{ path: 'ejercicio-6', component: Ejercicio6, canActivate: [authGuardGuard] },
{ path: 'ejercicio-7', component: Ejercicio7, canActivate: [authGuardGuard] },
];