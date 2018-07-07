import { Component, ElementRef, ViewChild, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'app/hms/users/user.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'hms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: string;
  loginForm: FormGroup;

  constructor(public userservice: UserService, private router: Router) {

    this.errorMsg = null;
    this.loginForm = new FormGroup({
      user_name: new FormControl(),
      password: new FormControl(),
      isStaff: new FormControl(true)
    });
  }

  login() {
    this.userservice.authenticate(this.loginForm.value.user_name, this.loginForm.value.password, this.loginForm.value.isStaff, (resp) => {
      if(!resp){
        this.errorMsg = "Invalid Credentials!";
      }
    })
  }
}
