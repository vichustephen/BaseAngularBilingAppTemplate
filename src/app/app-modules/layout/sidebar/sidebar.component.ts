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
        label: "dashboard",
        routerLink: ['dashboard'],
        icon:"pi pi-home",
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: "inventory",
        icon:"pi pi-box",
        routerLink: ['inventory'],
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: "sales",
        icon:"pi pi-shopping-cart",
        routerLink:["/app/sales"],
        routerLinkActiveOptions: { exact: false },
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
        label: "purchase",
        routerLink:["/app/purchase"],
        icon:"pi pi-shopping-bag",
        routerLinkActiveOptions: { exact: false },
        items:
          [
            {
              label : "purchase orders",
              routerLink:["/app/purchase/purchase-orders"],
              routerLinkActiveOptions: { exact: true },
            }
          ]
      }
    ]
  }
}
