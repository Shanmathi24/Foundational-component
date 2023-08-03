import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ZelleStartscreenComponent } from './zelle-startscreen.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { ApiService } from 'projects/common/src/lib/service/api.service';
import { HeaderComponent } from 'projects/common/src/lib/component/header/header.component';
import { ButtonComponent } from 'projects/common/src/lib/component/button/button.component';

describe('ZelleStartscreenComponent', () => {
  let component: ZelleStartscreenComponent;
  let fixture: ComponentFixture<ZelleStartscreenComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZelleStartscreenComponent, HeaderComponent, ButtonComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZelleStartscreenComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch Zelle start screen literal data and populate the literal object and slide images', () => {
    const literalData = {
      "ttitle": "Zelle®",
      "sitter": "Pay the Sitter",
      "date": "Extend Date Night.Skip the Trip to the ATM.",
      "paid": "Send a request to easily get paid back",
      "receive": "Receive it fast-directly into your bank account.",
      "safely": "Safely send money to your undergrad",
      "quickly": "Quickly from you to them in just a few taps",
      "move": "Move Money in the Movement",
      "simple": "Simply and securely - with lots of people you know",
      "started": "Get Started",
      slideImage1: 'slide1.jpg',
      slideImage2: 'slide2.jpg',
      slideImage3: 'slide3.jpg',
      slideImage4: 'slide4.jpg',
    };
    spyOn(apiService, 'getZelleStartScreenLiteralData').and.returnValue(of(literalData));

    fixture.detectChanges();

    expect(component.literal).toEqual(literalData);
    expect(component.slideImage).toEqual([
      environment.imagePath + literalData.slideImage1,
      environment.imagePath + literalData.slideImage2,
      environment.imagePath + literalData.slideImage3,
      environment.imagePath + literalData.slideImage4,
    ]);
  });

  it('should navigate to the specified route when onSubmit method is called', () => {
    const routerSpy = spyOn(component['_router'], 'navigate');
    const routerLink = 'zellepermissions';

    component.onSubmit(routerLink);

    expect(routerSpy).toHaveBeenCalledWith([routerLink]);
  });
});
