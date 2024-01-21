import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[authGuard],
    loadChildren: () => import('./app-modules/app-root.module').then(m => m.AppRootModule)
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
