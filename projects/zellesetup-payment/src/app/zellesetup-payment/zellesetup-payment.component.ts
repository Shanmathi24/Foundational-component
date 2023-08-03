import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { RoutingLinks } from 'src/app/screen-name';

@Component({
  selector: 'app-zellesetup-payment',
  templateUrl: './zellesetup-payment.component.html',
  styleUrls: ['./zellesetup-payment.component.scss']
})
export class ZellesetupPaymentComponent implements OnInit {
  buttonType = ButtonType;
  route = RoutingLinks;
  header: any = {};
  literal: any = {};
  public accountList: Array<any> = [];

  constructor(
    private _api: ApiService,
    private _data: DataService,
    private _router: Router
  ) { 
    this._api
    .getZelleSetuppaymentHeaderData()
    .subscribe((data: any) => {
      this.header = data;
    });

    this._api
    .getZelleSetuppaymentData()
    .subscribe((data: any) => {
      this.accountList = data.accountSelection.primaryAccountList;
    });

    this._api
    .getZelleSetuppaymentLiteralData()
    .subscribe((data: any) => {
      this.literal = data;
    });
  }

  ngOnInit(): void {
  }
 
  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }
}
