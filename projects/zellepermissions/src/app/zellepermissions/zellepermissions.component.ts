import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { RoutingLinks } from 'src/app/screen-name';

@Component({
  selector: 'app-zellepermissions',
  templateUrl: './zellepermissions.component.html',
  styleUrls: ['./zellepermissions.component.scss']
})
export class ZellepermissionsComponent implements OnInit {
  header: any = [];
  literal: any = [];
  checkbox = false;
  buttonType = ButtonType;

  continueButtonDisabled: boolean = true;

  route = RoutingLinks;

  enableContinueButton(event: Event): void {

    this.continueButtonDisabled = !(event.target as HTMLInputElement).checked;
  }


  constructor(
    private _api: ApiService,
    private _data: DataService,
    private _router: Router,
  ) {
    this._api

      .getzellepermissionsheaderData()

      .subscribe((data: any) => {

        this.header = data;

      });

    this._api

      .getzellepermissionsliteralData()

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

