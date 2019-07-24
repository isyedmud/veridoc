(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-opt-pay-opt-module"],{

/***/ "./src/app/pages/pay-opt/pay-opt.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pay-opt/pay-opt.module.ts ***!
  \*************************************************/
/*! exports provided: PayOptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayOptPageModule", function() { return PayOptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_opt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-opt.page */ "./src/app/pages/pay-opt/pay-opt.page.ts");







var routes = [
    {
        path: '',
        component: _pay_opt_page__WEBPACK_IMPORTED_MODULE_6__["PayOptPage"]
    }
];
var PayOptPageModule = /** @class */ (function () {
    function PayOptPageModule() {
    }
    PayOptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pay_opt_page__WEBPACK_IMPORTED_MODULE_6__["PayOptPage"]]
        })
    ], PayOptPageModule);
    return PayOptPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pay-opt/pay-opt.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/pay-opt/pay-opt.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Payment Option</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\" *ngFor=\"let payment of arrPaymentOpts\">\n        <div>\n          <img [src]=\"payment.image\" />\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ng-container *ngIf=\"objPaymentOpt; else noPaymentOpt\">\n    <ion-item>\n      <ion-label>Account HolderName</ion-label>\n      <ion-input type=\"text\" disabled=true [(ngModel)]=\"objPaymentOpt.accountholdername\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Account Number</ion-label>\n      <ion-input type=\"text\" disabled=true [(ngModel)]=\"objPaymentOpt.accountnumber\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Bank Address</ion-label>\n      <ion-input type=\"text\" disabled=true [(ngModel)]=\"objPaymentOpt.bankaddress\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Bank Name</ion-label>\n      <ion-input type=\"text\" disabled=true [(ngModel)]=\"objPaymentOpt.bankname\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>IFSC code</ion-label>\n      <ion-input type=\"text\" disabled=true [(ngModel)]=\"objPaymentOpt.ifsccode\"></ion-input>\n    </ion-item>\n  </ng-container>\n  <ng-template #noPaymentOpt>\n    <p>\n      No payment option selected\n    </p>\n  </ng-template>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pay-opt/pay-opt.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/pay-opt/pay-opt.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f7f7f7; }\n\nion-item {\n  --background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvcGF5LW9wdC9wYXktb3B0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheS1vcHQvcGF5LW9wdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/pay-opt/pay-opt.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pay-opt/pay-opt.page.ts ***!
  \***********************************************/
/*! exports provided: PayOptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayOptPage", function() { return PayOptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");






var PayOptPage = /** @class */ (function () {
    function PayOptPage(navCtrl, loadingCtrl, apiService, toastService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.arrPaymentOpts = _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENTOPTIONS"];
        this.objPaymentOpt = null;
    }
    PayOptPage.prototype.ngOnInit = function () {
    };
    PayOptPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    PayOptPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profileLoader, getProfileRequest, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.objPaymentOpt = null;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        profileLoader = _a.sent();
                        return [4 /*yield*/, profileLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.apiService.getUser(localStorage.getItem("uid")).toPromise()];
                    case 4:
                        getProfileRequest = _a.sent();
                        if (getProfileRequest.user.paymentoption) {
                            this.objPaymentOpt = getProfileRequest.user.paymentoption;
                        }
                        console.log(getProfileRequest);
                        profileLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        profileLoader.dismiss();
                        this.toastService.showToast("Operation failed!");
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PayOptPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    PayOptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-opt',
            template: __webpack_require__(/*! ./pay-opt.page.html */ "./src/app/pages/pay-opt/pay-opt.page.html"),
            styles: [__webpack_require__(/*! ./pay-opt.page.scss */ "./src/app/pages/pay-opt/pay-opt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], PayOptPage);
    return PayOptPage;
}());



/***/ }),

/***/ "./src/app/services/toast/toast.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    /**
     *
     * @param message String
     * @returns null
     */
    ToastService.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pay-opt-pay-opt-module.js.map