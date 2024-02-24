import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  @ViewChild('menubutton') menuButton!: ElementRef;

  constructor(public layoutService: LayoutService) {

  }

  switchTheme(theme:string){
    this.layoutService.switchTheme(theme);
  }
}
