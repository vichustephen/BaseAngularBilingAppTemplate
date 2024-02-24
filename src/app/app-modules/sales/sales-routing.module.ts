import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleOrderComponent } from './sale-order/sale-order.component';

const routes: Routes =
[
  {
    path: '',
    component: SaleOrderComponent
  },
  {
    path: 'sale-orders',
    component: SaleOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
