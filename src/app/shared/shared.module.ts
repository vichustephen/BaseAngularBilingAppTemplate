import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldsetModule,
    PanelModule
  ],
  exports:[
    CommonModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    PanelModule
  ]
})
export class SharedModule { }
