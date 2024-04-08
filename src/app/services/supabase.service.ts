import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient
  private _session: AuthSession | null = null

  constructor(private env: EnvService, private router: Router) {
    this.supabase = createClient(env.supabaseUrl, env.supabaseKey)
  }

  get session() {
    return this._session
  }
  async getSession() {
    this._session = (await this.supabase.auth.getSession()).data.session;
    return this._session;
  }
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string) {

    return this.supabase.auth.signInWithOtp(
      {
        email : email,
        options:{
          shouldCreateUser:true,
          emailRedirectTo: 'http://localhost:4200/app/dashboard'
        }
      }
      )
  }

  signInWithPassword(email: string, password: string) {

    return this.supabase.auth.signInWithPassword(
      {
        email : email,
        password : password
      }
      )
  }

  signOut() {
    this.supabase.auth.signOut().then((res)=>{
      this.router.navigateByUrl('/login');
    });
    return
  }

  getUser(){
    return this.supabase.auth.getUser();
  }
}
