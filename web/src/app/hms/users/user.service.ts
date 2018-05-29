import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import * as moment from 'moment';
@Injectable()
export class UserService {
  user_name: String;
  full_name: String;
  constructor(private http: HttpClient, private router: Router) {

  }


  authenticate(user_name, password, staff: boolean, callback): any {
    console.log("Inside the services"+"------>"+user_name+" ------>"+password+" ---->"+staff)
    if( user_name == "rafik" && password == "ahamed"){
      this.router.navigate(['/home/']);
    }
    // if (staff) {
    //   this.http
    //     .post(`${environment.apiUrl}/staff-assignments`, {
    //       user_name: user_name,
    //       password: password
    //     })
    //     .subscribe((resp: staff) => {
    //       console.log(resp);
    //       callback(resp);
    //       if (resp) {
    //         this.staff = resp;
    //         this.user_name = this.staff.user_name;
    //         this.full_name = this.staff.staff_name;
    //         this.router.navigate(['/home/mark-register']);
    //       } else {
    //         console.error("Not Found!")
    //       }
    //     }, (error) => {
    //       console.error(error);
    //     });
    // } else {
    //   this.http
    //     .post(`${environment.apiUrl}/student-details`, {
    //       user_name: user_name,
    //       password: password
    //     })
    //     .subscribe((resp: student) => {
    //       callback(resp);
    //       if (resp) {
    //         this.student = resp;
    //         this.user_name = this.student.user_name;
    //         this.full_name = this.student.stud_name;
    //         this.router.navigate(['/home/hall-ticket']);
    //       } else {
    //         console.error("Not Found!")
    //       }
    //     }, (error) => {
    //       console.error(error);
    //     });
    // }
  }
}
