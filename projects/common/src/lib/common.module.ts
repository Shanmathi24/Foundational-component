import { NgModule } from '@angular/core';
import { SuccessFailureScreenComponent } from 'projects/success-failure-screen/src/app/success-failure-screen/success-failure-screen.component';
//import { SuccessFailureScreenComponent } from 'projects/success-failure-screen/src/app/success-failure-screen/success-failure-screen.component';
import { CommonComponent } from './common.component';
import { ButtonComponent } from './component/button/button.component';
//import {CommonComponent} from './common';


@NgModule({
  declarations: [
     CommonComponent,
    //SuccessFailureScreenComponent,
    //ButtonComponent
  ],
  imports: [
    //SuccessFailureScreenComponent,
    
  ],
  exports: [
    CommonComponent,
    
    //ButtonComponent
    
  ]
})
export class CommonModule { }
