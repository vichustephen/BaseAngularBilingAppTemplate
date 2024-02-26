import { Component, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  items: MenuItem[]
  constructor(public el: ElementRef) {

  }
  ngOnInit() {
    this.items = [
      {
        label: "sales",
        items:
          [
            {
              label : "sale orders",
              routerLink:["/app/sales/sale-orders"],
              routerLinkActiveOptions: { exact: true },
            }
          ]
      },
      {
        label: "inventory",
        routerLink: ['inventory']
      }
    ]
  }
}
