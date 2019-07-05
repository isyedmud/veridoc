(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-request-list-request-list-module"],{

/***/ "./src/app/pages/user/request-list/request-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.module.ts ***!
  \****************************************************************/
/*! exports provided: RequestListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListPageModule", function() { return RequestListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-list.page */ "./src/app/pages/user/request-list/request-list.page.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");








var routes = [
    {
        path: '',
        component: _request_list_page__WEBPACK_IMPORTED_MODULE_6__["RequestListPage"]
    }
];
var RequestListPageModule = /** @class */ (function () {
    function RequestListPageModule() {
    }
    RequestListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _request_list_page__WEBPACK_IMPORTED_MODULE_6__["RequestListPage"],
            ]
        })
    ], RequestListPageModule);
    return RequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/request-list/request-list.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClickFilterBtn()\">\n        <ion-icon src=\"assets/icons/icon-custom-filter.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"request-list-header\">\n    <div id=\"request-list-viewtype\">\n      <div id=\"request-btn-listview\" [class]=\"selectedView==0?'active-viewtype': 'inactive-viewtype'\" (click)=\"onClickViewType(0)\">\n        <img [src]=\"selectedView==0?'assets/icons/icon-list-active.svg':'assets/icons/icon-list-inactive.svg'\" />\n        <p>\n          List\n        </p>\n      </div>\n      <div id=\"request-btn-gridview\" [class]=\"selectedView==1?'active-viewtype': 'inactive-viewtype'\" (click)=\"onClickViewType(1)\">\n        <img [src]=\"selectedView==1?'assets/icons/icon-grid-active.svg':'assets/icons/icon-grid-inactive.svg'\" />\n        <p>\n          Grid\n        </p>\n      </div>      \n    </div>\n    <div id=\"request-list-newrequest\">\n      <ion-button (click)=\"onClickNewRequest()\">Get Experts Review</ion-button>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col [size]=\"gridcount\" *ngFor=\"let request of arrMyRequests; let i = index;\">\n        <div class=\"request-item\">\n          <div class=\"request-item-header\">\n            <div>\n              <p>\n                {{arrStatus[request.status]}}\n              </p>\n            </div>\n            <div>\n              <ion-buttons>\n                <ion-button fill=\"clear\" color=\"white\" *ngIf=\"request.status==1 || request.status==0\">\n                  <ion-icon name=\"create\"></ion-icon>\n                </ion-button>\n                <ion-button fill=\"clear\" color=\"white\" (click)=\"onClickCloseRequest(i)\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </div>\n          </div>\n          <div class=\"request-item-inner\">\n            <div>\n              <ion-item lines=\"none\">\n                <ion-label>Category</ion-label>\n                <ion-select [(ngModel)]=\"request.category\" disabled=true>\n                  <ion-select-option *ngFor=\"let category of arrCategories; let j = index;\" [value]=\"j\">\n                    {{category}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n              <p class=\"request-item-subheader\">\n                Query:\n              </p>\n              <ion-textarea disabled=true [(ngModel)]=\"request.queries\"></ion-textarea>\n            </div>\n            <div>\n              <p class=\"request-item-subheader\">\n                Comment: {{request.comments}}\n              </p>\n              <ion-textarea disabled=true [(ngModel)]=\"request.comments\"></ion-textarea>\n            </div>\n          </div>\n          <div class=\"request-item-footer\">\n            <ng-container [ngSwitch]=\"request.status\">\n              <div *ngSwitchCase=\"0\" class=\"request-item-footer-controls\">\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(0, i)\">Complete your request</ion-button>\n                </div>\n              </div>\n              <div *ngSwitchCase=\"1\" class=\"request-item-footer-controls\">\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(1, i)\">View Details</ion-button>\n                </div>\n              </div>\n              <div *ngSwitchCase=\"2\" class=\"request-item-footer-controls\">\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(2, i)\">Take action</ion-button>\n                </div>\n              </div>\n              <div *ngSwitchCase=\"3\" class=\"request-item-footer-controls\">\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(3, i)\">Need Clarification</ion-button>\n                </div>\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(4, i)\">Close Request</ion-button>\n                </div>\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(5, i)\">Not Satisfied</ion-button>\n                </div>\n              </div>\n              <div *ngSwitchCase=\"4\">\n                <div>\n                  <ion-button expand=\"full\" (click)=\"onClickRequestAction(6, i)\">Re open</ion-button>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)=\"onClickMyDocuments()\">\n    <ion-title>My Documents</ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/user/request-list/request-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#request-list-newrequest {\n  flex: 1;\n  width: 100%;\n  padding: 16px 16px 0 16px;\n  text-align: right; }\n\n.request-item {\n  margin: 8px;\n  box-shadow: 0 2px 4px #b3b3b3; }\n\n.request-item-header {\n  background-color: #3780ff;\n  display: flex; }\n\n.request-item-header div {\n    flex: 1; }\n\n.request-item-header div p {\n      margin: 0;\n      padding: 16px;\n      color: white; }\n\n.request-item-header > div:nth-child(2) {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.request-item-inner {\n  padding: 16px; }\n\n.request-item-subheader {\n  color: #656565; }\n\n.request-item-txtcontent {\n  margin-left: 16px; }\n\n#request-list-header {\n  display: flex; }\n\n#request-list-viewtype {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  padding: 16px 16px 0 16px; }\n\n#request-btn-listview, #request-btn-gridview {\n  padding: 10px 12px;\n  display: flex;\n  justify-content: center;\n  margin-left: 1px;\n  cursor: pointer; }\n\n#request-btn-listview img, #request-btn-gridview img {\n    width: 20px; }\n\n#request-btn-listview p, #request-btn-gridview p {\n    margin: 0 0 0 4px; }\n\n.active-viewtype {\n  background-color: #666; }\n\n.active-viewtype p {\n    color: white; }\n\n.inactive-viewtype {\n  background-color: #f1f1f1; }\n\n.inactive-viewtype p {\n    color: #252525; }\n\n.request-item-footer {\n  padding-bottom: 3vh; }\n\n.request-item-footer-controls {\n  display: flex; }\n\n.request-item-footer-controls div {\n    flex: 1;\n    padding: 0 8px; }\n\n@media only screen and (min-width: 641px) {\n  .request-item-footer-controls div ion-button {\n    font-size: .8em; } }\n\n@media only screen and (max-width: 640px) {\n  .request-item-footer-controls div ion-button {\n    font-size: .6em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWxpc3QvcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUZqQjtJQUlRLE9BQU8sRUFBQTs7QUFKZjtNQU1ZLFNBQVM7TUFDVCxhQUFhO01BQ2IsWUFBWSxFQUFBOztBQUt4QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFMbkI7SUFPUSxXQUFXLEVBQUE7O0FBUG5CO0lBV1EsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRDFCO0lBR1EsWUFBWSxFQUFBOztBQUlwQjtFQUNJLHlCQUF5QixFQUFBOztBQUQ3QjtJQUdRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBRGpCO0lBR1EsT0FBTztJQUNQLGNBQWMsRUFBQTs7QUFJdEI7RUFDSTtJQUdZLGVBQWUsRUFBQSxFQUNsQjs7QUFLYjtFQUNJO0lBR1ksZUFBZSxFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWxpc3QvcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbiNyZXF1ZXN0LWxpc3QtbmV3cmVxdWVzdCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucmVxdWVzdC1pdGVtIHtcbiAgICBtYXJnaW46IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2IzYjNiMztcbn1cblxuLnJlcXVlc3QtaXRlbS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzgwZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yZXF1ZXN0LWl0ZW0taGVhZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yZXF1ZXN0LWl0ZW0taW5uZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5yZXF1ZXN0LWl0ZW0tc3ViaGVhZGVyIHtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnJlcXVlc3QtaXRlbS10eHRjb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuI3JlcXVlc3QtbGlzdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyZXF1ZXN0LWxpc3Qtdmlld3R5cGUge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG59XG5cbiNyZXF1ZXN0LWJ0bi1saXN0dmlldywgI3JlcXVlc3QtYnRuLWdyaWR2aWV3IHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA0cHg7XG4gICAgfVxufVxuXG4uYWN0aXZlLXZpZXd0eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uaW5hY3RpdmUtdmlld3R5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xuICAgIH1cbn1cblxuLnJlcXVlc3QtaXRlbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzdmg7XG59XG5cbi5yZXF1ZXN0LWl0ZW0tZm9vdGVyLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkge1xuICAgIC5yZXF1ZXN0LWl0ZW0tZm9vdGVyLWNvbnRyb2xzIHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5yZXF1ZXN0LWl0ZW0tZm9vdGVyLWNvbnRyb2xzIHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/user/request-list/request-list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.ts ***!
  \**************************************************************/
/*! exports provided: RequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListPage", function() { return RequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../popover/filter/filter.page */ "./src/app/pages/popover/filter/filter.page.ts");
/* harmony import */ var _modal_feedback_feedback_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/feedback/feedback.page */ "./src/app/pages/modal/feedback/feedback.page.ts");








var RequestListPage = /** @class */ (function () {
    function RequestListPage(apiService, loadingCtrl, altCtrl, toastService, navCtrl, popOver, modalCtrl) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.altCtrl = altCtrl;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.popOver = popOver;
        this.modalCtrl = modalCtrl;
        this.arrAllRequests = [];
        this.arrMyRequests = [];
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_4__["STATUS"];
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES"];
        this.selectedView = 0;
        this.gridcount = 12;
        this.arrFilterOpts = [
            "Category",
            "Date",
            "Status",
            "Including Draft",
        ];
        this.filter = null;
    }
    RequestListPage.prototype.ngOnInit = function () {
    };
    RequestListPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Init Variables
     */
    RequestListPage.prototype.initPage = function () {
        this.getRequests();
    };
    /**
     * Get My Requests
     * @returns array of request
     */
    RequestListPage.prototype.getRequests = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid, dataLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.arrMyRequests = [];
                        this.arrAllRequests = [];
                        uid = localStorage.getItem("uid");
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        dataLoader = _a.sent();
                        return [4 /*yield*/, dataLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.getRequest(uid)
                            .subscribe(function (res) {
                            _this.arrMyRequests = [];
                            if (res.data) {
                                console.log(res.data);
                                _this.arrAllRequests = res.data;
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].status !== 0) {
                                        _this.arrMyRequests.push(res.data[i]);
                                    }
                                }
                            }
                            dataLoader.dismiss();
                            console.log("Result", _this.arrMyRequests);
                        }, function (error) {
                            console.log(error);
                            dataLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Change viewtype
     * @param viewtype number
     * 0: listview
     * 1: gridview
     */
    RequestListPage.prototype.onClickViewType = function (viewtype) {
        this.selectedView = viewtype;
        if (this.selectedView == 0) {
            this.gridcount = 12;
        }
        else {
            this.gridcount = 6;
        }
    };
    RequestListPage.prototype.onClickFilterBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filterPopover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popOver.create({
                            component: _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"],
                            event: event,
                            componentProps: { 'filterOpts': this.arrFilterOpts }
                        })];
                    case 1:
                        filterPopover = _a.sent();
                        return [4 /*yield*/, filterPopover.present()];
                    case 2:
                        _a.sent();
                        filterPopover.onDidDismiss()
                            .then(function (data) {
                            _this.filter = data.data;
                            if (_this.filter) {
                                _this.filterRequests();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestListPage.prototype.showHideDrafts = function (option) {
        if (option) {
            this.arrMyRequests = this.arrAllRequests;
        }
        else {
            for (var i = 0; i < this.arrAllRequests.length; i++) {
                if (this.arrAllRequests[i].status !== 0) {
                    this.arrMyRequests.push(this.arrAllRequests[i]);
                }
            }
        }
    };
    RequestListPage.prototype.filterRequests = function () {
        this.arrMyRequests = [];
        if (this.filter == 0) {
            this.showHideDrafts(false);
            this.arrMyRequests.sort(function (a, b) { return a.category - b.category; });
        }
        else if (this.filter == 1) {
            this.showHideDrafts(false);
            this.arrMyRequests.sort(function (a, b) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); });
        }
        else if (this.filter == 2) {
            this.showHideDrafts(false);
            this.arrMyRequests.sort(function (a, b) { return a.status - b.status; });
        }
        else {
            this.showHideDrafts(true);
        }
    };
    /**
     * navigate to new request page
     */
    RequestListPage.prototype.onClickNewRequest = function () {
        this.navCtrl.navigateForward('/menu/expertsreview/null');
    };
    /**
     * Ask user whether close the request or not
     * @param index: index of request array
     * @returns null
     */
    RequestListPage.prototype.onClickCloseRequest = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var closeAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Close Request?",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.closeRequest(_this.arrMyRequests[index]._id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        closeAlt = _a.sent();
                        return [4 /*yield*/, closeAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete Request
     * @param requestId
     * @returns null
     */
    RequestListPage.prototype.closeRequest = function (requestId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var closeLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        closeLoader = _a.sent();
                        return [4 /*yield*/, closeLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.closeRequest(requestId)
                            .subscribe(function () {
                            closeLoader.dismiss();
                            _this.toastService.showToast("Request is closed!");
                            _this.getRequests();
                        }, function (error) {
                            console.log(error);
                            closeLoader.dismiss();
                            _this.toastService.showToast("Close request is failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param actionId
     * 0: complete the request: go to new request page and complete the step
     * 1: viewdetails: view request details
     * 2: take action: provide input
     * 3: need clarification
     * 4: close request: close request completely
     * 5: not satisfied: close the request and provide the bad review
     */
    RequestListPage.prototype.onClickRequestAction = function (actionId, arrRequestIndex) {
        var _this = this;
        switch (actionId) {
            case 0:
                this.navCtrl.navigateForward('/menu/expertsreview/' + this.arrMyRequests[arrRequestIndex]._id);
                break;
            case 4:
                this.showFeedbackModal(arrRequestIndex);
                break;
            case 5:
                this.showFeedbackModal(arrRequestIndex);
                break;
            case 6:
                this.apiService.updateRequestStatus(this.arrMyRequests[arrRequestIndex]._id, 1)
                    .subscribe(function () {
                    _this.toastService.showToast("The Request is re-opened");
                }, function (error) {
                    console.log(error);
                    _this.toastService.showToast("Operation failed!");
                });
                break;
            default:
                break;
        }
    };
    /**
     * Show Feedbackmodal
     * @param arrIndex arrMyRequests array index
     */
    RequestListPage.prototype.showFeedbackModal = function (arrIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var feedbackModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.arrMyRequests[arrIndex]);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_feedback_feedback_page__WEBPACK_IMPORTED_MODULE_7__["FeedbackPage"],
                                cssClass: "info-modal",
                                componentProps: {
                                    expertId: this.arrMyRequests[arrIndex].expert,
                                    requestId: this.arrMyRequests[arrIndex]._id
                                },
                                backdropDismiss: false
                            })];
                    case 1:
                        feedbackModal = _a.sent();
                        return [4 /*yield*/, feedbackModal.present()];
                    case 2:
                        _a.sent();
                        feedbackModal.onDidDismiss()
                            .then(function (data) {
                            if (data.data == 0) {
                                _this.toastService.showToast("Successfully placed your feedback!");
                                _this.getRequests();
                            }
                            else {
                                _this.toastService.showToast("Operation failed!");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * View All uploaded doc by user
     */
    RequestListPage.prototype.onClickMyDocuments = function () {
        this.navCtrl.navigateForward('/mydocuments');
    };
    /**
     * Back to landing page
     */
    RequestListPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    RequestListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.page.html */ "./src/app/pages/user/request-list/request-list.page.html"),
            styles: [__webpack_require__(/*! ./request-list.page.scss */ "./src/app/pages/user/request-list/request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], RequestListPage);
    return RequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-request-list-request-list-module.js.map