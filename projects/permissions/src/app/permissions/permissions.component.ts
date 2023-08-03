import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RoutingLinks } from 'src/app/screen-name';

import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  header: any=[];
  literal: any=[];
  checkbox = false;
  buttonType=ButtonType;
  route = RoutingLinks;

  selectedButton: number = 1; 
  selectButton(button: number) { 
  this.selectedButton = button; 
}
  
  constructor(
    private _api:ApiService,
    private _data: DataService,
    private _router: Router
  ) { 
    this._api

 .getPermissionsHeaderData()

.subscribe((data:any)=>{

this.header=data;

});

this._api

 .getPermissionsLiteralData()

.subscribe((data:any)=>{

this.literal=data;

});

  }

  ngOnInit(): void {
  }

  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }
  
}
