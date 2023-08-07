import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SuccessFailureScreenComponent } from 'projects/success-failure-screen/src/app/success-failure-screen/success-failure-screen.component';
import { DateFormatPipe } from 'projects/common/src/lib/component/pipe/date-pipe/date-pipe.pipe';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'projects/common/src/lib/component/header/header.component';
import { ButtonComponent } from 'projects/common/src/lib/component/button/button.component';
import { CommonModule } from 'projects/common/src/lib/common.module';
import { CommonComponent } from 'projects/common/src/lib/common.component';
import { StartScreenComponent } from 'projects/start-screen/src/app/start-screen/start-screen.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SetupPaymentComponent } from 'projects/setup-payment/src/app/setup-payment/setup-payment.component';
import { SplitPaymentComponent } from 'projects/split-payment/src/app/split-payment/split-payment.component';
import { SplitPaymentConfirmationComponent } from 'projects/split-payment-confirmation/src/app/split-payment-confirmation/split-payment-confirmation.component';
import { SplitReviewComponent } from 'projects/split-review/src/app/split-review/split-review.component';
import { SuccessScreenComponent } from 'projects/success-screen/src/app/success-screen/success-screen.component';
import { TodoComponent } from 'projects/todos/src/app/todos/todo-summary/todo.component';
import { TodoDueSoonComponent } from 'projects/todos/src/app/todos/todo-due-soon/todo-due-soon.component';
import { TodoUpcomingComponent } from 'projects/todos/src/app/todos/todo-upcoming/todo-upcoming.component';
import { ZellePayAuthenticationComponent } from 'projects/zelle-pay-authentication/src/app/zelle-pay-authentication/zelle-pay-authentication.component';
import { ZelleStartscreenComponent } from 'projects/zelle-startscreen/src/app/zelle-startscreen/zelle-startscreen.component';
import { ZellepermissionsComponent } from 'projects/zellepermissions/src/app/zellepermissions/zellepermissions.component';
import { ZellesetupPaymentComponent } from 'projects/zellesetup-payment/src/app/zellesetup-payment/zellesetup-payment.component';
import { ConfirmationComponent } from 'projects/common/src/lib/component/confirmation/confirmation.component';
import { OtpScreenComponent } from 'projects/common/src/lib/component/otp-screen/otp-screen.component';
import { AddBillsComponent } from 'projects/add-bills/src/app/add-bills/add-bills.component';
import {SearchBarComponent} from 'projects/common/src/lib/component/search-bar/search-bar.component'
import { AmountToPayComponent } from 'projects/amount-to-pay/src/app/amount-to-pay/amount-to-pay.component';
import { AmountToSplitComponent } from 'projects/amount-to-split/src/app/amount-to-split/amount-to-split.component';
import { BillPayAuthenticationComponent } from 'projects/bill-pay-authentication/src/app/bill-pay-authentication/bill-pay-authentication.component';
import { BillerConfirmationComponent } from 'projects/biller-confirmation/src/app/biller-confirmation/biller-confirmation.component';
import { DashboardComponent } from 'projects/dashboard/src/app/dashboard/dashboard.component';
import { FindMoreBillsComponent } from 'projects/find-more-bills/src/app/find-more-bills/find-more-bills.component';
import { GeneralOnboardingSuccessComponent } from 'projects/general-onboarding-success/src/app/general-onboarding-success/general-onboarding-success.component';
import { MakeAPaymentComponent } from 'projects/make-a-payment/src/app/make-a-payment/make-a-payment.component';
import { PermissionsComponent } from 'projects/permissions/src/app/permissions/permissions.component';
import { RecentActivityComponent } from 'projects/recent-activity/src/app/recent-activity/recent-activity.component';
import { SelectAddBillsComponent } from 'projects/select-add-bills/src/app/select-add-bills/select-add-bills.component';
import { SelectPrimaryAccountComponent } from 'projects/select-primary-account/src/app/select-primary-account/select-primary-account.component';
import { SelectedItemsService } from 'projects/common/src/lib/service/selected-items.service';
import { SelectedBillerService } from 'projects/common/src/lib/service/selected-biller.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DateFormatPipe,
    SuccessFailureScreenComponent,
    ButtonComponent,
    StartScreenComponent,
    SetupPaymentComponent,
    SplitPaymentComponent,
    SplitPaymentConfirmationComponent,
    SplitReviewComponent,
    SuccessScreenComponent,
    TodoComponent,
    TodoDueSoonComponent,
    TodoUpcomingComponent,
    ZellePayAuthenticationComponent,
    ZelleStartscreenComponent,
    ZellepermissionsComponent,
    ZellesetupPaymentComponent,
    ConfirmationComponent,
    OtpScreenComponent,
    SearchBarComponent,
    AddBillsComponent,
    AmountToPayComponent,
    AmountToSplitComponent,
    BillPayAuthenticationComponent,
    BillerConfirmationComponent,
    DashboardComponent,
    FindMoreBillsComponent,
    GeneralOnboardingSuccessComponent,
    MakeAPaymentComponent,
    PermissionsComponent,
    RecentActivityComponent,
    SelectAddBillsComponent,
    SelectPrimaryAccountComponent
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    OverlayModule,
    NgbModule,
    
  ],
  exports:[
    //ButtonComponent
    SuccessFailureScreenComponent
  ],
  providers: [ SelectedItemsService,
    SelectedBillerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
