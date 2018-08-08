import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  isAddEditOpen:boolean;
  constructor() { }

  ngOnInit() {
    this.isAddEditOpen = false;
    console.log('in it');
  }

  openAddEdit(isNew:boolean):void{
    debugger;
    this.isAddEditOpen = true;
  }
}
