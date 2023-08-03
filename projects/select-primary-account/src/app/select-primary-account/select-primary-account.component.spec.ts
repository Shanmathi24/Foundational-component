import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SelectPrimaryAccountComponent } from './select-primary-account.component';
import { ButtonComponent } from 'projects/common/src/lib/component/button/button.component';
import { HeaderComponent } from 'projects/common/src/lib/component/header/header.component';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { of } from 'rxjs';
import { DataService } from 'projects/common/src/lib/service/data.service';

describe('SelectPrimaryAccountComponent', () => {
  //creating aliases
  let component: SelectPrimaryAccountComponent;
  let fixture: ComponentFixture<SelectPrimaryAccountComponent>;
  let apiService: ApiService;
  let dataService: DataService;
  // let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectPrimaryAccountComponent, HeaderComponent, ButtonComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ApiService, DataService],
    }).compileComponents();
  });

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    spyOn(apiService, 'getZelleOnboardingHeaderData').and.returnValue(of({ screen1: 'Select Primary Account' }));
    spyOn(apiService, 'getZelleOnboardingLiteralData').and.returnValue(of({
      accountSelectionText: 'You need an account to send and receive money with.',
      enrollmentBtn: 'Complete Zelle Enrollment',
    }));
    spyOn(apiService, 'getZelleOnboardingData').and.returnValue(of({
      accountSelection: {
        primaryAccountList: [
          { accountType: 'Phone', accountNo: '917-222-4367' },
          { accountType: 'Email', accountNo: 'alex.davis@gmail.com' },
          { accountType: 'Create Zelle® Tag' },
        ],
      },
    }));

    fixture = TestBed.createComponent(SelectPrimaryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch header data from API and populate the header object', () => {
    expect(apiService.getZelleOnboardingHeaderData).toHaveBeenCalled();
    expect(component.header).toEqual({ screen1: 'Select Primary Account' });
  });

  it('should fetch literal data from API and populate the literal object', async () => {
    expect(apiService.getZelleOnboardingLiteralData).toHaveBeenCalled();

    const literalData = {
      accountSelectionText: 'You need an account to send and receive money with.',
      enrollmentBtn: 'Complete Zelle Enrollment',
    };

    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.literal).toEqual(literalData);
  });

  it('should fetch account list from API and populate the accountList array', async () => {
    expect(apiService.getZelleOnboardingData).toHaveBeenCalled();

    const accountListData = {
      accountSelection: {
        primaryAccountList: [
          { accountType: 'Phone', accountNo: '917-222-4367' },
          { accountType: 'Email', accountNo: 'alex.davis@gmail.com' },
          { accountType: 'Create Zelle® Tag' },
        ],
      },
    };

    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.accountList).toEqual(accountListData.accountSelection.primaryAccountList);
  });

  it('should navigate to the specified route when onSubmit method is called', () => {
    const routerSpy = spyOn(component['_router'], 'navigate');
    const routerLink = 'successscreen';

    component.onSubmit(routerLink);

    expect(routerSpy).toHaveBeenCalledWith([routerLink]);
  });

  // Add more test cases to cover different scenarios and edge cases
});
