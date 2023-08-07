import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillsComponent } from 'projects/add-bills/src/app/add-bills/add-bills.component';
import { AmountToPayComponent } from 'projects/amount-to-pay/src/app/amount-to-pay/amount-to-pay.component';
import { AmountToSplitComponent } from 'projects/amount-to-split/src/app/amount-to-split/amount-to-split.component';
import { BillPayAuthenticationComponent } from 'projects/bill-pay-authentication/src/app/bill-pay-authentication/bill-pay-authentication.component';
import { BillerConfirmationComponent } from 'projects/biller-confirmation/src/app/biller-confirmation/biller-confirmation.component';
import { ConfirmationComponent } from 'projects/common/src/lib/component/confirmation/confirmation.component';
import { OtpScreenComponent } from 'projects/common/src/lib/component/otp-screen/otp-screen.component';
import { DashboardComponent } from 'projects/dashboard/src/app/dashboard/dashboard.component';
import { FindMoreBillsComponent } from 'projects/find-more-bills/src/app/find-more-bills/find-more-bills.component';
import { GeneralOnboardingSuccessComponent } from 'projects/general-onboarding-success/src/app/general-onboarding-success/general-onboarding-success.component';
import { MakeAPaymentComponent } from 'projects/make-a-payment/src/app/make-a-payment/make-a-payment.component';
import { PermissionsComponent } from 'projects/permissions/src/app/permissions/permissions.component';
import { RecentActivityComponent } from 'projects/recent-activity/src/app/recent-activity/recent-activity.component';
import { SelectAddBillsComponent } from 'projects/select-add-bills/src/app/select-add-bills/select-add-bills.component';
import { SelectPrimaryAccountComponent } from 'projects/select-primary-account/src/app/select-primary-account/select-primary-account.component';
import { SetupPaymentComponent } from 'projects/setup-payment/src/app/setup-payment/setup-payment.component';
import { SplitPaymentConfirmationComponent } from 'projects/split-payment-confirmation/src/app/split-payment-confirmation/split-payment-confirmation.component';
import { SplitPaymentComponent } from 'projects/split-payment/src/app/split-payment/split-payment.component';
import { SplitReviewComponent } from 'projects/split-review/src/app/split-review/split-review.component';
import { StartScreenComponent } from 'projects/start-screen/src/app/start-screen/start-screen.component';
import { SuccessFailureScreenComponent } from 'projects/success-failure-screen/src/app/success-failure-screen/success-failure-screen.component';
import { SuccessScreenComponent } from 'projects/success-screen/src/app/success-screen/success-screen.component';
import { TodoComponent } from 'projects/todos/src/app/todos/todo-summary/todo.component';
import { ZellePayAuthenticationComponent } from 'projects/zelle-pay-authentication/src/app/zelle-pay-authentication/zelle-pay-authentication.component';
import { ZelleStartscreenComponent } from 'projects/zelle-startscreen/src/app/zelle-startscreen/zelle-startscreen.component';
import { ZellepermissionsComponent } from 'projects/zellepermissions/src/app/zellepermissions/zellepermissions.component';
import { ZellesetupPaymentComponent } from 'projects/zellesetup-payment/src/app/zellesetup-payment/zellesetup-payment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'otp', redirectTo: '/otpscreen', pathMatch: 'full' },
  // { path: 'confirmation', redirectTo: '/confirmation', pathMatch: 'full' },
  // { path: 'makeapayment', redirectTo: '/makepayment', pathMatch: 'full' },
  // { path: 'successfailure', component: SuccessFailureScreenComponent },
  // { path: 'startscreen', component: StartScreenComponent },
  // {path: 'addbills', component: AddBillsComponent}
  // {path: ''}

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'amountToPay', component: AmountToPayComponent },
  { path: 'amountToPay/:paymentMode', component: AmountToPayComponent },
  { path: 'makeapayment', component: MakeAPaymentComponent },
  { path: 'otpscreen', redirectTo: '/otpscreen', pathMatch: 'full' },
  { path: 'otpscreen', component: OtpScreenComponent },
  { path: 'makeapayment', redirectTo: '/makepayment', pathMatch: 'full' },
  { path: 'confirmation', redirectTo: '/confirmation', pathMatch: 'full' },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'selectprimaryaccount', component: SelectPrimaryAccountComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'startscreen', component: StartScreenComponent },
  { path: 'permissions', component: PermissionsComponent },
  // {path:'permissions', redirectTo:'/permissions', pathMatch:'full'},
  { path: 'setuppayment', component: SetupPaymentComponent },
  // {path:'setuppayment', redirectTo:'/setuppayment', pathMatch:'full'},
  { path: 'zellepermissions', component: ZellepermissionsComponent },
  { path: 'zellestartscreen', component: ZelleStartscreenComponent },
  { path: 'zellesetuppayment', component: ZellesetupPaymentComponent },
  { path: 'findmorebills', component: FindMoreBillsComponent },
  { path: 'selectaddbills', component: SelectAddBillsComponent },
  { path: 'addbills', component: AddBillsComponent },
  { path: 'successfailure', component: SuccessFailureScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'successscreen', component: SuccessScreenComponent },
  { path: 'generalonboardingsuccessscreen', component: GeneralOnboardingSuccessComponent },
  { path: 'billerconfirmation', component:BillerConfirmationComponent},
  { path: 'zellepayauthentication', component:ZellePayAuthenticationComponent},
  { path: 'billpayauthentication', component:BillPayAuthenticationComponent},
  {path:'recentactivity',component:RecentActivityComponent},
  {path:'amounttosplit',component:AmountToSplitComponent},
  {path:'splitpaymentconfirmation',component:SplitPaymentConfirmationComponent},
  {path:'splitpayment',component:SplitPaymentComponent},
  {path:'splitreview',component:SplitReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
