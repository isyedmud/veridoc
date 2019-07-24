(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-expertsreview-expertsreview-module"],{

/***/ "./src/app/pages/user/expertsreview/expertsreview.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/expertsreview/expertsreview.module.ts ***!
  \******************************************************************/
/*! exports provided: ExpertsreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertsreviewPageModule", function() { return ExpertsreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expertsreview.page */ "./src/app/pages/user/expertsreview/expertsreview.page.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");








var routes = [
    {
        path: '',
        component: _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__["ExpertsreviewPage"]
    }
];
var ExpertsreviewPageModule = /** @class */ (function () {
    function ExpertsreviewPageModule() {
    }
    ExpertsreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__["ExpertsreviewPage"],
            ]
        })
    ], ExpertsreviewPageModule);
    return ExpertsreviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/expertsreview/expertsreview.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/expertsreview/expertsreview.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <img src=\"assets/imgs/logo-veridoc.svg\" />\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isLoggedIn\" fill=\"solid\" color=\"success\" (click)=\"onClickGetStarted()\">Get Started</ion-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"verify-progress-indicator-container\">\n    <div class=\"verify-progress-header\">\n      <p>\n        Verify your documents in Just 3 steps\n      </p>\n    </div>\n  \n    <div class=\"verify-progress-indicator\">\n      <div [class]=\"initVerifyStep>=1?'verify-progress-active-step': 'verify-progress-inactive-step'\">1</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=2?'verify-progress-active-step': 'verify-progress-inactive-step'\">2</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=3?'verify-progress-active-step': 'verify-progress-inactive-step'\">3</div>\n    </div>\n  </div>\n\n  <div id=\"verify-progress-main-content\">\n    <div [ngSwitch]=\"initVerifyStep\">\n      <div *ngSwitchCase=\"1\">\n        <ion-item>\n          <ion-label>Category</ion-label>\n          <ion-select [(ngModel)]=\"requestCategory\">\n            <ion-select-option *ngFor=\"let category of arrCategories; let i = index;\" [value]=\"i\">\n              {{category}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <app-multi-file-upload [draftFiles]=\"draftFiles\"></app-multi-file-upload>\n        <ion-item>\n          <ion-label position=\"stacked\">Comments</ion-label>\n          <ion-textarea [(ngModel)]=\"strComment\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Queries</ion-label>\n          <ion-textarea [(ngModel)]=\"strQuery\"></ion-textarea>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"isRequestBehalf\"></ion-checkbox>\n          <ion-label>Request on behalf of</ion-label>\n        </ion-item>\n\n        <!-- Behalf request fields -->\n        <ion-item-group *ngIf=\"isRequestBehalf\">\n          <ion-item>\n            <ion-input type=\"text\" [(ngModel)]=\"behalfofname\" placeholder=\"Name\" required=true></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"text\" [(ngModel)]=\"behalfofrelation\" placeholder=\"Relation\" required=true></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Birthday</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"behalfofbod\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\n          </ion-item>\n\n          <div class=\"experts-review-gender\">\n            <div (click)=\"onChangeGender('m')\">\n              <img [src]=\"behalfofgender=='m'?'assets/icons/icon-checkbox.svg': 'assets/icons/icon-checkbox-inactive.svg'\" />\n              <span>Male</span>\n            </div>\n            <div (click)=\"onChangeGender('f')\">\n              <img [src]=\"behalfofgender=='f'?'assets/icons/icon-checkbox.svg': 'assets/icons/icon-checkbox-inactive.svg'\" />\n              <span>Female</span>\n            </div>\n          </div>\n\n          <ion-item>\n            <ion-input type=\"text\" [(ngModel)]=\"behalfofcountry\" placeholder=\"Country and State\" required=true></ion-input>\n          </ion-item>\n        </ion-item-group>\n      </div>\n      <div *ngSwitchCase=\"2\" class=\"verify-progress-new-user\">\n        <form [formGroup]=\"secondStepForm\">\n          <ion-item>\n            <ion-label position=\"stacked\">First name</ion-label>\n            <ion-input formControlName=\"fname\" type=\"text\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"stacked\">Last name</ion-label>\n            <ion-input formControlName=\"lname\" type=\"text\"></ion-input>\n          </ion-item>\n\n          <!-- Birthdate -->\n          <ion-item>\n            <ion-label>BOD</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"dob\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"stacked\">Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label position=\"stacked\">Username</ion-label>\n            <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n          </ion-item>\n    \n          <ion-item *ngIf=\"!isLoggedIn\">\n            <ion-label position=\"stacked\">Password</ion-label>\n            <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n          </ion-item>\n        </form>\n        <ng-container *ngIf=\"isRequestBehalf\">\n          <ion-item-group>\n            <ion-item-divider>\n              Request Behalf\n            </ion-item-divider>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Name</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"behalfofname\" disabled=true></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Relation</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"behalfofrelation\" disabled=\"true\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Birthday</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"behalfofbod\" disabled=true></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Gender</ion-label>\n              <ion-input type=\"text\" disabled=true [value]=\"behalfofgender=='m'?'Male': 'Female'\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"stacked\">Country</ion-label>\n              <ion-input type=\"text\" disabled=true [(ngModel)]=\"behalfofcountry\"></ion-input>\n            </ion-item>\n          </ion-item-group>\n        </ng-container>\n      </div>\n      <div *ngSwitchCase=\"3\" class=\"verify-progress-payment\">\n        <div id=\"verify-progress-paymentopt-container\">\n          <div *ngFor=\"let payment of arrPaymentopts; let i = index;\">\n            <div [class]=\"selectedPaymentOpt==i?'paymentopt-img-container active-payment': 'paymentopt-img-container inactive-payment'\">\n              <img [src]=\"payment.image\" (click)=\"onChangePaymentOption(i)\"/>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"verify-progress-paymentopt-fields\">\n          <form [formGroup]=\"paymentOptForm\">\n            <ion-item>\n              <ion-label floating>Account HolderName</ion-label>\n              <ion-input formControlName=\"accountholdername\" type=\"text\"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>Account Number</ion-label>\n              <ion-input formControlName=\"accountnumber\" type=\"text\"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>IFSC code</ion-label>\n              <ion-input  formControlName=\"ifsccode\" type=\"text\"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>Bank Name</ion-label>\n              <ion-input formControlName=\"bankname\" type=\"text\"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n              <ion-label floating>Bank Address</ion-label>\n              <ion-input formControlName=\"bankaddress\" type=\"text\"></ion-input>\n            </ion-item>\n          </form>\n        </div>\n      </div>\n    </div>\n  \n    <div id=\"verify-progress-controllers\">\n      <div>\n        <ion-button color=\"hardmedium\" (click)=\"onClickBack()\">Back</ion-button>\n      </div>\n      <div *ngIf=\"initVerifyStep==1\">\n        <ion-button (click)=\"onClickSave()\">Save</ion-button>\n      </div>\n      <div *ngIf=\"initVerifyStep==2 && !isLoggedIn\">\n        <ion-button (click)=\"onClickSignup()\">Sign Up</ion-button>\n      </div>\n      <div>\n        <ion-button color=\"success\" (click)=\"onClickNext()\">\n          {{initVerifyStep==3?'Finish': 'Next'}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/expertsreview/expertsreview.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/expertsreview/expertsreview.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar img {\n  margin-left: 16px; }\n\nion-content {\n  --background: #f7f7f7; }\n\nion-list, ion-item-divider {\n  background: transparent !important; }\n\nion-item {\n  --background: transparent; }\n\n.verify-progress-indicator-container {\n  background: #F3F6F9;\n  padding: 8vh 16px; }\n\n.verify-progress-header p {\n  text-align: center;\n  font-size: 2em;\n  color: #505050; }\n\n.verify-progress-indicator {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.verify-progress-active-step {\n  width: 2em;\n  height: 2em;\n  background: #E1F0E1;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #3CC93C;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-inactive-step {\n  width: 2em;\n  height: 2em;\n  background: #EAEBEB;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #929BA2;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-connector {\n  width: 8vw;\n  height: .3em;\n  background: #929BA2;\n  margin: 0 8px; }\n\n#verify-progress-controllers {\n  display: flex;\n  margin-top: 3vh;\n  margin-bottom: 3vh; }\n\n#verify-progress-controllers div {\n    flex: 1;\n    text-align: center; }\n\n#verify-progress-controllers div ion-button {\n      width: 90%; }\n\n.verify-progress-upload-container {\n  height: 25vh;\n  margin: 16px;\n  border: 1px dashed #adadad;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer; }\n\n.verify-progress-upload-container p {\n    color: #9e9e9e;\n    font-size: .9em; }\n\n#verify-progress-file-selector {\n  visibility: hidden;\n  z-index: -1; }\n\n.verify-progress-new-user {\n  padding: 16px; }\n\n.verify-progress-payment {\n  padding: 16px; }\n\n#verify-progress-main-content {\n  padding: 16px; }\n\n#verify-progress-paymentopt-container {\n  display: flex; }\n\n#verify-progress-paymentopt-container div {\n    flex: 1;\n    text-align: center; }\n\n.paymentopt-img-container {\n  display: inline-block;\n  padding: 12px; }\n\n.active-payment {\n  background-color: #dedede; }\n\n.inactive-payment {\n  background-color: #f7f7f7; }\n\n@media only screen and (max-width: 420px) {\n  .paymentopt-img-container img {\n    max-width: 64px; } }\n\n@media only screen and (min-width: 421px) {\n  .paymentopt-img-container img {\n    max-width: 100px; } }\n\n.experts-review-gender {\n  display: flex;\n  margin-top: 2vh;\n  padding: 0 16px 16px;\n  border-bottom: 1px solid #d7d7d7; }\n\n.experts-review-gender div {\n    flex: 1;\n    display: flex;\n    align-items: center; }\n\n.experts-review-gender div span {\n      padding-left: 8px; }\n\nion-item-group {\n  margin-top: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9leHBlcnRzcmV2aWV3L2V4cGVydHNyZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSx5QkFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFFUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFIdEI7SUFLUSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUE7O0FBTjFCO01BUVksVUFBVSxFQUFBOztBQUt0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBUm5CO0lBVVEsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYSxFQUFBOztBQURqQjtJQUdRLE9BQU87SUFDUCxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJO0lBRVEsZUFBZSxFQUFBLEVBQ2xCOztBQUlUO0VBQ0k7SUFFUSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFJVDtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdDQUFnQyxFQUFBOztBQUpwQztJQU1RLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBUjNCO01BVVksaUJBQWlCLEVBQUE7O0FBSzdCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9leHBlcnRzcmV2aWV3L2V4cGVydHNyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbmlvbi1saXN0LCBpb24taXRlbS1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1pbmRpY2F0b3ItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNkY5O1xuICAgIHBhZGRpbmc6IDh2aCAxNnB4O1xufVxuXG4udmVyaWZ5LXByb2dyZXNzLWhlYWRlciB7XG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgIH1cbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1hY3RpdmUtc3RlcCB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjRTFGMEUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggI2RhZGFkYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzQ0M5M0M7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1pbmFjdGl2ZS1zdGVwIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJhY2tncm91bmQ6ICNFQUVCRUI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAjZGFkYWRhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzkyOUJBMjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmVyaWZ5LXByb2dyZXNzLWNvbm5lY3RvciB7XG4gICAgd2lkdGg6IDh2dztcbiAgICBoZWlnaHQ6IC4zZW07XG4gICAgYmFja2dyb3VuZDogIzkyOUJBMjtcbiAgICBtYXJnaW46IDAgOHB4O1xufVxuXG4jdmVyaWZ5LXByb2dyZXNzLWNvbnRyb2xsZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgZGl2IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtdXBsb2FkLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2FkYWRhZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxufVxuXG4jdmVyaWZ5LXByb2dyZXNzLWZpbGUtc2VsZWN0b3Ige1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1uZXctdXNlciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1wYXltZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4jdmVyaWZ5LXByb2dyZXNzLW1haW4tY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuI3ZlcmlmeS1wcm9ncmVzcy1wYXltZW50b3B0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4ucGF5bWVudG9wdC1pbWctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTJweDtcbn1cblxuLmFjdGl2ZS1wYXltZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xufVxuXG4uaW5hY3RpdmUtcGF5bWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5wYXltZW50b3B0LWltZy1jb250YWluZXIge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMXB4KSB7XG4gICAgLnBheW1lbnRvcHQtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfSAgIFxufVxuXG4uZXhwZXJ0cy1yZXZpZXctZ2VuZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24taXRlbS1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMnZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/expertsreview/expertsreview.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/expertsreview/expertsreview.page.ts ***!
  \****************************************************************/
/*! exports provided: ExpertsreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertsreviewPage", function() { return ExpertsreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_9__);










var ExpertsreviewPage = /** @class */ (function () {
    function ExpertsreviewPage(altCtrl, event, navCtrl, loadingCtrl, apiService, toastService, route, formBuilder) {
        var _this = this;
        this.altCtrl = altCtrl;
        this.event = event;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.objUserInfo = null;
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"];
        this.draftFiles = [];
        this.arrDraftTrackReq = [];
        this.requestId = "";
        this.objDraftRequest = null;
        this.requestCategory = 0;
        this.isRequestBehalf = false;
        this.initVerifyStep = 1;
        this.isFinishCurrentStep = false;
        this.arrPaymentopts = _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENTOPTIONS"];
        this.selectedPaymentOpt = 0;
        this.uploadedFiles = [];
        /**
         * query string
         */
        this.strQuery = "";
        /**
         * comment string
         */
        this.strComment = "";
        /**
         * Behalf request fields
         */
        this.behalfofname = "";
        this.behalfofrelation = "";
        this.behalfofbod = "1/1/1970";
        this.behalfofgender = "m";
        this.behalfofcountry = "";
        this.paymentOptFormSubmit = false;
        this.event.subscribe("onLoginStatusChange", function (data) {
            _this.initPage();
        });
        this.paymentOptForm = formBuilder.group({
            accountholdername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            accountnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            ifsccode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            bankname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            bankaddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])]
        });
        this.secondStepForm = formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            dob: ['1970-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
        });
    }
    ExpertsreviewPage.prototype.ngOnInit = function () {
    };
    ExpertsreviewPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Initialize page
     */
    ExpertsreviewPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userInfoLoader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /**
                         * Init variables
                         */
                        this.objUserInfo = null;
                        this.draftFiles = [];
                        this.requestId = "";
                        this.objDraftRequest = null;
                        this.requestCategory = 0;
                        this.isRequestBehalf = false;
                        this.initVerifyStep = 1;
                        this.isFinishCurrentStep = false;
                        this.selectedPaymentOpt = 0;
                        this.isLoggedIn = false;
                        this.uploadedFiles = [];
                        this.strComment = "";
                        this.strQuery = "";
                        this.behalfofname = "";
                        this.behalfofrelation = "";
                        this.behalfofbod = "1/1/1970";
                        this.behalfofgender = "m";
                        this.behalfofcountry = "";
                        this.paymentOptFormSubmit = false;
                        this.requestId = this.route.snapshot.paramMap.get("requestId") == 'null' ? null : this.route.snapshot.paramMap.get("requestId");
                        this.draftFiles = [];
                        this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
                        if (!this.requestId && this.isLoggedIn) {
                            this.checkDraftRequest();
                        }
                        if (!this.isLoggedIn) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        userInfoLoader = _a.sent();
                        return [4 /*yield*/, userInfoLoader.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getUserInfo()];
                    case 3:
                        _a.sent();
                        userInfoLoader.dismiss();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get logged in user's info
     */
    ExpertsreviewPage.prototype.getUserInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.apiService.getUser(localStorage.getItem("uid")).toPromise()];
                    case 1:
                        result = _a.sent();
                        this.objUserInfo = result.user;
                        this.secondStepForm.controls['fname'].setValue(this.objUserInfo.fname);
                        this.secondStepForm.controls['lname'].setValue(this.objUserInfo.lname);
                        this.secondStepForm.controls['dob'].setValue(this.objUserInfo.birthday);
                        this.secondStepForm.controls['email'].setValue(this.objUserInfo.email);
                        this.secondStepForm.controls['username'].setValue(this.objUserInfo.username);
                        this.secondStepForm.controls['password'].setValue(this.objUserInfo.password);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check user if have draft request
     */
    ExpertsreviewPage.prototype.checkDraftRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var draftLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.draftFiles = [];
                        this.arrDraftTrackReq = [];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        draftLoader = _a.sent();
                        return [4 /*yield*/, draftLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.getRequestByStatus(0, localStorage.getItem("uid"))
                            .subscribe(function (data) {
                            if (data.data) {
                                var draft = data.data.length > 1 ? data.data[data.data.length - 1] : data.data[0];
                                if (draft) {
                                    _this.strComment = draft.comments;
                                    _this.strQuery = draft.queries;
                                    _this.requestCategory = draft.category;
                                    _this.selectedPaymentOpt = draft.paymentStatus;
                                    _this.behalfofname = draft.behalfofname;
                                    _this.behalfofrelation = draft.behalfofrelation;
                                    _this.behalfofbod = draft.behalfofbod;
                                    _this.behalfofgender = draft.behalfofgender;
                                    _this.behalfofcountry = draft.behalfofcountry;
                                    _this.isRequestBehalf = draft.isbehalfof;
                                    _this.draftFiles = draft.files;
                                    _this.arrDraftTrackReq = draft.trackRequest;
                                }
                            }
                            draftLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            draftLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Show Next step
     * and upload attachments
     */
    ExpertsreviewPage.prototype.onClickNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, draftFiles_1, formData_1, uploadResult_1, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.initVerifyStep >= 3)) return [3 /*break*/, 1];
                        this.initVerifyStep = 3;
                        // this.postRequest();
                        this.onClickSavePayment();
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(this.initVerifyStep == 1)) return [3 /*break*/, 6];
                        files = this.fileField.getFiles();
                        draftFiles_1 = this.fileField.getDraftFiles();
                        formData_1 = new FormData();
                        files.forEach(function (file) {
                            formData_1.append('attachments', file.rawFile, file.name);
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.apiService.uploadFiles(formData_1)];
                    case 3:
                        uploadResult_1 = _a.sent();
                        Object.keys(uploadResult_1).map(function (key) {
                            _this.uploadedFiles.push(uploadResult_1[key]._id);
                        });
                        Object.keys(draftFiles_1).map(function (key) {
                            _this.uploadedFiles.push(draftFiles_1[key]._id);
                        });
                        this.initVerifyStep++;
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.toastService.showToast("Uploading file failed!");
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (this.isLoggedIn) {
                            this.initVerifyStep++;
                        }
                        else {
                            this.toastService.showToast("Please signup before place your request!");
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Post Requeust
     */
    ExpertsreviewPage.prototype.postRequest = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postLoader, files, formData_2, uploadResult_2, error_2, postData, trackRequestResult, i, error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        postLoader = _a.sent();
                        if (!(status == 0)) return [3 /*break*/, 5];
                        files = this.fileField.getFiles();
                        formData_2 = new FormData();
                        files.forEach(function (file) {
                            formData_2.append('attachments', file.rawFile, file.name);
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.apiService.uploadFiles(formData_2)];
                    case 3:
                        uploadResult_2 = _a.sent();
                        Object.keys(uploadResult_2).map(function (key) {
                            _this.uploadedFiles.push(uploadResult_2[key]._id);
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        postLoader.dismiss();
                        this.toastService.showToast("Upload files failed!");
                        return [3 /*break*/, 5];
                    case 5:
                        postData = {
                            category: this.requestCategory,
                            user: localStorage.getItem("uid"),
                            comments: this.strComment,
                            queries: this.strQuery,
                            status: status,
                            files: this.uploadedFiles,
                            paymentStatus: 0,
                            isbehalfof: this.isRequestBehalf,
                            behalfofname: this.behalfofname,
                            behalfofrelation: this.behalfofrelation,
                            behalfofbod: this.behalfofbod,
                            behalfofgender: this.behalfofgender,
                            behalfofcountry: this.behalfofcountry,
                            trackRequest: []
                        };
                        return [4 /*yield*/, postLoader.present()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 10, , 11]);
                        return [4 /*yield*/, this.apiService.saveRequestStatus(postData.status).toPromise()];
                    case 8:
                        trackRequestResult = _a.sent();
                        if (this.arrDraftTrackReq.length > 0) {
                            for (i = 0; i < this.arrDraftTrackReq.length; i++) {
                                postData.trackRequest.push(this.arrDraftTrackReq[i]);
                            }
                        }
                        postData.trackRequest.push(trackRequestResult.data._id);
                        return [4 /*yield*/, this.apiService.postRequest(postData).toPromise()];
                    case 9:
                        _a.sent();
                        this.uploadedFiles = [];
                        postLoader.dismiss();
                        this.toastService.showToast("Successfully Requested!");
                        this.navCtrl.navigateBack('/menu/landing');
                        return [3 /*break*/, 11];
                    case 10:
                        error_3 = _a.sent();
                        console.log(error_3);
                        postLoader.dismiss();
                        this.toastService.showToast("Request failed!");
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ExpertsreviewPage.prototype.onClickBack = function () {
        if (this.initVerifyStep <= 1) {
            this.initVerifyStep = 1;
        }
        else {
            if (this.initVerifyStep == 3) {
                if (!this.isLoggedIn) {
                    this.initVerifyStep--;
                }
                else {
                    this.initVerifyStep = 1;
                }
            }
            else {
                this.initVerifyStep--;
            }
        }
    };
    /**
     * Highlight selected paymentoption
     * @param index payment option index
     */
    ExpertsreviewPage.prototype.onChangePaymentOption = function (index) {
        this.selectedPaymentOpt = index;
    };
    /**
     * Save Payment option
     */
    ExpertsreviewPage.prototype.onClickSavePayment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var savePaymentOptLoader_1, paymentRequestData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.paymentOptFormSubmit = true;
                        if (!this.paymentOptForm.valid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        savePaymentOptLoader_1 = _a.sent();
                        return [4 /*yield*/, savePaymentOptLoader_1.present()];
                    case 2:
                        _a.sent();
                        paymentRequestData = {
                            method: this.selectedPaymentOpt,
                            accountholdername: this.paymentOptForm.controls.accountholdername.value,
                            accountnumber: this.paymentOptForm.controls.accountnumber.value,
                            ifsccode: this.paymentOptForm.controls.ifsccode.value,
                            bankname: this.paymentOptForm.controls.bankname.value,
                            bankaddress: this.paymentOptForm.controls.bankaddress.value,
                            userid: localStorage.getItem("uid")
                        };
                        this.apiService.savePaymentOption(paymentRequestData)
                            .subscribe(function (data) {
                            console.log(data);
                            savePaymentOptLoader_1.dismiss();
                            _this.postRequest(1);
                            // this.toastService.showToast("Payment option is saved now.");
                        }, function (error) {
                            console.log("Save Paymentoption failed!");
                            savePaymentOptLoader_1.dismiss();
                            _this.toastService.showToast("Save Paymentoption failed!");
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.toastService.showToast("Please input necessary fields!");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save Draft Request
     */
    ExpertsreviewPage.prototype.onClickSave = function () {
        this.postRequest(0);
    };
    /**
     * Register User if not loggedin
     */
    ExpertsreviewPage.prototype.onClickSignup = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newUser, signupLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newUser = {
                            email: this.secondStepForm.controls.email.value,
                            role: 0,
                            fname: this.secondStepForm.controls.fname.value,
                            lname: this.secondStepForm.controls.lname.value,
                            birthday: this.secondStepForm.controls.dob.value,
                            username: this.secondStepForm.controls.username.value,
                            password: md5__WEBPACK_IMPORTED_MODULE_9___default()(this.secondStepForm.controls.password.value),
                            experiencedyear: 0,
                            isverified: false,
                            highlight: false,
                            title: "",
                            headline: "",
                            category: 'null',
                            avatar: "assets/imgs/img-default-profile.svg",
                            expertbio: "",
                            expertschool: "",
                            expertresidency: "",
                            expertinternship: "",
                            expertdegree: "",
                            expertaward: ""
                        };
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        signupLoader = _a.sent();
                        return [4 /*yield*/, signupLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.signUp(newUser)
                            .subscribe(function (res) {
                            signupLoader.dismiss();
                            _this.toastService.showToast("Successfully Registered!");
                            localStorage.setItem("isLoggedIn", 'true');
                            localStorage.setItem("uid", res.user._id);
                            localStorage.setItem("role", res.user.role);
                            _this.event.publish("onLoginStatusChange");
                        }, function (error) {
                            console.log(error);
                            signupLoader.dismiss();
                            if (error.error.message) {
                                _this.toastService.showToast(error.error.message);
                            }
                            else if (error.error.err.errors.email.message) {
                                _this.toastService.showToast(error.error.err.errors.email.message);
                            }
                            else if (error.message) {
                                _this.toastService.showToast(error.message);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Change Gender
     * @param gender string
     * m: Male
     * f: Female
     */
    ExpertsreviewPage.prototype.onChangeGender = function (gender) {
        this.behalfofgender = gender;
    };
    /**
     * Navigate back to landing page
     */
    ExpertsreviewPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["MultiFileUploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["MultiFileUploadComponent"])
    ], ExpertsreviewPage.prototype, "fileField", void 0);
    ExpertsreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expertsreview',
            template: __webpack_require__(/*! ./expertsreview.page.html */ "./src/app/pages/user/expertsreview/expertsreview.page.html"),
            styles: [__webpack_require__(/*! ./expertsreview.page.scss */ "./src/app/pages/user/expertsreview/expertsreview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], ExpertsreviewPage);
    return ExpertsreviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-expertsreview-expertsreview-module.js.map