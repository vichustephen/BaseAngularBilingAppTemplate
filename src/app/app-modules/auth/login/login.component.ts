import { SupabaseService } from '../../../services/supabase.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private supabaseService: SupabaseService,
              private router: Router,private themeService: LayoutService){

  }


  ngOnInit(){
    //this.supabaseService.authChanges(this.authCallback);
    if(this.supabaseService.session){
      this.router.navigateByUrl('/dashboard',{replaceUrl:true});
    }
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
  }
authCallback(event:any,session:any){
  console.log(event);
  console.log(session);
}
  onLogin(){
    console.log(this.loginForm);
    this.supabaseService.signIn(this.loginForm.controls['email'].value).then((val)=>{
      console.log(val);
    }).catch((val)=>{
      console.log(val);
    });
  }
}
