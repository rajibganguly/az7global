import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'jobseekers', component: JobseekersComponent},
  { path: 'contact', component: ContactComponent}
];
