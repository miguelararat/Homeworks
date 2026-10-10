import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = () => {
  const auth =  inject(Auth);
  const router = inject(Router);

  return auth.estaLogueado() ? true : router.createUrlTree(['/login']);
};
