import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserIdleModule } from 'angular-user-idle';
import { UiModule } from 'app/ui/ui.module';
import { HmsComponent } from 'app/hms/hms.component';
import { HomeComponent } from 'app/hms/hospitalhome/home.component';
import {PediatricMainComponent} from 'app/hms/Pediatric/pediatric.component';
import {AdultMainComponent} from 'app/hms/Adult/adult.component';
import { LoginComponent } from 'app/hms/login/login.component';

import { UserService } from 'app/hms/users/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    // Time out - after idle, how long to wait before logout
    // Idle -  maximum user Idle time in seconds we can accept
    UserIdleModule.forRoot({idle: 300, timeout: 30, ping: 1}),
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "home", component: HomeComponent },
      { path: 'pediatric', component: PediatricMainComponent },
      { path: 'adults', component: AdultMainComponent }
    
    ], { useHash: true }),
    UiModule
  ],
  declarations: [
    HmsComponent,
    LoginComponent,
    HomeComponent,
    PediatricMainComponent,
    AdultMainComponent
  ],
  entryComponents: [
    
  ],
  providers: [
    { provide: 'Window', useValue: window },
    UserService
  ],
  bootstrap: [
    HmsComponent
  ]
})
export class HmsModule {
  constructor() {
 
  }
}