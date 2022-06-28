import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  { path: '404', component: NotFoundComponent },
  {
    path: '**',
    redirectTo: '/404'
  }
];
