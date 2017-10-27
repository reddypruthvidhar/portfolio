import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppAbout } from './about.component';
import { AppProjects } from './projects.component';
import { AppExperience } from './experience.component';
import { AppEducation } from './education.component';
import { AppContact } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'About', component: AppAbout },
   { path: 'Projects', component: AppProjects },
   { path: '', component: AppAbout },
   { path: 'Experience', component: AppExperience },
   { path: 'Education', component: AppEducation },
   { path: 'Contact', component: AppContact}
];

@NgModule({
  declarations: [
    AppComponent, AppAbout, AppProjects, AppExperience, AppEducation, AppContact
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),AlertModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
