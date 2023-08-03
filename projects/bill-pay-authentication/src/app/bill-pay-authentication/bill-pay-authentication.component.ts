import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { RoutingLinks } from 'src/app/screen-name';
import Utils from 'src/assets/utilities/util';

@Component({
  selector: 'app-bill-pay-authentication',
  templateUrl: './bill-pay-authentication.component.html',
  styleUrls: ['./bill-pay-authentication.component.scss']
})
export class BillPayAuthenticationComponent implements OnInit {
  buttonType = ButtonType;
  header: any = {};
  literal: any = {};
  data: any = {};
  mobile: string;
  paymentMode: string;
  route = RoutingLinks;
  
  constructor(
    private _api: ApiService, 
    private _data: DataService,    
    private _router: Router) {

    this.paymentMode = this._data.user;
    //this._paymentDetails(this.paymentMode);

    
  }

  ngOnInit(): void {
    // this.mobile =this._data.mobile.toString().replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    this._api.getBillerHeaderData()
    .subscribe((data) => {
      this.header = data
    });

    this._api.getBillerLiteralData()
    .subscribe((data) => {
      this.literal = data
    });
    
    this._api.getUserData()
    .subscribe((data:any) => {
      this.data = data;
    });
  }

  private _paymentDetails(payMode): void {
    // switch (payMode) {
    //   case BillType.BILLER: {
    //     this._api.getBillerHeaderData().subscribe((data) => (this.header = data));
    //     this._api.getBillerLiteralData().subscribe((data) => (this.literal = data));
    //     break;
    //   }
    //   case BillType.SENDER: {
    //     this._api.getSenderHeaderData().subscribe((data) => (this.header = data));
    //     this._api.getSenderLiteralData().subscribe((data) => (this.literal = data));
    //     break;
    //   }
    //   case BillType.REQUESTOR: {
    //     this._api.getRequestorHeaderData().subscribe((data) => (this.header = data));
    //     this._api.getRequestorLiteralData().subscribe((data) => (this.literal = data));
    //   }
    // }
  }
  public getMobile(): string {
    return Utils.getMobile(this.data.mobile);
  }
  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }
}