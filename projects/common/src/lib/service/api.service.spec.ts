import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';


describe('ApiService', () => {

    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]

        });

        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);

    });


    afterEach(() => {
        httpMock.verify();
    });

    //data
    it('should retrieve success/failure data from http://localhost:3000/successfailure', () => {
        const successfailuredata = {
            mobile: '718-555-1234'
        }
        service.getSuccessFailureData().subscribe(data => {
            expect(data).toEqual(successfailuredata);

        });

        const req = httpMock.expectOne('http://localhost:3000/successfailure');
        expect(req.request.method).toBe('GET');
        req.flush(successfailuredata);

    });

    //literal
    it('should retrieve success/failure literal data from http://localhost:1000/successfailure', () => {

        const successfailureliteral = {
            complete: 'Your Payments 360 set up is complete!',
            contact: 'Contact method',
            text1: 'Next, we found 7 bills you can add',
            para: 'Instantly add bills found in your transaction history',
            confirmationbutton: 'Review and Add Bills',
            skipbutton: 'Skip Bills and Close'
        };
        service.getSuccessFailureLiteralData().subscribe(data => {
            expect(data).toEqual(successfailureliteral);

        });
        const req = httpMock.expectOne('http://localhost:1000/successfailure');
        expect(req.request.method).toBe('GET');
        req.flush(successfailureliteral);

    });

    //onboarding data
    it('should retrieve onboarding data from http://localhost:3000/onboarding', () => {

        const billerLists = {
            onboardingAddBills: {
                bills: [
                    {
                        recipient: 'AT&T',
                        userLogo: 'billerlogo.png',
                        billerAmount: 10,
                        isSelected: false
                    },
                    {
                        recipient: 'Geico',
                        userLogo: 'geico.jpg',
                        billerAmount: 20,
                        isSelected: false
                    },
                    {
                        recipient: 'SoFi',
                        userLogo: 'sofi.png',
                        billerAmount: 30,
                        isSelected: false
                    },
                    {
                        recipient: 'Verizon',
                        userLogo: 'verizon.png',
                        billerAmount: 40.1,
                        isSelected: false
                    },
                    {
                        recipient: 'Navient',
                        userLogo: 'navient.png',
                        billerAmount: 50.23,
                        isSelected: false
                    },
                    {
                        recipient: 'RCN',
                        userLogo: 'rcn.png',
                        billerAmount: 25,
                        isSelected: false
                    },
                    {
                        recipient: 'Waste Management',
                        userLogo: 'Waste-Management-Logo.png',
                        billerAmount: 14,
                        isSelected: false
                    }],

                moreBills: [
                    {
                        recipient: 'Hello Fresh',
                        userLogo: 'hellofresh.png',
                        billerAmount: 60,
                        isSelected: false
                    },
                    {
                        recipient: 'State Farm',
                        userLogo: 'statefarm.png',
                        billerAmount: 70,
                        isSelected: false
                    }
                ]

            }
        }
        service.getOnboardingData().subscribe(data => {
            expect(data).toEqual(billerLists);

        });

        const req = httpMock.expectOne('http://localhost:3000/onboarding');
        expect(req.request.method).toBe('GET');
        req.flush(billerLists);

    });

});