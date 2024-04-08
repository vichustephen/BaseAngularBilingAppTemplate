import { SupabaseService } from './../../../services/supabase.service';
import { Component, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  items: MenuItem[];
  userMenuItems: MenuItem[];
  overlay: OverlayPanel;
  constructor(public el: ElementRef, private supabaseService: SupabaseService) {

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
        items:
        [
          {
            label : "items",
            routerLink:["/app/inventory/items"],
            routerLinkActiveOptions: { exact: true },
          }
        ]
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
            },
            {
              label : "customers",
              routerLink:["/app/sales/customers"],
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


    this.userMenuItems = [
      {
        label: "Settings",
        icon:"pi pi-wrench",
        command:() =>{
          this.overlay.hide();
        }

      },

      {
        label: "Logout",
        icon:"pi pi-user",
        command: ()=>{
          this.supabaseService.signOut();
          this.overlay.hide();
        }
      },
    ]
  }

  setOverlayElement(overlayElem:OverlayPanel){
    this.overlay = overlayElem;
  }
}
