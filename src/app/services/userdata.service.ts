import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient, private config:Config) { }

  addNewUser(user:IUser):Observable<any> {
    return this.http.post(`${this.config.baseApiUrl}users`,user);
  }
}
