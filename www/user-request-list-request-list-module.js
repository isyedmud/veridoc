(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-request-list-request-list-module"],{

/***/ "./src/app/pages/constants.ts":
/*!************************************!*\
  !*** ./src/app/pages/constants.ts ***!
  \************************************/
/*! exports provided: CATEGORIES, PAYMENTOPTIONS, CONTACTINFO, BACKENDURL, SERVERASSETS, STATUS, TERMSANDCONDITIONSTXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTOPTIONS", function() { return PAYMENTOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTINFO", function() { return CONTACTINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKENDURL", function() { return BACKENDURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERASSETS", function() { return SERVERASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMSANDCONDITIONSTXT", function() { return TERMSANDCONDITIONSTXT; });
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
/**
 * Payment option List
 */
var PAYMENTOPTIONS = [
    "Debit Card",
    "Credit Card",
    "Paypal",
    "Paytm",
    "Internet Banking"
];
/**
 * Contact info for Veridoc
 */
var CONTACTINFO = {
    email: "test@testemail.com",
    number: "+123456789"
};
/**
 * backend server url
 */
var BACKENDURL = 'http://192.168.0.104:4200/api/v1';
/**
 * uploaded file path on backend server
 */
var SERVERASSETS = 'http://192.168.0.104:4200/attachments/';
/**
 * Request status
 */
var STATUS = [
    "Pending",
    "In Progress",
    "Closed"
];
/**
 * Terms and conditions text
 */
var TERMSANDCONDITIONSTXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
/**
 * 0: open
 * 1: in progress
 * 2: aborted
 * 3: closed
 * 4: withdrawn
 */ 


/***/ }),

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

/***/ "./src/app/pages/user/request-list/request-list.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"request-list-newrequest\">\n    <ion-button (click)=\"onClickNewRequest()\">Get Experts Review</ion-button>\n  </div>\n\n  <ion-list no-padding>\n    <div *ngFor=\"let request of arrMyRequests; let i = index;\" class=\"request-item\">\n      <div class=\"request-item-header\">\n        <div>\n          <p>\n            {{arrStatus[request.status]}}\n          </p>\n        </div>\n        <div>\n          <ion-buttons>\n            <ion-button fill=\"clear\" color=\"white\" *ngIf=\"request.status==1 || request.status==0\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" color=\"white\" (click)=\"onClickCloseRequest(i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </div>\n      <div class=\"request-item-inner\">\n        <div>\n          <p class=\"request-item-subheader\">\n            Query\n          </p>\n          <p class=\"request-item-txtcontent\">\n            {{request.queries}}\n          </p>\n        </div>\n        <div>\n          <p class=\"request-item-subheader\">\n            Comment\n          </p>\n          <p class=\"request-item-txtcontent\">\n            {{request.comments}}\n          </p>\n        </div>\n        <div>\n\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)=\"onClickMyDocuments()\">\n    <ion-title>My Documents</ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/user/request-list/request-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user/request-list/request-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#request-list-newrequest {\n  width: 100%;\n  padding: 16px 16px 0 16px;\n  text-align: right; }\n\n.request-item {\n  margin: 16px;\n  box-shadow: 0 2px 4px #b3b3b3; }\n\n.request-item-header {\n  background-color: #3780ff;\n  display: flex; }\n\n.request-item-header div {\n    flex: 1; }\n\n.request-item-header div p {\n      margin: 0;\n      padding: 16px;\n      color: white; }\n\n.request-item-header > div:nth-child(2) {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n\n.request-item-inner {\n  padding: 16px; }\n\n.request-item-subheader {\n  color: #656565; }\n\n.request-item-txtcontent {\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWxpc3QvcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLFdBQVc7RUFFWCx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBRmpCO0lBSVEsT0FBTyxFQUFBOztBQUpmO01BTVksU0FBUztNQUNULGFBQWE7TUFDYixZQUFZLEVBQUE7O0FBS3hCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWxpc3QvcmVxdWVzdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbiNyZXF1ZXN0LWxpc3QtbmV3cmVxdWVzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXRvcDogMnZoO1xuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yZXF1ZXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2IzYjNiMztcbn1cblxuLnJlcXVlc3QtaXRlbS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzgwZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yZXF1ZXN0LWl0ZW0taGVhZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yZXF1ZXN0LWl0ZW0taW5uZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5yZXF1ZXN0LWl0ZW0tc3ViaGVhZGVyIHtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnJlcXVlc3QtaXRlbS10eHRjb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuIl19 */"

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
            template: __webpack_require__(/*! ./request-list.page.html */ "./src/app/pages/user/request-list/request-list.page.html"),
            styles: [__webpack_require__(/*! ./request-list.page.scss */ "./src/app/pages/user/request-list/request-list.page.scss")]
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
    ApiService.prototype.getAllUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/getAllUser", { headers: headers });
    };
    ApiService.prototype.acceptUser = function (uid) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/acceptUser", { uid: uid }, { headers: headers });
    };
    ApiService.prototype.deleteAccount = function (uid, role) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/deleteUser", { uid: uid, role: role }, { headers: headers });
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
    /**
     * Download File from server
     * @param filename filename to download
     */
    ApiService.prototype.downloadFile = function (filename) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/downloadAttachment", { filename: filename }, { responseType: 'blob', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json') });
    };
    ApiService.prototype.processPayment = function (requestId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/processPayment", { requestId: requestId }, { headers: headers });
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
//# sourceMappingURL=user-request-list-request-list-module.js.map