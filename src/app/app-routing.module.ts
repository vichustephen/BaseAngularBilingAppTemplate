import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, loginGuard } from './guards/auth.guard';
import { LoginComponent } from './app-modules/auth/login/login.component';

const routes: Routes = [
  {
    path:'',
   // canActivate:[authGuard],
    children:[
      {
        path:'app',
       // canActivate:[authGuard],
        loadChildren: () => import('./app-modules/app-root.module').then(m => m.AppRootModule)
      },
      {
        path:'login',
        canActivate:[loginGuard],
        component:LoginComponent
      },
        {
        path:'**',
        redirectTo:'app',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
