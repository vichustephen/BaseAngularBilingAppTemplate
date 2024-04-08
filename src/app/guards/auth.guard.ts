import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(SupabaseService);
  const router = inject(Router);
  const redirectUrl = state.url;
  //console.log(redirectUrl);
 let session = await authService.getSession();
  if(session){
    //console.log(session);
    return true;
  }
  let params = { redirectUrl: redirectUrl }
  router.navigate(['/login'],{ queryParams:  params, replaceUrl:true})
  return false;
};

export const loginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(SupabaseService);
  const router = inject(Router);
  const redirectUrl = state.url;
  console.log(redirectUrl);
 let session = await authService.getSession();
  if(session){
    router.navigate(['/dashboard'],{replaceUrl:true})
    return false;
  }
  return true;
};

