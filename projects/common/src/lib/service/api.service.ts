import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'

})
export class ApiService {

    constructor(private http: HttpClient) { }

//=========================================
//for success-failure

    getSuccessFailureData() {return this.http.get("http://localhost:3000/successfailure")}

    getSuccessFailureLiteralData() {return this.http.get("http://localhost:1000/successfailure")}

    getOnboardingData() {return this.http.get("http://localhost:3000/onboarding")}


//============================
//for split-payment-confirmation
    getAmountToSplitLiteralData() { return this.http.get("http://localhost:1000/amountToPayLiteral") }

    getAmountToSplitData() { return this.http.get("http://localhost:3000/amountToSplitData") }


//=============
//for start-screen
getStartScreenLiteralData() { return this.http.get("http://localhost:1000/startscreenliterals") }


    // getBillerData() {
    //     return this.http.get("http://localhost:3000/biller")
    // }



    // getAddBillData() {
    //     return this.http.get("http://localhost:3000/addbillsdata")
    // }

    // getSenderData() 
    // {
    //      return this.http.get("http://localhost:3000/sender") 
    //     }


    // getRequestorData() 
    // {
    //      return this.http.get("http://localhost:3000/Requestor")
    //      }



    // getBillerHeaderData()
    // {
    //      return this.http.get("http://localhost:2000/billerheader") 
    //     }

    // getSenderHeaderData() { return this.http.get("http://localhost:2000/senderheader") }

    // getRequestorHeaderData() { return this.http.get("http://localhost:2000/requestorheader") }

    // getAddBillsHeaderData() { return this.http.get("http://localhost:2000/addbill") }

    // getBillerLiteralData() { return this.http.get("http://localhost:1000/billerliterals") }

    // getSenderLiteralData() { return this.http.get("http://localhost:1000/senderliterals") }

    // getRequestorLiteralData() { return this.http.get("http://localhost:1000/requestorliterals") }

    // getAddBillsLiteralData() { return this.http.get("http://localhost:1000/addbillsLiteral") }

    // getFindMoreBillsLiteralData() { return this.http.get("http://localhost:1000/findmorebillsliterals") }

    // getFindMoreBillsHeaderData() { return this.http.get("http://localhost:2000/findmorebillsheader") }


    // getStartScreenLiteralData(){return this.http.get("http://localhost:1000/startscreenliterals")}
    // getZelleStartScreenLiteralData(){return this.http.get("http://localhost:1000/zellestartscreenliterals")}
    // getZelleSuccessLiteralData(){return this.http.get("http://localhost:1000/zellesuccess")}
    // getZelleSuccessData() {return this.http.get("http://localhost:3000/Pendingtransactions")} 

}





