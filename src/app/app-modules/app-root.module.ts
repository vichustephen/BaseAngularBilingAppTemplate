import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRootRoutingModule } from './app-root-routing.module';
import { AppRootComponent } from './app-root.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppRootComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRootRoutingModule,
    SharedModule
  ]
})
export class AppRootModule { }
