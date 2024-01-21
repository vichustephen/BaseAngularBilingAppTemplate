import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(SupabaseService);
  const router = inject(Router);
  if(authService._session){
    console.log(authService._session);
    return true;
  }
  router.navigateByUrl('/login')
  return false;
};
