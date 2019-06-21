(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-list-request-list-module"],{

/***/ "./src/app/pages/constants.ts":
/*!************************************!*\
  !*** ./src/app/pages/constants.ts ***!
  \************************************/
/*! exports provided: CATEGORIES, PAYMENTOPTIONS, CONTACTINFO, BACKENDURL, SERVERASSETS, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTOPTIONS", function() { return PAYMENTOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTINFO", function() { return CONTACTINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKENDURL", function() { return BACKENDURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERASSETS", function() { return SERVERASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
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
var BACKENDURL = 'http://192.168.0.107:4200/api/v1';
var SERVERASSETS = 'http://192.168.0.107:4200/attachments/';
var STATUS = [
    "Pending",
    "In Progress",
    "Closed"
];


/***/ }),

/***/ "./src/app/pages/request-list/request-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _request_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-list.page */ "./src/app/pages/request-list/request-list.page.ts");







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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_list_page__WEBPACK_IMPORTED_MODULE_6__["RequestListPage"]]
        })
    ], RequestListPageModule);
    return RequestListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"request-list-newrequest\">\n    <ion-button (click)=\"onClickNewRequest()\">Get Experts Review</ion-button>\n  </div>\n\n  <ion-list no-padding>\n    <div *ngFor=\"let request of arrMyRequests; let i = index;\" class=\"request-item\">\n      <div class=\"request-item-header\">\n        <div>\n          <p>\n            {{arrStatus[request.status]}}\n          </p>\n        </div>\n        <div>\n          <ion-buttons>\n            <ion-button fill=\"clear\" color=\"white\" *ngIf=\"request.status==1 || request.status==0\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" color=\"white\" (click)=\"onClickCloseRequest(i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </div>\n      <div class=\"request-item-inner\">\n        <div>\n          <p class=\"request-item-subheader\">\n            Query\n          </p>\n          <p class=\"request-item-txtcontent\">\n            {{request.queries}}\n          </p>\n        </div>\n        <div>\n          <p class=\"request-item-subheader\">\n            Comment\n          </p>\n          <p class=\"request-item-txtcontent\">\n            {{request.comments}}\n          </p>\n        </div>\n        <div>\n\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)=\"onClickMyDocuments()\">\n    <ion-title>My Documents</ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#request-list-newrequest {\n  width: 100%;\n  padding: 16px 16px 0 16px;\n  text-align: right; }\n\n.request-item {\n  margin: 16px;\n  box-shadow: 0 2px 4px #b3b3b3; }\n\n.request-item-header {\n  background-color: #3780ff;\n  display: flex; }\n\n.request-item-header div {\n    flex: 1; }\n\n.request-item-header div p {\n      margin: 0;\n      padding: 16px;\n      color: white; }\n\n.request-item-header > div:nth-child(2) {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.request-item-inner {\n  padding: 16px; }\n\n.request-item-subheader {\n  color: #656565; }\n\n.request-item-txtcontent {\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvcmVxdWVzdC1saXN0L3JlcXVlc3QtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxXQUFXO0VBRVgseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUZqQjtJQUlRLE9BQU8sRUFBQTs7QUFKZjtNQU1ZLFNBQVM7TUFDVCxhQUFhO01BQ2IsWUFBWSxFQUFBOztBQUt4QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcXVlc3QtbGlzdC9yZXF1ZXN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuI3JlcXVlc3QtbGlzdC1uZXdyZXF1ZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAydmg7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJlcXVlc3QtaXRlbSB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjYjNiM2IzO1xufVxuXG4ucmVxdWVzdC1pdGVtLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ODBmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJlcXVlc3QtaXRlbS1oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnJlcXVlc3QtaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLnJlcXVlc3QtaXRlbS1zdWJoZWFkZXIge1xuICAgIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4ucmVxdWVzdC1pdGVtLXR4dGNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/request-list/request-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/request-list/request-list.page.ts ***!
  \*********************************************************/
/*! exports provided: RequestListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListPage", function() { return RequestListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");






var RequestListPage = /** @class */ (function () {
    function RequestListPage(apiService, loadingCtrl, altCtrl, toastService, navCtrl) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.altCtrl = altCtrl;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.arrMyRequests = [];
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_4__["STATUS"];
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
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].status !== 2) {
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
     * navigate to new request page
     */
    RequestListPage.prototype.onClickNewRequest = function () {
        this.navCtrl.navigateForward('/menu/expertsreview');
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
            template: __webpack_require__(/*! ./request-list.page.html */ "./src/app/pages/request-list/request-list.page.html"),
            styles: [__webpack_require__(/*! ./request-list.page.scss */ "./src/app/pages/request-list/request-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], RequestListPage);
    return RequestListPage;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_pages_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/constants */ "./src/app/pages/constants.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        /**
         * API url from constants
         * @see src/app/pages/constants
         */
        this.apiUrl = src_app_pages_constants__WEBPACK_IMPORTED_MODULE_3__["BACKENDURL"];
    }
    /**
     *
     * @param req
     * @returns observable
     */
    ApiService.prototype.signUp = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/register", req, { headers: headers });
    };
    /**
     *
     * @param credential(email: String, password: String)
     * @returns observable
     */
    ApiService.prototype.login = function (credential) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/login", credential, { headers: headers });
    };
    /**
     * Reset Password
     * @param email: String
     * @returns observable
     */
    ApiService.prototype.resetPassword = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/restPassword", { email: email }, { headers: headers });
    };
    /**
     * Get Profile Info
     * @param uid
     * @returns observable
     */
    ApiService.prototype.getUser = function (uid) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/getUser", { uid: uid }, { headers: headers });
    };
    /**
     * Update User Profile
     * @param user: Object
     * @returns observable
     */
    ApiService.prototype.updateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/updateUser", { user: user }, { headers: headers });
    };
    /**
     * Post Request
     * @param post: Object
     * @returns observable
     */
    ApiService.prototype.postRequest = function (post) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/postRequest", { post: post }, { headers: headers });
    };
    /**
     * Get My Requests (User side)
     * @param uid userid
     * @returns observable
     */
    ApiService.prototype.getRequest = function (uid) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/getRequest", { uid: uid }, { headers: headers });
    };
    /**
     * Get All requests by expertid
     * @param expertId expert id
     */
    ApiService.prototype.getAllRequests = function (expertId) {
        if (expertId === void 0) { expertId = ""; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/getAllRequests", { expertId: expertId }, { headers: headers });
    };
    ApiService.prototype.requestSetExpert = function (reqdata) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/setExpert", reqdata, { headers: headers });
    };
    ApiService.prototype.uploadFiles = function (formData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("enctype", "multipart/form-data");
        return this.http.post(this.apiUrl + "/post/uploadAttachment", formData, { headers: headers }).toPromise();
    };
    ApiService.prototype.downloadFile = function (filename) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/downloadAttachment", { filename: filename }, { responseType: 'blob', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json') });
    };
    /**
     * Close Request
     * @param id request id
     * @returns observable
     */
    ApiService.prototype.closeRequest = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/closeRequest", { id: id }, { headers: headers });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
//# sourceMappingURL=request-list-request-list-module.js.map