import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';
import { AddImageComponent } from './images/add-image/add-image.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ImagesComponent,
    ReportsComponent,
    Report1Component,
    Report2Component,
    AddImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
