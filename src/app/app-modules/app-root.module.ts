import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRootRoutingModule } from './app-root-routing.module';
import { AppRootComponent } from './app-root.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AppRootComponent,
  ],
  imports: [
    CommonModule,
    AppRootRoutingModule,
    SharedModule
  ]
})
export class AppRootModule { }
