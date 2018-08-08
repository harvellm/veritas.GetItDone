import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginentry',
  templateUrl: './loginentry.component.html'
})
export class LoginentryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  login():void{
    //TODO:Check login
    this.router.navigateByUrl('/dashboard');
  }

}
