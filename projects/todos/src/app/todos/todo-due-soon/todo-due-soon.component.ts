import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { DataService } from 'projects/common/src/lib/service/data.service';
import { SelectedItemsService } from 'projects/common/src/lib/service/selected-items.service';
import { RoutingLinks } from 'src/app/screen-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo-due-soon',
  templateUrl: './todo-due-soon.component.html',
  styleUrls: ['./todo-due-soon.component.scss']
})
export class TodoDueSoonComponent implements OnInit {

  // apply input() if you are taking billsList from any parent
  // @Input() todoBillsList: any[];
  @Input() showButtons: boolean = false;
  selectedItem: any;
  userLogo: String = environment.imagePath;
  literal: any = {};
  route = RoutingLinks;
  paymentMode: string;
  public todoBillsList: Array<any> = [];
  // selectedItems: Array<any> = []

  constructor(
    private _api: ApiService,
    private _data: DataService,
    private _router: Router,
    private selectedItemsService: SelectedItemsService
  ) {

    // this.fetchTodoData();

    this._api
    .getTodoLiteralData()
    .subscribe((data: any) => {
      this.literal = data;
    });

  }

  ngOnInit(): void {
    this.fetchTodoData();
  }

  public onSubmit(routerLink): void {
    this._router.navigate([routerLink]);
    this.showButtons = true;
    
  }

  public onSubmit2(route: string, paymentMode: string): void{
    this._router.navigate([route, paymentMode]);
  }

  private fetchTodoData(): void {
    this._api.getTodoData().subscribe((data: any) => {
      this.todoBillsList = data.todoSummmary.billPay;
      this.todoBillsList.forEach(item => item.userLogo = this.userLogo + item.userLogo);
      console.log(this.todoBillsList);

    });
  }

  onSelectionChange(item): void {
     item.isSelected = !item.isSelected;
    // const selectedItems = this.todoBillsList.filter((item) => item.isSelected);
    this.selectedItemsService.updateSelectedItemsDueSoon(item);
    // this.selectedItemsService.updateSelectedItemsDueSoon(selectedItems);
    // console.log(this.selectedItems);
  }

}
