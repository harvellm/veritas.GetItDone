import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectdataService } from '../../services/projectdata.service';
import { IProject } from '../../models/project';
import { Keymapping } from '../../enums/keymapping.enum';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  isAddEditOpen:boolean;
  allProjects:IProject[];

  constructor(private projectData:ProjectdataService, private state:StateService, private router:Router) { }

  ngOnInit() {
    this.projectData.getAllProjects().subscribe((data)=>{
      this.allProjects = data;
    });
    this.isAddEditOpen = false;
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === Keymapping.A && event.altKey===true){
      this.router.navigateByUrl('/adminpanel');
    }

  }
  openAddEdit(isNew:boolean):void{
    debugger;
    this.isAddEditOpen = true;
  }

}
