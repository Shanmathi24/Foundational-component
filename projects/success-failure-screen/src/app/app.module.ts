import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  DatePipe } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessFailureScreenComponent } from './success-failure-screen/success-failure-screen.component';
import { CommonComponent } from 'projects/common/src/lib/common.component';
import { ButtonComponent } from 'projects/common/src/lib/component/button/button.component';
import { CommonModule } from 'projects/common/src/lib/common.module';
//import {ButtonModule} from 'projects/common/src/lib/common.module';
//import { CommonComponent } from 'projects/common/src/public-api';
// import { FoundationalComponentsComponent } from 'projects/common/src/public-api';
//import { SuccessFailureScreenComponent } from './projects/success-failure-screen/success-failure-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    //CommonComponent,
    //ButtonComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    OverlayModule,
    NgbModule,
    // CommonModule
  ],

  // exports:
  // [
  //   ButtonComponent
  // ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
