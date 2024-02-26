import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { AppRootComponent } from './app-root.component';

const routes: Routes = [

  {
    path:'',
    component: AppRootComponent,
    children:[
      {
        path:'dashboard',
        //canActivate:[authGuard],
        component:DashboardComponent
      },
      {
        path:'sales',
        //canActivate:[authGuard],
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
      },
      {
        path:'purchase',
        canActivate:[authGuard],
        loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule)
      },
      {
        path:'inventory',
        canActivate:[authGuard],
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
