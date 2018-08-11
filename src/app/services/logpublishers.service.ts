import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi }
  from "./logpublisher";
import { Config } from '../config/config';

@Injectable()
export class LogPublishersService {
  constructor(private http: HttpClient, private config:Config) {
    // Build publishers arrays
    this.buildPublishers();
  }

  // Public properties
  publishers: LogPublisher[] = [];

  // Build publishers array
  buildPublishers(): void {
    // Create instance of LogConsole Class
    this.publishers.push(new LogConsole());
    this.publishers.push(new LogLocalStorage());
    this.publishers.push(new LogWebApi(this.http,this.config));
  }
}
