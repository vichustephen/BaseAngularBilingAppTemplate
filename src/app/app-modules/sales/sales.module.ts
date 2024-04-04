import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SaleOrderComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
