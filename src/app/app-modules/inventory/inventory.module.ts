import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
