import { Actor } from '../../../models/actors.model';
import { ApiResponse } from '../../../models/api-response.model';
import { TableColumn } from '../../../models/common.model';
import { LayoutService } from '../../../services/layout.service';
import { ActorTypes } from '../../../shared/const';
import { ActorsService } from './../../../services/actors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {

  constructor(private actorsService: ActorsService, private layout: LayoutService){

  }
  cols: TableColumn[] = [
    {
      columnName : "Name",
      field : "name"
    },
    {
      columnName : "Contact",
      field : "contact"
    },
    {
      columnName : "Address",
      field : "address"
    }
  ]
  products : Actor[] = [];
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.layout.isSpinnerShown.next(true);
    this.actorsService.getActors(ActorTypes.CUSTOMER).subscribe((res:ApiResponse<Actor[]>)=>{
      this.products = res.data;
      this.layout.isSpinnerShown.next(false);
    },(err)=>{
      this.layout.isSpinnerShown.next(false);
    })
  }
}
