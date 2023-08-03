import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'projects/common/src/lib/component/constant/constant';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { SelectedBillerService } from 'projects/common/src/lib/service/selected-biller.service';
import { RoutingLinks } from 'src/app/screen-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-biller-confirmation',
  templateUrl: './biller-confirmation.component.html',
  styleUrls: ['./biller-confirmation.component.scss']
})
export class BillerConfirmationComponent implements OnInit {

  buttonType = ButtonType;

  userLogo: string = environment.imagePath;
  header: any = {};
  literal: any = {};
  route = RoutingLinks;
  public selectedBillerDetails: Array<any> = [];
  public newlyAddedBillerDetails: Array<any> = [];


  constructor(
    private _api: ApiService,
    private _router: Router,
    private selectedBillerService: SelectedBillerService
  ) {

    this._api
      .getBillerConfirmationHeaderData()
      .subscribe((data: any) => {
        this.header = data;
      });

    this._api
      .getBillerConfirmationLiteralData()
      .subscribe((data: any) => {
        this.literal = data;
      });
  }

  ngOnInit(): void {
    this.selectedBillerDetails = this.selectedBillerService.getMergedSelectedBillers();
    this.newlyAddedBillerDetails = this.getNewlyAddedBillers();
    console.log(this.newlyAddedBillerDetails);
  }


  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
  }

  private getNewlyAddedBillers(): Array<any> {
    const currentTime = new Date().getTime();
    const newlyAddedBillers = this.selectedBillerDetails.filter(
      (biller) => biller.timestamp > currentTime - 5000 // Filter billers added in the last 5 seconds (adjust the time as per your requirement)
    );
    return newlyAddedBillers;
  }

}


