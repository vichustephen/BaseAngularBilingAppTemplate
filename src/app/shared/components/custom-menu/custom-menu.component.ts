import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.scss'
})
export class CustomMenuComponent implements OnInit {

  @Input() menuModel : MenuItem[] = [];

  constructor(){

  }

  ngOnInit(){

  }

}
