(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-requests-admin-requests-module"],{

/***/ "./src/app/pages/admin/admin-requests/admin-requests.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminRequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRequestsPageModule", function() { return AdminRequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-requests.page */ "./src/app/pages/admin/admin-requests/admin-requests.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _admin_requests_page__WEBPACK_IMPORTED_MODULE_6__["AdminRequestsPage"]
    }
];
var AdminRequestsPageModule = /** @class */ (function () {
    function AdminRequestsPageModule() {
    }
    AdminRequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_requests_page__WEBPACK_IMPORTED_MODULE_6__["AdminRequestsPage"]]
        })
    ], AdminRequestsPageModule);
    return AdminRequestsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>All Requests</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div id=\"admin-requests-list\">\n      <div *ngFor=\"let request of arrRequests; let i = index;\" class=\"admin-requests-item\">\n        <div class=\"admin-request-item-header\">\n          <p>\n            {{request._id}}\n          </p>\n        </div>\n        <div class=\"admin-request-item-content\">\n          <p>\n            Status: {{arrStatus[request.status]}}\n          </p>\n          <p>\n            Comments: {{request.comments}}\n          </p>\n          <p>\n            Queries: {{request.queries}}\n          </p>\n          <p>\n            Requestor: \n          </p>\n          <ion-item lines=\"none\" (click)=\"onToggleViewAttachment(i)\">\n            <ion-icon *ngIf=\"!request.expanded\" name=\"arrow-dropright\"></ion-icon>\n            <ion-icon *ngIf=\"request.expanded\" name=\"arrow-dropdown\"></ion-icon>\n            <ion-label>View Attachments</ion-label>\n          </ion-item>\n          <ion-list *ngIf=\"request.expanded\" no-padding>\n            <div *ngFor=\"let file of request.files\">\n              <p (click)=\"onClickAttachments(file.filename)\">\n                {{file.filename}}\n              </p>\n            </div>\n          </ion-list>\n          <div class=\"admin-requests-controllers-container\">\n            <p (click)=\"onClickSentToRequestor(request)\">\n              Send To Requestor\n            </p>\n            <p (click)=\"onClickBackToReviewer(request)\">\n              Back To Reviewer\n            </p>\n            <p (click)=\"onClickAbort(request)\">\n              Abort Request\n            </p>\n          </div>\n        </div>\n        <div class=\"admin-request-item-footer\">\n          <p>\n            Created At: {{request.createdAt | doctime}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar (click)=\"onClickAllCases()\">\n      <ion-title>All Cases</ion-title>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#admin-requests-list {\n  margin: 16px; }\n\n.admin-requests-item {\n  box-shadow: 0 2px 4px #b3b3b3;\n  margin-bottom: 2vh; }\n\n.admin-request-item-header {\n  background-color: #3780ff; }\n\n.admin-request-item-header p {\n    margin: 0;\n    padding: 16px;\n    color: white;\n    text-align: left; }\n\n.admin-request-item-content {\n  margin: 16px; }\n\n.admin-request-item-footer {\n  padding: 0 16px 16px 16px; }\n\n.admin-request-item-footer p {\n    margin: 0;\n    font-size: .8em;\n    text-align: right; }\n\n.admin-requests-controllers-container {\n  display: flex; }\n\n.admin-requests-controllers-container p {\n    flex: 1;\n    text-align: center;\n    font-size: .8em;\n    color: #144abe;\n    text-decoration: underline;\n    cursor: pointer; }\n\nion-list {\n  margin-left: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcmVxdWVzdHMvYWRtaW4tcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRDdCO0lBR1EsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxhQUFhLEVBQUE7O0FBRGpCO0lBR1EsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXJlcXVlc3RzL2FkbWluLXJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbiNhZG1pbi1yZXF1ZXN0cy1saXN0IHtcbiAgICBtYXJnaW46IDE2cHg7XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1pdGVtIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggI2IzYjNiMztcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5hZG1pbi1yZXF1ZXN0LWl0ZW0taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbi5hZG1pbi1yZXF1ZXN0LWl0ZW0tY29udGVudCB7XG4gICAgbWFyZ2luOiAxNnB4O1xufVxuXG4uYWRtaW4tcmVxdWVzdC1pdGVtLWZvb3RlciB7XG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHggMTZweDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cblxuLmFkbWluLXJlcXVlc3RzLWNvbnRyb2xsZXJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGNvbG9yOiByZ2IoMjAsIDc0LCAxOTApO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.ts ***!
  \*******************************************************************/
/*! exports provided: AdminRequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRequestsPage", function() { return AdminRequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");








var AdminRequestsPage = /** @class */ (function () {
    function AdminRequestsPage(navCtrl, loadingCtrl, apiService, platform, file, transfer) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.arrRequests = [];
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"];
    }
    AdminRequestsPage.prototype.ngOnInit = function () {
    };
    AdminRequestsPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    AdminRequestsPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..."
                        })];
                    case 1:
                        requestLoader = _a.sent();
                        return [4 /*yield*/, requestLoader.present()];
                    case 2:
                        _a.sent();
                        this.arrRequests = [];
                        this.apiService.getAllRequests()
                            .subscribe(function (res) {
                            if (res.data) {
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].status == 0) {
                                        _this.arrRequests.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false }));
                                    }
                                }
                            }
                            requestLoader.dismiss();
                            console.log(_this.arrRequests);
                        }, function (error) {
                            console.log(error);
                            requestLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminRequestsPage.prototype.onToggleViewAttachment = function (i) {
        this.arrRequests[i].expanded = !this.arrRequests[i].expanded;
    };
    AdminRequestsPage.prototype.onClickAttachments = function (filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isMobile, fileTransfer, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isMobile = this.platform.is("mobile");
                        if (!isMobile) return [3 /*break*/, 5];
                        fileTransfer = this.transfer.create();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fileTransfer.download(_constants__WEBPACK_IMPORTED_MODULE_7__["SERVERASSETS"] + filename, this.file.externalRootDirectory + 'Download/' + filename)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.apiService.downloadFile(filename)
                            .subscribe(function (data) {
                            console.log(data);
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, filename);
                        }, function (error) {
                            console.log(error);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Assign to expert
     * @param request Request Object
     */
    AdminRequestsPage.prototype.onClickSentToRequestor = function (request) {
        if (request.status == 2) {
            alert("This Request is already closed!");
            return;
        }
        console.log(request);
    };
    /**
     * Request is ignored
     * @param request Request Object
     */
    AdminRequestsPage.prototype.onClickBackToReviewer = function (request) {
        if (request.status == 2) {
            alert("This Request is already closed!");
            return;
        }
        console.log(request);
    };
    /**
     * Abort Request
     * @param request
     */
    AdminRequestsPage.prototype.onClickAbort = function (request) {
        if (request.status == 2) {
            alert("This Request is already closed!");
            return;
        }
        console.log(request);
    };
    AdminRequestsPage.prototype.onClickAllCases = function () {
        this.navCtrl.navigateForward('/menu/adminallcases');
    };
    AdminRequestsPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    AdminRequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-requests',
            template: __webpack_require__(/*! ./admin-requests.page.html */ "./src/app/pages/admin/admin-requests/admin-requests.page.html"),
            styles: [__webpack_require__(/*! ./admin-requests.page.scss */ "./src/app/pages/admin/admin-requests/admin-requests.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"]])
    ], AdminRequestsPage);
    return AdminRequestsPage;
}());



/***/ }),

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
    "Rheumatology",
    "I don't know"
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
var BACKENDURL = 'http://192.168.0.108:4200/api/v1';
/**
 * uploaded file path on backend server
 */
var SERVERASSETS = 'http://192.168.0.108:4200/attachments/';
/**
 * Request status
 */
var STATUS = [
    "Draft",
    "In Progress",
    "Provide Input",
    "Completed",
    "Closed"
    // "Pending",
    // "In Progress",
    // "Closed"
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
     * Get users by their role
     * @param role user role
     * 0: normal user
     * 1: expert
     * 2: admin
     */
    ApiService.prototype.getUsers = function (role) {
        if (role === void 0) { role = ""; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/getUsers", { role: role }, { headers: headers });
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
    /**
     * Assign request to expert
     * @param reqdata request data
     */
    ApiService.prototype.requestSetExpert = function (reqdata) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/setExpert", reqdata, { headers: headers });
    };
    ApiService.prototype.getRequestById = function (reqId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/getRequestById", { reqId: reqId }, { headers: headers });
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
    /**
     * Update Request Status
     * @param id request id
     * @param status request status
     */
    ApiService.prototype.updateRequestStatus = function (id, status) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/updateStatus", { id: id, status: status }, { headers: headers });
    };
    /**
     * Provide user's feedback to expert
     * @param feedback User Feedback: Object
     */
    ApiService.prototype.provideFeedback = function (feedback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/review/provideReview", { feedback: feedback }, { headers: headers });
    };
    /**
     * Provide expert's review for Request
     * @param expertComment Expert's Comment: Object
     */
    ApiService.prototype.provideExpertComment = function (expertComment) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/expert/provideExpertComment", { comment: expertComment }, { headers: headers });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-requests-admin-requests-module.js.map