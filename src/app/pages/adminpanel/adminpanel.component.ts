import { Component, OnInit } from '@angular/core';
import { IUser, User } from '../../models/user';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html'
})
export class AdminpanelComponent implements OnInit {

  fullName: string;
  userName: string;
  password: string;
  email: string;
  role: boolean;
  userMessage = '';

  btnEdit = false;
  btnAdd = false;
  dialogTitle: string;

  dialogUser = false;
  dialogWarn = false;

  constructor(private userService: UserdataService) { }

  ngOnInit() {
  }

  addUser(): void {
    const newUser: IUser = new User();
    newUser.Email = this.email;
    newUser.UserName = this.userName;
    newUser.Password = this.password;
    newUser.Role = this.role === true ? 1 : 0;
    this.userService.addNewUser(newUser).subscribe((res: IUser) => {
      this.userMessage = 'User created successfully!';
    });
  }

  /* editUser():void {
    let newUser:IUser = new User();
    newUser.Email = this.email;
    newUser.UserName = this.userName;
    newUser.Password = this.password;
    newUser.Role = this.role===true?1:0;
    this.userService.addNewUser(newUser).subscribe((res:IUser)=>{
      debugger;
      this.userMessage = 'User created successfully!'
    })
  } */

  /* deleteUser():void {
    let newUser:IUser = new User();
    newUser.Email = this.email;
    newUser.UserName = this.userName;
    newUser.Password = this.password;
    newUser.Role = this.role===true?1:0;
    this.userService.addNewUser(newUser).subscribe((res:IUser)=>{
      debugger;
      this.userMessage = 'User created successfully!'
    })
  } */

  showDialogEdit() {
    this.dialogUser = true;
    this.btnEdit = true;
    this.btnAdd = false;
    this.dialogTitle = 'Edit User';
  }

  showDialogAdd() {
    this.dialogUser = true;
    this.btnAdd = true;
    this.btnEdit = false;
    this.dialogTitle = 'Add New User';
  }

  btnDeleteUser () {
    this.dialogWarn = true;
  }

}

