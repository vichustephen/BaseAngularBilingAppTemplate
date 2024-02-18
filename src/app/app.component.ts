import { Component } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ShopFrontWeb';

  constructor( private supabaseService: SupabaseService,
    private router: Router){

}
  ngOninit(){
    this.supabaseService.authChanges(this.authCallback);
  }
  authCallback(event:any,session:any){
    console.log(event);
    console.log(session);
  }
}
