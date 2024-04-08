import { SupabaseService } from '../../../services/supabase.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm : FormGroup;

  redirectUrl : string = 'app/dashboard'
  constructor(private fb: FormBuilder, private supabaseService: SupabaseService,
              private router: Router,private themeService: LayoutService,
              private route: ActivatedRoute){

  }


  ngOnInit(){
    // if(this.supabaseService.session){
    //   this.router.navigateByUrl('/dashboard',{replaceUrl:true});
    // }
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    });

    this.route.queryParams.subscribe(params=>{
      //console.log(params['redirectUrl'])
      if(params['redirectUrl'])
        {
          this.redirectUrl = params['redirectUrl'];
        }
    })
  }

  onLogin(){
    //console.log(this.loginForm);
    this.supabaseService.signInWithPassword(this.loginForm.controls['email'].value, this.loginForm.controls["password"].value).then((val)=>{
      console.log(val);
      this.router.navigateByUrl(this.redirectUrl,{replaceUrl:true});
    }).catch((val)=>{
      console.log(val);
    });
  }
}
