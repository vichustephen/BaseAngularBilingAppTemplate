import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss'
})
export class AppRootComponent {

  constructor(private themeService: ThemeService) {

  }

  switchTheme(theme:string){
    this.themeService.switchTheme(theme);
  }
}
