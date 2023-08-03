import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';


import { RoutingLinks } from 'src/app/screen-name';


import { environment } from 'src/environments/environment';




@Component({

  selector: 'app-success-screen',

  templateUrl: './success-screen.component.html',

  styleUrls: ['./success-screen.component.scss']

})

export class SuccessScreenComponent implements OnInit {




  buttonType = ButtonType;




  userLogo: string = environment.imagePath;

  header: any = {};

  literal: any = {};

  data:any={};

  route = RoutingLinks;

 





  constructor(

    private _api: ApiService,

    private _router: Router

  ) {




    this._api

      .getSuccessScreenData()

      .subscribe((data: any) => {

        this.data = data;

         data.userLogo = this.userLogo + data.userLogo;

        console.log(this.data);

      });




    this._api

      .getSuccessScreenHeaderData()

      .subscribe((data: any) => {

        this.header = data;

      });




    this._api

      .getSuccessScreenLiteralData()

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