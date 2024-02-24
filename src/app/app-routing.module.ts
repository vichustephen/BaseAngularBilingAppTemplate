import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
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
