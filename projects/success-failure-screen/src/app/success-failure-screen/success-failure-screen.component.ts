import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { RoutingLinks } from 'src/app/screen-name';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-success-failure-screen',
  templateUrl: './success-failure-screen.component.html',
  styleUrls: ['./success-failure-screen.component.scss']
})
export class SuccessFailureScreenComponent implements OnInit {
  route = RoutingLinks;
  buttonType = ButtonType;
  model: any = {};
  radio = false;
  data: any = {};
  literal: any = {};
  header: any = {};
  checkbox1 = false;
  public billerList: Array<any> = [];
  public isButtonDisabled: boolean = true;
  constructor(public router: Router,
    private _api: ApiService) {

    this._api.getSuccessFailureData().subscribe((data: any) => { this.data = data; });
    this._api.getSuccessFailureLiteralData().subscribe((data: any) => { this.literal = data });
    this._api.getOnboardingData().subscribe((data: any) => {this.billerList = data.onboardingAddBills.bills});
    
    }

  ngOnInit(): void {
  }

  public onSubmit(routerLink): void {
    this.router.navigate([routerLink]);
  }

  toggle(event: Event): void {
    this.isButtonDisabled = !(event.target as HTMLInputElement).checked;
  }

  Cancel() {
    Swal.fire('Success!', 'Login successfull', 'success')
    Swal.fire({
      title: 'Are you sure you want to cancel?',
      text: 'You have not finished setting up your Payments 360 profile.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Yes,cancel',
      confirmButtonText: 'Finish set up'
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/setuppayment']);
      }
      else{
        this.router.navigate(['/dashboard']);
      }

    });
  }}
