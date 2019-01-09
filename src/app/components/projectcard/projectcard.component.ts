import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html'
})
export class ProjectcardComponent implements OnInit {

  dialog = false;

  constructor() { }

  ngOnInit() {
  }

  showDialog() {
    this.dialog = true;
  }

}
