(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expert-reviewed-cases-reviewed-cases-module"],{

/***/ "./src/app/pages/expert/reviewed-cases/reviewed-cases.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expert/reviewed-cases/reviewed-cases.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewedCasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewedCasesPageModule", function() { return ReviewedCasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reviewed_cases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviewed-cases.page */ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _reviewed_cases_page__WEBPACK_IMPORTED_MODULE_6__["ReviewedCasesPage"]
    }
];
var ReviewedCasesPageModule = /** @class */ (function () {
    function ReviewedCasesPageModule() {
    }
    ReviewedCasesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reviewed_cases_page__WEBPACK_IMPORTED_MODULE_6__["ReviewedCasesPage"]]
        })
    ], ReviewedCasesPageModule);
    return ReviewedCasesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expert/reviewed-cases/reviewed-cases.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Reviewed Cases</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <div id=\"myrequests-searchbar\">\n    <ion-searchbar placeholder=\"Filter Requests\" [(ngModel)]=\"strKeyword\" (ionChange)=\"onChangeSearchInput()\" no-padding></ion-searchbar>\n  </div>\n\n  <div id=\"myrequests-list\">\n    <div *ngFor=\"let request of arrFilterRequests; let i = index;\" class=\"myrequests-item\">\n      <div class=\"myrequests-item-header\">\n        <p>\n          RequestId: {{request._id}}\n        </p>\n      </div>\n      <div class=\"myrequests-item-content\">\n        <div class=\"myrequests-item-status\">\n          <p>\n            Status: {{arrStatus[request.status]}}\n          </p>\n          <p *ngIf=\"request.paymentStatus==1\" class=\"myrequests-item-payment-status\">\n            Payment Processed\n          </p>\n          <div *ngIf=\"request.paymentStatus==0\" class=\"myrequests-item-btn-receivepayment\">\n            <ion-button color=\"danger\" [disabled]=\"request.status==0\" (click)=\"onClickReceivePayment(i)\">Payment Received</ion-button>\n          </div>\n        </div>\n        <p>\n          Comments: {{request.comments}}\n        </p>\n        <p>Queries: {{request.queries}}</p>\n        <ion-item lines=\"none\" (click)=\"onToggleViewAttachment(i)\">\n          <ion-icon *ngIf=\"!request.expanded\" name=\"arrow-dropright\"></ion-icon>\n          <ion-icon *ngIf=\"request.expanded\" name=\"arrow-dropdown\"></ion-icon>\n          <ion-label>View Attachments</ion-label>\n        </ion-item>\n        <ion-list *ngIf=\"request.expanded\" no-padding>\n          <div *ngFor=\"let file of request.files\">\n            <p (click)=\"onClickAttachments(file.filename)\">\n              {{file.filename}}\n            </p>\n          </div>\n        </ion-list>\n      </div>\n      <div class=\"myrequests-item-footer\">\n        <p>\n          Created At: {{request.createdAt | doctime: true}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expert/reviewed-cases/reviewed-cases.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myrequests-searchbar {\n  padding: 16px; }\n\n@media only screen and (max-width: 640px) {\n  #myrequests-searchbar {\n    width: 100%; } }\n\n@media only screen and (min-width: 641px) {\n  #myrequests-searchbar {\n    width: 50%; } }\n\n#myrequests-list {\n  margin: 16px; }\n\n.myrequests-item {\n  margin-bottom: 2vh;\n  box-shadow: 0 0 8px #c7c7c7; }\n\n.myrequests-item-status {\n  position: relative; }\n\n.myrequests-item-status p {\n    margin: 0; }\n\n.myrequests-item-payment-status {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  color: #4dca64;\n  border: 1px solid #4dca64;\n  padding: 4px;\n  border-radius: 6px;\n  font-size: .8em; }\n\n.myrequests-item-btn-receivepayment {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(0, -50%); }\n\n.myrequests-item-btn-receivepayment ion-button {\n    font-size: .8em;\n    --padding-bottom: 4px;\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 4px; }\n\n.myrequests-item-header {\n  padding: 16px;\n  background-color: #3780ff; }\n\n.myrequests-item-header p {\n    margin: 0;\n    color: white; }\n\n.myrequests-item-content {\n  padding: 16px; }\n\n.myrequests-item-footer {\n  padding: 0 16px 16px; }\n\n.myrequests-item-footer p {\n    margin: 0;\n    text-align: right;\n    font-size: .9em; }\n\nion-list {\n  margin-left: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0L3Jldmlld2VkLWNhc2VzL3Jldmlld2VkLWNhc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSTtJQUNJLFdBQVcsRUFBQSxFQUNkOztBQUdMO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYjs7QUFHTDtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsU0FBUyxFQUFBOztBQUlqQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLDZCQUE2QixFQUFBOztBQUpqQztJQU1RLGVBQWU7SUFDZixxQkFBaUI7SUFDakIsa0JBQWM7SUFDZCxvQkFBZ0I7SUFDaEIsa0JBQWMsRUFBQTs7QUFJdEI7RUFDSSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBRjdCO0lBSVEsU0FBUztJQUNULFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRHhCO0lBR1EsU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlcnQvcmV2aWV3ZWQtY2FzZXMvcmV2aWV3ZWQtY2FzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215cmVxdWVzdHMtc2VhcmNoYmFyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgI215cmVxdWVzdHMtc2VhcmNoYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSB7XG4gICAgI215cmVxdWVzdHMtc2VhcmNoYmFyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbiNteXJlcXVlc3RzLWxpc3Qge1xuICAgIG1hcmdpbjogMTZweDtcbn1cblxuLm15cmVxdWVzdHMtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2M3YzdjNztcbn1cblxuLm15cmVxdWVzdHMtaXRlbS1zdGF0dXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLm15cmVxdWVzdHMtaXRlbS1wYXltZW50LXN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIGNvbG9yOiAjNGRjYTY0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZGNhNjQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IC44ZW07XG59XG5cbi5teXJlcXVlc3RzLWl0ZW0tYnRuLXJlY2VpdmVwYXltZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxufVxuXG4ubXlyZXF1ZXN0cy1pdGVtLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5teXJlcXVlc3RzLWl0ZW0tY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLm15cmVxdWVzdHMtaXRlbS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxufVxuXG5pb24tbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expert/reviewed-cases/reviewed-cases.page.ts ***!
  \********************************************************************/
/*! exports provided: ReviewedCasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewedCasesPage", function() { return ReviewedCasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");









var ReviewedCasesPage = /** @class */ (function () {
    function ReviewedCasesPage(navCtrl, apiService, loadingCtrl, platform, file, transfer, toastService) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.toastService = toastService;
        this.arrRequests = [];
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"];
        this.strKeyword = "";
        this.arrFilterRequests = [];
    }
    ReviewedCasesPage.prototype.ngOnInit = function () {
    };
    ReviewedCasesPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    ReviewedCasesPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestLoader, uid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.arrRequests = [];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        requestLoader = _a.sent();
                        return [4 /*yield*/, requestLoader.present()];
                    case 2:
                        _a.sent();
                        try {
                            uid = localStorage.getItem("uid");
                            this.apiService.getAllRequests(uid)
                                .subscribe(function (res) {
                                if (res.data) {
                                    for (var i = 0; i < res.data.length; i++) {
                                        _this.arrRequests.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false }));
                                    }
                                }
                                requestLoader.dismiss();
                                _this.arrFilterRequests = _this.arrRequests;
                                console.log(_this.arrFilterRequests);
                            });
                        }
                        catch (err) {
                            console.log(err);
                            requestLoader.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewedCasesPage.prototype.onChangeSearchInput = function () {
        var _this = this;
        if (this.strKeyword !== "") {
            this.arrFilterRequests = this.arrRequests.filter(function (x) { return x.queries.toLowerCase().includes(_this.strKeyword) || x.comments.toLowerCase().includes(_this.strKeyword); });
        }
        else {
            this.arrFilterRequests = this.arrRequests;
        }
    };
    ReviewedCasesPage.prototype.onToggleViewAttachment = function (index) {
        this.arrRequests[index].expanded = !this.arrRequests[index].expanded;
    };
    ReviewedCasesPage.prototype.onClickAttachments = function (filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var downloadLoader, isMobile, fileTransfer, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Downloading..."
                        })];
                    case 1:
                        downloadLoader = _a.sent();
                        return [4 /*yield*/, downloadLoader.present()];
                    case 2:
                        _a.sent();
                        isMobile = this.platform.is("mobile");
                        if (!isMobile) return [3 /*break*/, 7];
                        fileTransfer = this.transfer.create();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, fileTransfer.download(_constants__WEBPACK_IMPORTED_MODULE_7__["SERVERASSETS"] + filename, this.file.externalRootDirectory + 'Download/' + filename)];
                    case 4:
                        _a.sent();
                        downloadLoader.dismiss();
                        this.toastService.showToast(filename + " is downloaded successfully!");
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        downloadLoader.dismiss();
                        this.toastService.showToast(filename + " download is faled!");
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.apiService.downloadFile(filename)
                            .subscribe(function (data) {
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, filename);
                            downloadLoader.dismiss();
                            _this.toastService.showToast(filename + " is downloaded successfully!");
                        }, function (error) {
                            console.log(error);
                            downloadLoader.dismiss();
                            _this.toastService.showToast(filename + " download is faled!");
                        });
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set paymentStatus = 1
     * The expert received payment
     * @param i arrrequests index
     */
    ReviewedCasesPage.prototype.onClickReceivePayment = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var paymentReceiveLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Processing..."
                        })];
                    case 1:
                        paymentReceiveLoader = _a.sent();
                        return [4 /*yield*/, paymentReceiveLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.processPayment(this.arrRequests[i]._id)
                            .subscribe(function (data) {
                            paymentReceiveLoader.dismiss();
                            _this.toastService.showToast("Payment for this request is processed!");
                            _this.arrRequests[i].paymentStatus = 1;
                        }, function (error) {
                            console.log(error);
                            paymentReceiveLoader.dismiss();
                            _this.toastService.showToast("Payment for this request is failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ReviewedCasesPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/expert-requests');
    };
    ReviewedCasesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviewed-cases',
            template: __webpack_require__(/*! ./reviewed-cases.page.html */ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.html"),
            styles: [__webpack_require__(/*! ./reviewed-cases.page.scss */ "./src/app/pages/expert/reviewed-cases/reviewed-cases.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]])
    ], ReviewedCasesPage);
    return ReviewedCasesPage;
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
//# sourceMappingURL=pages-expert-reviewed-cases-reviewed-cases-module.js.map