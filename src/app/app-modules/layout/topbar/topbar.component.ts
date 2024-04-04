import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { Themes } from '../../../shared/const';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {

  isDarkMode :boolean = false;
  @ViewChild('menubutton') menuButton!: ElementRef;

  constructor(public layoutService: LayoutService) {

  }
  ngOnInit(): void {

  }

  switchTheme(){
    if(this.isDarkMode){
      this.layoutService.switchTheme(Themes.LIGHT);

    }
    else{
      this.layoutService.switchTheme(Themes.DARK);
    }
    this.isDarkMode = !this.isDarkMode;
  }
}
