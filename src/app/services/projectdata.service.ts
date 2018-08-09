import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor(private http:HttpClient, private config:Config) { }
  getAllProjects():Observable<any>{
    return this.http.get(`${this.config.baseApiUrl}projects`);
  }



}
