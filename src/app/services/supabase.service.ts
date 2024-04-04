import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor(private env: EnvService) {
    this.supabase = createClient(env.supabaseUrl, env.supabaseKey)
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
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
    return this.supabase.auth.signOut()
  }

  getUser(){
    return this.supabase.auth.getUser();
  }
}
