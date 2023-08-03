import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { RoutingLinks } from 'src/app/screen-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-split-payment-confirmation',
  templateUrl: './split-payment-confirmation.component.html',
  styleUrls: ['./split-payment-confirmation.component.scss']
})
export class SplitPaymentConfirmationComponent implements OnInit {

  buttonType = ButtonType;
  route = RoutingLinks;
  userLogo: string = environment.imagePath;
  literal: any = {}
  public transactionAmount: number;
  public splitAmount: number;
  public totalRecipient: number;
  public recipientNumber:number;
  public phoneNumber: number;
  public amountToSplitList: Array<any> = []

  constructor(
    private _api: ApiService,
    private _router: Router,
  ) {
    this._api.getAmountToSplitLiteralData ()
      .subscribe((data: any) => {
        this.literal = data;
      });

  }

  ngOnInit(): void {
    this.fetchSplitPaymentConfirmationData();
  }

  public fetchSplitPaymentConfirmationData(): void {
    this._api.getAmountToSplitData()
      .subscribe((data: any) => {
        this.amountToSplitList = data.recipients;
        this.transactionAmount = data.transactionAmount;
        this.totalRecipient = data.recipients.length;
        this.splitAmount = this.transactionAmount / (this.totalRecipient);
        this.recipientNumber=this.totalRecipient/2;
        this.amountToSplitList.forEach(item => {
          if (item.recipientName === 'You') 
          { this.phoneNumber = item.phoneNumber }
        })
        this.amountToSplitList.forEach(item => item.userLogo = this.userLogo + item.userLogo);
      });
  }

  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }

}
