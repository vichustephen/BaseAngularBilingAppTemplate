import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleOrderComponent } from './sale-order/sale-order.component';


@NgModule({
  declarations: [
    SaleOrderComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
