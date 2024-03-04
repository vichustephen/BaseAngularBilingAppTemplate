import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.scss'
})
export class CustomMenuComponent implements OnInit {

  @Input() menuModel : MenuItem[] = [];
  @Input() isChild : boolean = false;
  private clickDebouncer = new Subject<MenuItem>();

  constructor(public router: Router){

  }

  ngOnInit(){
    this.clickDebouncer.pipe(debounceTime(350)).subscribe((val:MenuItem)=>{
      val.expanded = !val.expanded;
    })
  }

  expandMenu(menu:MenuItem){
    this.clickDebouncer.next(menu);
  }

}
