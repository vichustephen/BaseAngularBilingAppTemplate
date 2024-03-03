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
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CustomMenuComponent } from './components/custom-menu/custom-menu.component';


@NgModule({
  declarations: [
    CustomMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    AvatarModule,
    AvatarGroupModule,
    StyleClassModule,
    RippleModule
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
    PanelMenuModule,
    AvatarModule,
    AvatarGroupModule,
    StyleClassModule,
    RippleModule,
    CustomMenuComponent
  ]
})
export class SharedModule { }
