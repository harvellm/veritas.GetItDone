import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../../models/user';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  userName:string;
  password:string;
  email:string;
  role:boolean;
  userMessage:string = '';
  constructor(private userService:UserdataService) { }

  ngOnInit() {
  }

  addUser():void{
    let newUser:IUser = new User();
    newUser.Email = this.email;
    newUser.UserName = this.userName;
    newUser.Password = this.password;
    newUser.Role = this.role===true?1:0;
    this.userService.addNewUser(newUser).subscribe((res:IUser)=>{
      this.userMessage = 'User created successfully!'
    })
    
  }
}
