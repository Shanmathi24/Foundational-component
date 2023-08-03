import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from 'projects/start-screen/src/app/start-screen/start-screen.component';
import { SuccessFailureScreenComponent } from 'projects/success-failure-screen/src/app/success-failure-screen/success-failure-screen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'otp', redirectTo: '/otpscreen', pathMatch: 'full' },
  { path: 'confirmation', redirectTo: '/confirmation', pathMatch: 'full' },
  { path: 'makeapayment', redirectTo: '/makepayment', pathMatch: 'full' },
  { path: 'successfailure', component: SuccessFailureScreenComponent },
  { path: 'startscreen', component: StartScreenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
