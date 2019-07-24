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
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









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
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClickFilterBtn()\">\n        <ion-icon src=\"assets/icons/icon-custom-filter.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"request-list-header\">\n    <div id=\"request-list-viewtype\" *ngIf=\"!isMobile\">\n      <div id=\"request-btn-listview\" [class]=\"selectedView==0?'active-viewtype': 'inactive-viewtype'\" (click)=\"onClickViewType(0)\">\n        <img [src]=\"selectedView==0?'assets/icons/icon-list-active.svg':'assets/icons/icon-list-inactive.svg'\" />\n        <p>\n          List\n        </p>\n      </div>\n      <div id=\"request-btn-gridview\" [class]=\"selectedView==1?'active-viewtype': 'inactive-viewtype'\" (click)=\"onClickViewType(1)\">\n        <img [src]=\"selectedView==1?'assets/icons/icon-grid-active.svg':'assets/icons/icon-grid-inactive.svg'\" />\n        <p>\n          Grid\n        </p>\n      </div>      \n    </div>\n    <div id=\"request-list-newrequest\">\n      <ion-button (click)=\"onClickNewRequest()\">Get Experts Review</ion-button>\n    </div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col [size]=\"gridcount\" *ngFor=\"let request of arrMyRequests; let i = index;\">\n        <div class=\"request-item\">\n          <div class=\"request-item-header\">\n            <p>\n              {{arrStatus[request.status]}}\n            </p>\n            <div *ngIf=\"request.status==0\">\n              <span (click)=\"onClickCompleteRequest()\">\n                Complete your request\n              </span>\n            </div>\n          </div>\n          <div class=\"request-item-body\">\n            <p>\n              <b>Requested Date:</b> {{request.updatedAt | doctime: false}}\n            </p>\n            <p>\n              <b>Category:</b> {{arrCategories[request.category]}}\n            </p>\n            <p>\n              <b>Requestor:</b> {{request.user.username}}\n            </p>\n          </div>\n          <div class=\"request-item-footer\">\n            <div *ngIf=\"request.status!==0\">\n              <ion-button color=\"orange\" (click)=\"onClickViewDetailRequest(request._id)\">\n                View Detail\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/request-list/request-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#request-list-newrequest {\n  flex: 1;\n  width: 100%;\n  padding: 16px 16px 0 16px;\n  text-align: right; }\n\n#request-list-header {\n  display: flex; }\n\n#request-list-viewtype {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  padding: 16px 16px 0 16px; }\n\n#request-btn-listview, #request-btn-gridview {\n  padding: 10px 12px;\n  display: flex;\n  justify-content: center;\n  margin-left: 1px;\n  cursor: pointer; }\n\n#request-btn-listview img, #request-btn-gridview img {\n    width: 20px; }\n\n#request-btn-listview p, #request-btn-gridview p {\n    margin: 0 0 0 4px; }\n\n.active-viewtype {\n  background-color: #666; }\n\n.active-viewtype p {\n    color: white; }\n\n.inactive-viewtype {\n  background-color: #cecece; }\n\n.inactive-viewtype p {\n    color: #252525; }\n\n.request-item {\n  background-color: #fff;\n  box-shadow: 0 0 8px #bdbdbd;\n  border-radius: 4px; }\n\n.request-item-header {\n  display: flex;\n  padding: 8px 16px;\n  background-color: #eaeaea;\n  align-items: center; }\n\n.request-item-header p {\n    flex: 1;\n    margin: 0;\n    color: #272727;\n    padding: 4px 0; }\n\n.request-item-header div {\n    flex: 1;\n    text-align: right; }\n\n.request-item-header div span {\n      padding: 6px;\n      background-color: #ff6328;\n      color: white;\n      border-radius: 4px;\n      box-shadow: 0 2px 2px #a9a9a9; }\n\n.request-item-body {\n  padding: 16px; }\n\n.request-item-body p {\n    margin: 4px 0;\n    color: #4e4e4e; }\n\n.request-item-footer div {\n  text-align: right;\n  padding: 0 16px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWxpc3QvcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQVExQjtFQUNJLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUxuQjtJQU9RLFdBQVcsRUFBQTs7QUFQbkI7SUFXUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxzQkFBc0IsRUFBQTs7QUFEMUI7SUFHUSxZQUFZLEVBQUE7O0FBSXBCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRDdCO0lBR1EsY0FBYyxFQUFBOztBQUl0QjtFQUNJLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBSnZCO0lBTVEsT0FBTztJQUNQLFNBQVM7SUFDVCxjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQVR0QjtJQWFRLE9BQU87SUFDUCxpQkFBaUIsRUFBQTs7QUFkekI7TUFnQlksWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLDZCQUE2QixFQUFBOztBQUt6QztFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQUl0QjtFQUVRLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuLy8gfVxuXG4jcmVxdWVzdC1saXN0LW5ld3JlcXVlc3Qge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3JlcXVlc3QtbGlzdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyZXF1ZXN0LWxpc3Qtdmlld3R5cGUge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG59XG5cbiNyZXF1ZXN0LWJ0bi1saXN0dmlldywgI3JlcXVlc3QtYnRuLWdyaWR2aWV3IHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA0cHg7XG4gICAgfVxufVxuXG4uYWN0aXZlLXZpZXd0eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uaW5hY3RpdmUtdmlld3R5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xuICAgIH1cbn1cblxuLnJlcXVlc3QtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNiZGJkYmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucmVxdWVzdC1pdGVtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMyNzI3Mjc7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzMjg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggI2E5YTlhOTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJlcXVlc3QtaXRlbS1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBjb2xvcjogIzRlNGU0ZTtcbiAgICB9XG59XG5cbi5yZXF1ZXN0LWl0ZW0tZm9vdGVyIHtcbiAgICBkaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");









var RequestListPage = /** @class */ (function () {
    function RequestListPage(apiService, loadingCtrl, toastService, navCtrl, popOver, modalCtrl, platform, file, transfer) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.popOver = popOver;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.isMobile = false;
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
        this.isMobile = this.platform.is("mobile");
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
                                    _this.arrMyRequests.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false, expandattachment: false }));
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
    RequestListPage.prototype.onClickRequest = function (index) {
        this.arrMyRequests[index].expanded = !this.arrMyRequests[index].expanded;
    };
    /**
     * View request Detail
     * @param reqId Request Id
     */
    RequestListPage.prototype.onClickViewDetailRequest = function (reqId) {
        this.navCtrl.navigateForward('/request-detail/' + reqId + "/0");
    };
    RequestListPage.prototype.onClickCompleteRequest = function () {
        this.navCtrl.navigateForward('/menu/expertsreview/null');
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
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"]])
    ], RequestListPage);
    return RequestListPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-request-list-request-list-module.js.map