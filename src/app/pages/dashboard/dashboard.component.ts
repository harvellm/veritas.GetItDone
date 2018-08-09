import { Component, OnInit } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { IProject } from '../../models/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  isAddEditOpen:boolean;
  allProjects:IProject[];
  constructor(private projectData:ProjectdataService) { }

  ngOnInit() {
    this.projectData.getAllProjects().subscribe((data)=>{
      this.allProjects = data;
      debugger;
    });
    this.isAddEditOpen = false;
    console.log('in it');
  }

  openAddEdit(isNew:boolean):void{
    debugger;
    this.isAddEditOpen = true;
  }
}
