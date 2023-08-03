  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
  import { RoutingLinks } from 'src/app/screen-name';

  @Component({
    selector: 'app-select-primary-account',
    templateUrl: './select-primary-account.component.html',
    styleUrls: ['./select-primary-account.component.scss']
  })
  export class SelectPrimaryAccountComponent implements OnInit {
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
    }

    ngOnInit(): void {
      this._api
      .getZelleOnboardingHeaderData()
      .subscribe((data: any) => {
        this.header = data;
      });

      this._api
      .getZelleOnboardingData()
      .subscribe((data: any) => {
        this.accountList = data.accountSelection.primaryAccountList;
      });

      this._api
      .getZelleOnboardingLiteralData()
      .subscribe((data: any) => {
        this.literal = data;
      });
    }

    public onSubmit(routerLink): void {
      this._router.navigate([routerLink]);
    }

  }
