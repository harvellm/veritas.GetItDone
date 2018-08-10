import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-loginentry',
  templateUrl: './loginentry.component.html'
})
export class LoginentryComponent implements OnInit {

  constructor(private router:Router, private state:StateService, private logger:NGXLogger) { }

  ngOnInit() {
  }
  
  login():void{
    //TODO:Check login


    this.logger.debug('login attempted');
    this.router.navigateByUrl('/dashboard');

    this.state.isAdmin = true;
  }

}
