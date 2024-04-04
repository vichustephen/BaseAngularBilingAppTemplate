import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, Session, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../shared/const';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http : HttpClient, private env: EnvService) {

  }

  getActors(type:number):Observable<any> {

    let url =`${this.env.apiBaseUrl}/${API_URL.GET_ACTORS}`;
    let params = new HttpParams()
    .set('type',type);
    return this.http.get(url, { params : params });

  }


}
