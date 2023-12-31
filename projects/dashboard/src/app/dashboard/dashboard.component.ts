import { Component, Input, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { SelectedBillerService } from 'projects/common/src/lib/service/selected-biller.service';
import { find } from 'rxjs';
import { RoutingLinks } from 'src/app/screen-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buttonType = ButtonType;
  route = RoutingLinks;
  paymentMode: string;
  header: any = {};
  literal: any = {};
  userLogo: string = environment.imagePath;
  searchLogo: string = environment.imagePath;
  recentActivityLogo:string=environment.imagePath;
  public activeTab: number = 2;
  public favouritesList: Array<any> = [];
  public selectedBillerDetails: Array<any> = [];
  public todoListLength: number;
  public billerAmount: number = 0;

  public recentActivityList:Array<any>=[];
  public recentActivityLength:number;
  //public billerList: Array<any> = [];
  //billAmt: number;
  //@Input() todoListLength: number;

  constructor(
    private _api: ApiService,
    private _data: DataService,
    private _router: Router,
    public selectedBillerService: SelectedBillerService
  ) {

  }

  ngOnInit(): void {
    this._api
    .getTodoData()
    .pipe(find(e => e !== undefined)).subscribe((data: any) => {
      this.todoListLength = data.todoSummmary.billPay.length;
    });
    //console.log(this.todoListLength);

    this.selectedBillerDetails = this.selectedBillerService.selectedBillerDetails;
    console.log(this.selectedBillerDetails);

    this.selectedBillerDetails.forEach((item) => {
      this.billerAmount += item.billerAmount;
      this.billerAmount = parseFloat(this.billerAmount.toFixed(2));
    });
    console.log(this.billerAmount);

    this._api
    .getDashboardHeaderData()
    .subscribe((data: any) => {
      this.header = data;
    });

    this._api.getDashboardLiteralData()
    .subscribe((data: any) => {
      this.literal = data;
    });

  this.fetchFavouritesList();

  this.fetchRecentActivityList();
  }


  private fetchFavouritesList(): void {
    this._api
      .getDashboardData()
      .subscribe((data: any) => {
        this.favouritesList = data.favourites;
        this.favouritesList.forEach(item => item.userLogo = this.userLogo + item.userLogo);
        this.searchLogo = this.searchLogo + data.searchImg;
        //this.billAmt = data.billAmount;
      });
  }


  private fetchRecentActivityList():void{
    this._api.getRecentActivityData()
    .subscribe((data:any)=>{
      this.recentActivityList=data.payments;
      this.recentActivityList.forEach(item=>item.recentActivityLogo=this.recentActivityLogo+item.userLogo);
      
      this.recentActivityLength=this.recentActivityList.length;
      console.log("RecentActivity Length:"+this.recentActivityLength)
    });
  }

  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }

  public onClick(route: string, paymentMode: string): void{
    this._router.navigate([route,paymentMode]);
  }

  public selectTab(tab: number) {
    this.activeTab = tab;
  }

}