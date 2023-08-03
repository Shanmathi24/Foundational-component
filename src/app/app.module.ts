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


@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    HomeComponent,
    DateFormatPipe,
    SuccessFailureScreenComponent,
    ButtonComponent,
    StartScreenComponent
   // CommonComponent
    
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
