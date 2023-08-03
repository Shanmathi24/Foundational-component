import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { RoutingLinks } from 'src/app/screen-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  userLogo: string = environment.imagePath;
  header: any = {}
  literal: any = {}
  showButtons = false;
  filterButton = false;
  public activeTab: number = 2;
  route = RoutingLinks;
  public billerAmount: number = 0;
  public recentActivityList: Array<any> = [];

  constructor(
    private _api: ApiService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {

    this._api.getRecentActivityHeaderData()
      .subscribe((data: any) => {
        this.header = data;
      });

      this._api.getDashboardLiteralData()
      .subscribe((data: any) => {
        this.literal = data;
      });

  }

  ngOnInit(): void {
    this.fetchRecentActivityData();
  }


  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }

  public fetchRecentActivityData(): void {
    this._api.getRecentActivityData()
      .subscribe((data: any) => {
        this.recentActivityList = data.payments;
        this.recentActivityList.forEach(
          item => item.userLogo = this.userLogo + item.userLogo);

        this.recentActivityList.forEach((item) => {
          this.billerAmount += item.amount;
          this.billerAmount = parseFloat(this.billerAmount.toFixed(2));
        });
      });
  }


  public selectTab(tab: number) {
    this.activeTab = tab;
  }

  toggleRadioButtons(): void {
    this.showButtons = !this.showButtons;
  }


  toggleFilterButton(): void {
    this.filterButton = !this.filterButton;
    console.log(this.filterButton);
  }


  sortByName() {
    this.recentActivityList.sort((a, b) => a.recipientName.localeCompare(b.recipientName));
  }

  sortByAmount() {
    this.recentActivityList.sort((a, b) => a.amount - b.amount);
  }

  sortByDate() {
    this.recentActivityList.sort((a, b) => a.paymentDate.getTime() - b.paymentDate.getTime());
  }


  public onItemClick(item: any){
    console.log('Clicked item', item);

    this._router.navigate(['/splitpayment'], {
      queryParams: {
        item: JSON.stringify(item)
      }
    });
  }
}

