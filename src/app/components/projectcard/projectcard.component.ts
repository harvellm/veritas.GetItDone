import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html'
})
export class ProjectcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dialog: boolean = false;

  showDialog() {
    this.dialog = true;
  }

}
