import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [

  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    //canActivate:[authGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
