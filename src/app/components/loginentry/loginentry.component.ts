import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-loginentry',
  templateUrl: './loginentry.component.html'
})
export class LoginentryComponent implements OnInit {

  constructor(private router: Router, private state: StateService, private logger: LogService) { }

  ngOnInit() {
  }

  login(): void {
    // TODO:Check login

    this.logger.log('Login attempted');
    this.router.navigateByUrl('/dashboard');

    this.state.isAdmin = true;
  }

}
