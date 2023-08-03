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


//===============================
//for split-payment-confirmation & split-review & amount-to-split

    getAmountToSplitLiteralData() { return this.http.get("http://localhost:1000/amountToPayLiteral") }

    getAmountToSplitData() { return this.http.get("http://localhost:3000/amountToSplitData") }


//================================
//for start-screen

getStartScreenLiteralData() { return this.http.get("http://localhost:1000/startscreenliterals") }

//===============================
//for setup-payment & bill-pay-authentication
getUserLiteralData() { return this.http.get("http://localhost:1000/userliterals") }

getUserHeaderData() { return this.http.get("http://localhost:2000/userheader") }

getUserData() { return this.http.get("http://localhost:3000/user") }


//================================
// for split-payment & split-review
getSplitData(){return this.http.get("http://localhost:3000/splitData")}
getAmountToSplitHeaderData() { return this.http.get("http://localhost:2000/amountToSplitHeader") }


//==============================
//for success-screen & general-onboarding-success
getSuccessScreenHeaderData() { return this.http.get("http://localhost:2000/successScreenHeader") }
getSuccessScreenLiteralData() { return this.http.get("http://localhost:1000/successScreenLiterals") }
getSuccessScreenData() { return this.http.get("http://localhost:3000/successScreenData") }




//============================
//todos
getTodoLiteralData() { return this.http.get("http://localhost:1000/todoliterals") }
getTodoData() { return this.http.get("http://localhost:3000/todo") }
getTodoHeaderData() { return this.http.get("http://localhost:2000/todoheader") }


//=============================
//zelle-pay-authentication & bill-pay-authentication & make-a-payment
getBillerHeaderData() { return this.http.get("http://localhost:2000/billerheader") }
getBillerLiteralData() { return this.http.get("http://localhost:1000/billerliterals") }


//===============================
//zelle-startscreen
getZelleStartScreenLiteralData() { return this.http.get("http://localhost:1000/zellestartscreenliterals") }


//===============================
//zelle-permissions
getzellepermissionsheaderData() { return this.http.get("http://localhost:2000/zellepermissionsheader") }
getzellepermissionsliteralData() { return this.http.get("http://localhost:1000/zellepermissionsliterals") }



//================================
//zellesetup-payment
getZelleSetuppaymentHeaderData() { return this.http.get("http://localhost:2000/zellesetuppaymentheader") }
getZelleSetuppaymentData() { return this.http.get("http://localhost:3000/zellesetuppayment") }
getZelleSetuppaymentLiteralData() { return this.http.get("http://localhost:1000/zellesetuppaymentliterals") }


//===============================
//confirmation & make-a-payment
getRequestorHeaderData() { return this.http.get("http://localhost:2000/requestorheader") }
getSenderLiteralData() { return this.http.get("http://localhost:1000/senderliterals") }
getRequestorLiteralData() { return this.http.get("http://localhost:1000/requestorliterals") }


//================================
//add-bills
getOnboardingHeaderData() { return this.http.get("http://localhost:2000/onboardingheader") }
getOnboardingLiteralData() { return this.http.get("http://localhost:1000/onboardingliterals") }


//=================================
//amount-to-pay & make-a-payment
getBillerData() { return this.http.get("http://localhost:3000/biller") }
getSenderData() { return this.http.get("http://localhost:3000/sender") }
getSenderHeaderData() { return this.http.get("http://localhost:2000/senderheader") }
getRequestorData() { return this.http.get("http://localhost:3000/Requestor") }


//====================================
//biller-confirmation
getBillerConfirmationHeaderData() { return this.http.get("http://localhost:2000/billerConfirmationHeader") }
getBillerConfirmationLiteralData() { return this.http.get("http://localhost:1000/billerConfirmationLiteral") }


//===================================
//dashboard & recent-activity
getDashboardHeaderData() { return this.http.get("http://localhost:2000/dashboardheader") }
getDashboardLiteralData() { return this.http.get("http://localhost:1000/dashboardLiterals") }
getDashboardData() { return this.http.get("http://localhost:3000/dashboard") }
getRecentActivityData() { return this.http.get("http://localhost:3000/recentActivityData") }


//====================================
//find-more-bills
getFindMoreBillsHeaderData() { return this.http.get("http://localhost:2000/findmorebillsheader") }
getFindMoreBillsLiteralData() { return this.http.get("http://localhost:1000/findmorebillsliterals") }


//====================================
//permissions
getPermissionsHeaderData() { return this.http.get("http://localhost:2000/permissionsheader") }
getPermissionsLiteralData() { return this.http.get("http://localhost:1000/permissionsliterals") }


//====================================
//recent-activity
getRecentActivityHeaderData() { return this.http.get("http://localhost:2000/recentActivityHeader") }


//======================================
//select-add-bills
getSelectAddBillsData() { return this.http.get("http://localhost:3000/selectaddbills") }
getSelectAddBillsLiteralData() { return this.http.get("http://localhost:1000/selectAddbillsLiteral") }
getSelectAddBillsHeaderData() { return this.http.get("http://localhost:2000/selectaddbillsheader") }

//=====================================
//select-primary-account
getZelleOnboardingHeaderData() { return this.http.get("http://localhost:2000/zelleonboardingheader") }
getZelleOnboardingLiteralData() { return this.http.get("http://localhost:1000/zelleonboardingliterals") }
getZelleOnboardingData() { return this.http.get("http://localhost:3000/zelleonboarding") }



























































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





