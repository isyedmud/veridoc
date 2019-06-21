(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mydocuments-mydocuments-module"],{

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

/***/ "./src/app/pages/mydocuments/mydocuments.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mydocuments/mydocuments.module.ts ***!
  \*********************************************************/
/*! exports provided: MydocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocumentsPageModule", function() { return MydocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _mydocuments_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mydocuments.page */ "./src/app/pages/mydocuments/mydocuments.page.ts");








var routes = [
    {
        path: '',
        component: _mydocuments_page__WEBPACK_IMPORTED_MODULE_7__["MydocumentsPage"]
    }
];
var MydocumentsPageModule = /** @class */ (function () {
    function MydocumentsPageModule() {
    }
    MydocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mydocuments_page__WEBPACK_IMPORTED_MODULE_7__["MydocumentsPage"]]
        })
    ], MydocumentsPageModule);
    return MydocumentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mydocuments/mydocuments.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/mydocuments/mydocuments.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Documents</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"mydocuments-list-container\">\n    <ion-list>\n      <div *ngFor=\"let request of arrMyRequests\" class=\"mydocuments-request-item\">\n        <div class=\"mydocuments-request-header\">\n          <p>\n            RequestId: {{request._id}}\n          </p>\n        </div>\n        <div class=\"mydocuments-request-contents\">\n          <ng-container *ngIf=\"request.files\">\n            <div *ngFor=\"let file of request.files\">\n              <img *ngIf=\"file.type!='pdf'\" class=\"mydocuments-request-contents-image\" [src]=\"serverAssetsPath + file.filename\" (click)=\"onClickAttachment(file.filename)\"/>\n              <img *ngIf=\"file.type=='pdf'\" class=\"mydocuments-request-contents-document\" src=\"assets/icons/icon-documents.svg\" (click)=\"onClickAttachment(file.filename)\"/>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"mydocuments-request-footer\">\n          <p>\n            Created At: {{request.createdAt | doctime}}\n          </p>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mydocuments/mydocuments.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/mydocuments/mydocuments.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mydocuments-request-item {\n  margin: 16px 16px 3vh 16px;\n  box-shadow: 0 0 8px #c7c7c7; }\n\n.mydocuments-request-header {\n  background-color: #3780ff; }\n\n.mydocuments-request-header p {\n    margin: 0;\n    padding: 16px;\n    color: white; }\n\n.mydocuments-request-contents {\n  padding: 16px; }\n\n.mydocuments-request-contents-image {\n  width: 200px;\n  margin-bottom: 2vh; }\n\n.mydocuments-request-contents-document {\n  margin-bottom: 2vh; }\n\n.mydocuments-request-footer p {\n  margin: 0;\n  padding: 16px;\n  text-align: right;\n  font-size: .9em;\n  color: #696969; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbXlkb2N1bWVudHMvbXlkb2N1bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCO0VBQzFCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHlCQUF5QixFQUFBOztBQUQ3QjtJQUdRLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWSxFQUFBOztBQUlwQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRVEsU0FBUztFQUNULGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215ZG9jdW1lbnRzL215ZG9jdW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWRvY3VtZW50cy1yZXF1ZXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDN2aCAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2M3YzdjNztcbn1cblxuLm15ZG9jdW1lbnRzLXJlcXVlc3QtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5teWRvY3VtZW50cy1yZXF1ZXN0LWNvbnRlbnRzIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubXlkb2N1bWVudHMtcmVxdWVzdC1jb250ZW50cy1pbWFnZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLm15ZG9jdW1lbnRzLXJlcXVlc3QtY29udGVudHMtZG9jdW1lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLm15ZG9jdW1lbnRzLXJlcXVlc3QtZm9vdGVyIHtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBjb2xvcjogIzY5Njk2OTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mydocuments/mydocuments.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mydocuments/mydocuments.page.ts ***!
  \*******************************************************/
/*! exports provided: MydocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocumentsPage", function() { return MydocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");





var MydocumentsPage = /** @class */ (function () {
    function MydocumentsPage(navCtrl, apiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.arrMyRequests = [];
        this.serverAssetsPath = _constants__WEBPACK_IMPORTED_MODULE_4__["SERVERASSETS"];
    }
    MydocumentsPage.prototype.ngOnInit = function () {
    };
    MydocumentsPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    MydocumentsPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestLoader, uid;
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
                        try {
                            uid = localStorage.getItem("uid");
                            this.apiService.getRequest(uid)
                                .subscribe(function (res) {
                                _this.arrMyRequests = res.data;
                                console.log(_this.arrMyRequests);
                                requestLoader.dismiss();
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
    /**
     * View Attachment file
     * @param path file path
     */
    MydocumentsPage.prototype.onClickAttachment = function (path) {
        window.open(this.serverAssetsPath + path, '_blank');
    };
    MydocumentsPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/request-list');
    };
    MydocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mydocuments',
            template: __webpack_require__(/*! ./mydocuments.page.html */ "./src/app/pages/mydocuments/mydocuments.page.html"),
            styles: [__webpack_require__(/*! ./mydocuments.page.scss */ "./src/app/pages/mydocuments/mydocuments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MydocumentsPage);
    return MydocumentsPage;
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



/***/ })

}]);
//# sourceMappingURL=pages-mydocuments-mydocuments-module.js.map