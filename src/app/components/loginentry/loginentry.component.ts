import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-loginentry',
  templateUrl: './loginentry.component.html'
})
export class LoginentryComponent implements OnInit {

  constructor(private router:Router, private state:StateService) { }

  ngOnInit() {
  }
  
  login():void{
    //TODO:Check login
    this.router.navigateByUrl('/dashboard');
    this.state.isAdmin = true;
  }

}
