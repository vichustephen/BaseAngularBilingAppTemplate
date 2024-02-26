import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule
  ],
  exports:[
    CommonModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    PanelModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule
  ]
})
export class SharedModule { }
