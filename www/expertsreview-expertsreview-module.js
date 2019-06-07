(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expertsreview-expertsreview-module"],{

/***/ "./src/app/pages/constants.ts":
/*!************************************!*\
  !*** ./src/app/pages/constants.ts ***!
  \************************************/
/*! exports provided: CATEGORIES, PAYMENTOPTIONS, CONTACTINFO, BACKENDURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTOPTIONS", function() { return PAYMENTOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTINFO", function() { return CONTACTINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKENDURL", function() { return BACKENDURL; });
var CATEGORIES = [
    "Cardiology",
    "Endocrinology",
    "Infectious Diseases",
    "Nephrology",
    "Oncology & Hematology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Dermatology",
    "Gastroenterology",
    "Internal Medicine",
    "Neurology",
    "Precision Oncology",
    "Physical Med/Rehab",
    "Pulmonary Medicine and Critical Care",
    "Rheumatology"
];
var PAYMENTOPTIONS = [
    "Debit Card",
    "Credit Card",
    "Paypal",
    "Paytm",
    "Internet Banking"
];
var CONTACTINFO = {
    email: "test@testemail.com",
    number: "+123456789"
};
var BACKENDURL = 'http://192.168.0.105:4200/api/v1';


/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expertsreview.page */ "./src/app/pages/expertsreview/expertsreview.page.ts");







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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expertsreview_page__WEBPACK_IMPORTED_MODULE_6__["ExpertsreviewPage"]]
        })
    ], ExpertsreviewPageModule);
    return ExpertsreviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <img src=\"assets/imgs/logo-veridoc.svg\" />\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isLoggedIn\" fill=\"solid\" color=\"success\" (click)=\"onClickGetStarted()\">Get Started</ion-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"verify-progress-container\">\n    <div class=\"verify-progress-header\">\n      <p>\n        Verify your documents in Just 3 steps\n      </p>\n    </div>\n  \n    <div class=\"verify-progress-indicator\">\n      <div [class]=\"initVerifyStep>=1?'verify-progress-active-step': 'verify-progress-inactive-step'\">1</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=2?'verify-progress-active-step': 'verify-progress-inactive-step'\">2</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=3?'verify-progress-active-step': 'verify-progress-inactive-step'\">3</div>\n    </div>\n  </div>\n\n  <div [ngSwitch]=\"initVerifyStep\">\n    <div *ngSwitchCase=\"1\">\n      <div class=\"verify-progress-upload-container\">\n\n      </div>\n    </div>\n    <div *ngSwitchCase=\"2\" class=\"verify-progress-new-user\">\n      <ion-item>\n        <ion-label position=\"stacked\">First name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Last name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"email\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Aadhar</ion-label>\n        <ion-input type=\"number\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Username</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngSwitchCase=\"3\" class=\"verify-progress-payment\">\n      <ion-item>\n        <ion-label>Payment</ion-label>\n        <ion-select [(ngModel)]=\"defaultPaymentOpt\">\n          <ion-select-option *ngFor=\"let opt of arrPaymentopts; let i = index;\" [value]=\"i\">\n            {{opt}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n  <div id=\"verify-progress-controllers\">\n    <div>\n      <ion-button color=\"hardmedium\" (click)=\"onClickBack()\">Back</ion-button>\n    </div>\n    <div>\n      <ion-button color=\"success\" (click)=\"onClickNext()\">\n        {{initVerifyStep==3?'Finish': 'Next'}}\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar img {\n  margin-left: 16px; }\n\n.verify-progress-container {\n  background: #F3F6F9;\n  padding: 8vh 16px; }\n\n.verify-progress-header p {\n  text-align: center;\n  font-size: 2em;\n  color: #505050; }\n\n.verify-progress-indicator {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.verify-progress-active-step {\n  width: 11vw;\n  height: 11vw;\n  background: #E1F0E1;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #3CC93C;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-inactive-step {\n  width: 11vw;\n  height: 11vw;\n  background: #EAEBEB;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #929BA2;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-connector {\n  width: 8vw;\n  height: .3em;\n  background: #929BA2;\n  margin: 0 8px; }\n\n#verify-progress-controllers {\n  display: flex;\n  margin-top: 3vh;\n  margin-bottom: 3vh; }\n\n#verify-progress-controllers div {\n    flex: 1;\n    text-align: center; }\n\n#verify-progress-controllers div ion-button {\n      width: 50%; }\n\n.verify-progress-upload-container {\n  height: 25vh;\n  margin: 16px;\n  border: 1px dashed #adadad;\n  border-radius: 10px; }\n\n.verify-progress-new-user {\n  padding: 16px; }\n\n.verify-progress-payment {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0c3Jldmlldy9leHBlcnRzcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFFUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFIdEI7SUFLUSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUE7O0FBTjFCO01BUVksVUFBVSxFQUFBOztBQUt0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlcnRzcmV2aWV3L2V4cGVydHNyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNkY5O1xuICAgIHBhZGRpbmc6IDh2aCAxNnB4O1xufVxuXG4udmVyaWZ5LXByb2dyZXNzLWhlYWRlciB7XG4gICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgIH1cbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1hY3RpdmUtc3RlcCB7XG4gICAgd2lkdGg6IDExdnc7XG4gICAgaGVpZ2h0OiAxMXZ3O1xuICAgIGJhY2tncm91bmQ6ICNFMUYwRTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAjZGFkYWRhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzNDQzkzQztcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmVyaWZ5LXByb2dyZXNzLWluYWN0aXZlLXN0ZXAge1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIGhlaWdodDogMTF2dztcbiAgICBiYWNrZ3JvdW5kOiAjRUFFQkVCO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggI2RhZGFkYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5MjlCQTI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1jb25uZWN0b3Ige1xuICAgIHdpZHRoOiA4dnc7XG4gICAgaGVpZ2h0OiAuM2VtO1xuICAgIGJhY2tncm91bmQ6ICM5MjlCQTI7XG4gICAgbWFyZ2luOiAwIDhweDtcbn1cblxuI3ZlcmlmeS1wcm9ncmVzcy1jb250cm9sbGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udmVyaWZ5LXByb2dyZXNzLXVwbG9hZC1jb250YWluZXIge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhZGFkYWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1uZXctdXNlciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1wYXltZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.ts ***!
  \***********************************************************/
/*! exports provided: ExpertsreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertsreviewPage", function() { return ExpertsreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ExpertsreviewPage = /** @class */ (function () {
    function ExpertsreviewPage(altCtrl, event, navCtrl) {
        var _this = this;
        this.altCtrl = altCtrl;
        this.event = event;
        this.navCtrl = navCtrl;
        this.initVerifyStep = 1;
        this.isFinishCurrentStep = false;
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"];
        this.arrPaymentopts = _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENTOPTIONS"];
        this.defaultPaymentOpt = 0;
        this.event.subscribe("onLoginStatusChange", function (data) {
            _this.initPage();
        });
    }
    ExpertsreviewPage.prototype.ngOnInit = function () {
    };
    ExpertsreviewPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    ExpertsreviewPage.prototype.initPage = function () {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
    };
    ExpertsreviewPage.prototype.onClickNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userTypeAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Is New User?",
                            subHeader: "",
                            inputs: [
                                {
                                    type: 'radio',
                                    label: 'Yes',
                                    value: '0',
                                    checked: true
                                },
                                {
                                    type: 'radio',
                                    label: 'No',
                                    value: '1'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data == "1") {
                                            _this.initVerifyStep++;
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        userTypeAlt = _a.sent();
                        if (!(this.initVerifyStep >= 3)) return [3 /*break*/, 2];
                        this.initVerifyStep = 3;
                        return [3 /*break*/, 4];
                    case 2:
                        this.initVerifyStep++;
                        if (!(this.initVerifyStep == 2)) return [3 /*break*/, 4];
                        return [4 /*yield*/, userTypeAlt.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExpertsreviewPage.prototype.onClickBack = function () {
        if (this.initVerifyStep <= 1) {
            this.initVerifyStep = 1;
        }
        else {
            this.initVerifyStep--;
        }
    };
    ExpertsreviewPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    ExpertsreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expertsreview',
            template: __webpack_require__(/*! ./expertsreview.page.html */ "./src/app/pages/expertsreview/expertsreview.page.html"),
            styles: [__webpack_require__(/*! ./expertsreview.page.scss */ "./src/app/pages/expertsreview/expertsreview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ExpertsreviewPage);
    return ExpertsreviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=expertsreview-expertsreview-module.js.map