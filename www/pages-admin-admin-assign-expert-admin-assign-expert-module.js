(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-assign-expert-admin-assign-expert-module"],{

/***/ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-assign-expert/admin-assign-expert.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminAssignExpertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAssignExpertPageModule", function() { return AdminAssignExpertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_assign_expert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-assign-expert.page */ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.ts");







var routes = [
    {
        path: '',
        component: _admin_assign_expert_page__WEBPACK_IMPORTED_MODULE_6__["AdminAssignExpertPage"]
    }
];
var AdminAssignExpertPageModule = /** @class */ (function () {
    function AdminAssignExpertPageModule() {
    }
    AdminAssignExpertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_assign_expert_page__WEBPACK_IMPORTED_MODULE_6__["AdminAssignExpertPage"]]
        })
    ], AdminAssignExpertPageModule);
    return AdminAssignExpertPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Assign Request</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-padding>\n    <div *ngFor=\"let expert of arrExperts; let i = index;\" class=\"expert-list-item\">\n      <div class=\"expert-card-header padding-card\">\n        <p>\n          Expert Name: {{expert.fname + \" \" + expert.lname}}\n        </p>\n      </div>\n      <div class=\"expert-card-body padding-card\">\n        <p>\n          Title: {{expert.title}}\n        </p>\n        <p>\n          Headline: {{expert.headline}}\n        </p>\n        <p>\n          Experienced Year: {{expert.experiencedyear}}\n        </p>\n      </div>\n      <div class=\"expert-card-footer padding-card\">\n        <div>\n          <ion-button [disabled]=\"isAssigned\" (click)=\"onClickAssignRequest(i)\">\n            Assign Request\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light); }\n\nion-list {\n  background-color: transparent; }\n\n.expert-list-item {\n  margin: 16px 16px 3vh 16px;\n  box-shadow: 0 0 8px #dedede; }\n\n.padding-card {\n  padding: 16px; }\n\n.expert-card-header {\n  background-color: #139bff; }\n\n.expert-card-header p {\n    margin: 0;\n    color: white; }\n\n.expert-card-footer div {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tYXNzaWduLWV4cGVydC9hZG1pbi1hc3NpZ24tZXhwZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksMEJBQTBCO0VBQzFCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxTQUFTO0lBQ1QsWUFBWSxFQUFBOztBQUlwQjtFQUVRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tYXNzaWduLWV4cGVydC9hZG1pbi1hc3NpZ24tZXhwZXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmV4cGVydC1saXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDN2aCAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2RlZGVkZTtcbn1cblxuLnBhZGRpbmctY2FyZCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4cGVydC1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzOWJmZjtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uZXhwZXJ0LWNhcmQtZm9vdGVyIHtcbiAgICBkaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminAssignExpertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAssignExpertPage", function() { return AdminAssignExpertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");






var AdminAssignExpertPage = /** @class */ (function () {
    function AdminAssignExpertPage(navCtrl, loadingCtrl, apiService, route, toastService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.route = route;
        this.toastService = toastService;
        this.arrExperts = [];
        this.reqId = "";
        this.isAssigned = false;
        this.newCategoryId = "";
    }
    AdminAssignExpertPage.prototype.ngOnInit = function () {
    };
    AdminAssignExpertPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    AdminAssignExpertPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var expertsLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reqId = this.route.snapshot.paramMap.get("reqId");
                        this.newCategoryId = this.route.snapshot.paramMap.get("categoryId");
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        expertsLoader = _a.sent();
                        return [4 /*yield*/, expertsLoader.present()];
                    case 2:
                        _a.sent();
                        this.arrExperts = [];
                        this.apiService.getUsers(1)
                            .subscribe(function (res) {
                            if (res.data) {
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].isverified == true && _this.newCategoryId == res.data[i].category) {
                                        _this.arrExperts.push(res.data[i]);
                                    }
                                }
                            }
                            console.log(_this.arrExperts);
                            expertsLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            expertsLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminAssignExpertPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/admin-requests');
    };
    AdminAssignExpertPage.prototype.onClickAssignRequest = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        assignLoader = _a.sent();
                        return [4 /*yield*/, assignLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.requestSetExpert({ requestId: this.reqId, expertId: this.arrExperts[index]._id })
                            .subscribe(function () {
                            _this.isAssigned = true;
                            assignLoader.dismiss();
                            _this.toastService.showToast("Request is assigned successfully!");
                        }, function (error) {
                            console.log(error);
                            assignLoader.dismiss();
                            _this.toastService.showToast("Operation Failed");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminAssignExpertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-assign-expert',
            template: __webpack_require__(/*! ./admin-assign-expert.page.html */ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.html"),
            styles: [__webpack_require__(/*! ./admin-assign-expert.page.scss */ "./src/app/pages/admin/admin-assign-expert/admin-assign-expert.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], AdminAssignExpertPage);
    return AdminAssignExpertPage;
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
//# sourceMappingURL=pages-admin-admin-assign-expert-admin-assign-expert-module.js.map