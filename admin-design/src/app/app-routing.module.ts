import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { ImagesComponent } from './images/images.component';
import { AddImageComponent } from './images/add-image/add-image.component';

import { Report1Component } from './reports/report1/report1.component';
import { Report2Component } from './reports/report2/report2.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'reports/report1', component: Report1Component },
  { path: 'images', component: ImagesComponent },
  
  { path: 'images/edit-image/:imageUrl', component: AddImageComponent },
  { path: 'images/add-image', component: AddImageComponent },

  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'reports/report1', component: Report1Component },
  { path: 'reports/report2', component: Report2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
