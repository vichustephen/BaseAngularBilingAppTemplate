import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'purchase-orders',
    pathMatch: 'full'
  },
  {
    path: 'purchase-orders',
    component: PurchaseOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
