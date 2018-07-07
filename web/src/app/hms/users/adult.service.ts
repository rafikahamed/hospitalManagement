import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import * as moment from 'moment';

@Injectable()
export class AdultService {
  
  constructor(private http: HttpClient, private router: Router) {

  }

  adultSubmission(formData, callback): any {
    console.log(formData.value);
    // if( user_name == "rafik" && password == "ahamed"){
    //   this.router.navigate(['/home/']);
    // }
   
  }
}
