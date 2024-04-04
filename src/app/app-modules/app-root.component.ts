import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { Subscription, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss'
})
export class AppRootComponent implements OnInit {

  overlayMenuOpenSubscription: Subscription;
  menuOutsideClickListener: any;
  showSpinner:boolean = false;
  @ViewChild(SidebarComponent) appSidebar!: SidebarComponent;

  @ViewChild(TopbarComponent) appTopbar!: TopbarComponent;
  constructor(private layoutService: LayoutService, public renderer: Renderer2, public router: Router) {
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
            this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
                    || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));

                if (isOutsideClicked) {
                    this.hideMenu();
                }
            });
        }
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
            this.hideMenu();
            //this.hideProfileMenu();
        });
      });
  }
  ngOnInit(): void {
    this.layoutService.isSpinnerShown.subscribe((val:boolean)=>{
      setTimeout(()=>{
        this.showSpinner = val;
      })
    })
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
        this.menuOutsideClickListener();
        this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
}
blockBodyScroll(): void {
  if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
  }
  else {
      document.body.className += ' blocked-scroll';
  }
}

unblockBodyScroll(): void {
  if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
  }
  else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
          'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

  get containerClass() {
    return {
        'layout-theme-light': this.layoutService.config().colorScheme === 'light',
        'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
        'layout-overlay': this.layoutService.config().menuMode === 'overlay',
        'layout-static': this.layoutService.config().menuMode === 'static',
        'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
        'layout-overlay-active': this.layoutService.state.overlayMenuActive,
        'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
        'p-input-filled': this.layoutService.config().inputStyle === 'filled',
        'p-ripple-disabled': !this.layoutService.config().ripple
    }
}
}
