import { SupabaseService } from './../../services/supabase.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private supabaseService: SupabaseService){

  }

  ngOnInit(){

    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
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
