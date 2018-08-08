import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html'
})
export class ProjectinfoComponent implements OnInit {

  @Input()
  open:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
