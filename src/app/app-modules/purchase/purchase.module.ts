import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';


@NgModule({
  declarations: [
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
