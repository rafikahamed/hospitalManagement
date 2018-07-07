import { Component } from '@angular/core';
import { AdultService } from '../users/adult.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'hms-home',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})

export class AdultMainComponent {
  errorMsg: string;
  adultForm: FormGroup;

  constructor(public adultService: AdultService, private router: Router) {
    this.errorMsg = null;
    this.adultForm = new FormGroup({
      admission_id: new FormControl(),
      moc_id: new FormControl(),
      Institution_name: new FormControl(),
      staff_id: new FormControl(),
      course_id: new FormControl(),
      year_of_study: new FormControl(),
      section_id: new FormControl(),
      fullname_adult: new FormControl(),
      marital_adult: new FormControl(),
      parentsname_adult: new FormControl(),
      dob_adult: new FormControl(),
      age_adult: new FormControl(),
      gender_adult: new FormControl(),
      mobile_adult: new FormControl(),
      email_adult: new FormControl(),
      address_adult: new FormControl(),
      city_adult: new FormControl(),
      state_adult: new FormControl(),
      postalcode_adult: new FormControl(),
      allergy_adult: new FormControl(),
      knownillness_adult: new FormControl(),
      medicines_present_adult: new FormControl(),
      pastsurgery_adult: new FormControl(),
      cvs_adult: new FormControl()
    });
  }

  adultSubmit() {
    this.adultService.adultSubmission(this.adultForm, (resp) => {
       if(!resp){
         this.errorMsg = "Invalid Credentials!";
       }
     })
  }
}

