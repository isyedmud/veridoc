(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-users-users-module"],{

/***/ "./src/app/pages/admin/users/users.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/admin/users/users.module.ts ***!
  \***************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.page */ "./src/app/pages/admin/users/users.page.ts");








var routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"]
    }
];
var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"]]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/users/users.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/admin/users/users.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>User Management</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list id=\"admin-users-list\">\n    <div *ngFor=\"let user of arrUsers; let i = index\" class=\"admin-users-item\">\n      <div class=\"admin-users-item-header\" (click)=\"onClickExpandUserRow(i)\">\n        <p>\n          {{user.fname + \" \" + user.lname}}\n        </p>\n      </div>\n      <div class=\"admin-users-item-content\" *ngIf=\"user.expanded\">\n        <p [class]=\"user.isverified==true?'admin-users-item-status green-tag': 'admin-users-item-status red-tag'\">\n          {{user.isverified?'Verified': 'Not Verified'}}\n        </p>\n        <p class=\"admin-users-item-content-field\">\n          Username: {{user.username}}\n        </p>\n        <p class=\"admin-users-item-content-field\">\n          Birthday: {{user.birthday}}\n        </p>\n        <p class=\"admin-users-item-content-field\">\n          Email: {{user.email}}\n        </p>\n        <p class=\"admin-users-item-createdat\">\n          Created At: {{user.createdAt | doctime}}\n        </p>\n        <div *ngIf=\"!user.isverified\" class=\"admin-users-item-controller\">\n          <div>\n            <ion-button color=\"success\" (click)=\"onClickAcceptUser(i)\">\n              Accept\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/users/users.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/admin/users/users.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#admin-users-list {\n  padding: 16px; }\n\n.admin-users-item {\n  box-shadow: 0 0 6px #a7a7a7;\n  margin-bottom: 2vh; }\n\n.admin-users-item-header {\n  background-color: #3780ff;\n  cursor: pointer; }\n\n.admin-users-item-header p {\n    margin: 0;\n    padding: 16px;\n    color: white; }\n\n.admin-users-item-content {\n  position: relative;\n  padding: 16px; }\n\n.admin-users-item-content-field {\n  color: #585858;\n  font-size: 1em; }\n\n.admin-users-item-status {\n  position: absolute;\n  margin: 0;\n  right: 16px;\n  top: 32px;\n  font-size: .8em;\n  padding: 4px;\n  border-radius: 4px; }\n\n.green-tag {\n  border: 1px solid #72c63a;\n  color: #72c63a; }\n\n.red-tag {\n  border: 1px solid #ff0000;\n  color: #ff0000; }\n\n.admin-users-item-controller {\n  text-align: center;\n  margin-top: 16px; }\n\n.admin-users-item-createdat {\n  margin: 0;\n  text-align: right;\n  color: #797979;\n  font-size: .8em; }\n\nion-icon {\n  font-size: 1.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvYWRtaW4vdXNlcnMvdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUZuQjtJQUlRLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWSxFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZG1pbi11c2Vycy1saXN0IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uYWRtaW4tdXNlcnMtaXRlbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjYTdhN2E3O1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLmFkbWluLXVzZXJzLWl0ZW0taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uYWRtaW4tdXNlcnMtaXRlbS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmFkbWluLXVzZXJzLWl0ZW0tY29udGVudC1maWVsZCB7XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbi5hZG1pbi11c2Vycy1pdGVtLXN0YXR1cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5ncmVlbi10YWcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MmM2M2E7XG4gICAgY29sb3I6ICM3MmM2M2E7XG59XG5cbi5yZWQtdGFnIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4uYWRtaW4tdXNlcnMtaXRlbS1jb250cm9sbGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmFkbWluLXVzZXJzLWl0ZW0tY3JlYXRlZGF0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/users/users.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/users/users.page.ts ***!
  \*************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");





var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, loadingCtrl, apiService, toastService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.arrUsers = [];
    }
    UsersPage.prototype.ngOnInit = function () {
    };
    UsersPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Init Page
     * Get All Experts
     */
    UsersPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.arrUsers = [];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        userLoader = _a.sent();
                        return [4 /*yield*/, userLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.getAllUsers()
                            .subscribe(function (res) {
                            if (res.data) {
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].role == 1) {
                                        _this.arrUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false }));
                                    }
                                }
                            }
                            userLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            userLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Expand user info cell
     * @param index arrUsers array index
     */
    UsersPage.prototype.onClickExpandUserRow = function (index) {
        this.arrUsers[index].expanded = !this.arrUsers[index].expanded;
    };
    /**
     * Accept user
     * Update isverified field to true on user table
     * @param index arrUsers array index
     */
    UsersPage.prototype.onClickAcceptUser = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var acceptLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        acceptLoader = _a.sent();
                        return [4 /*yield*/, acceptLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.acceptUser(this.arrUsers[index]._id)
                            .subscribe(function (res) {
                            acceptLoader.dismiss();
                            _this.toastService.showToast("User is accepted!");
                            _this.arrUsers[index].isverified = true;
                        }, function (error) {
                            console.log(error);
                            acceptLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.page.html */ "./src/app/pages/admin/users/users.page.html"),
            styles: [__webpack_require__(/*! ./users.page.scss */ "./src/app/pages/admin/users/users.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], UsersPage);
    return UsersPage;
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

/***/ "./src/app/pipes/doctime/doctime.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/doctime/doctime.pipe.ts ***!
  \***********************************************/
/*! exports provided: DoctimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctimePipe", function() { return DoctimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DoctimePipe = /** @class */ (function () {
    function DoctimePipe() {
    }
    DoctimePipe.prototype.transform = function (value) {
        var result = "";
        var d = new Date(value);
        var minVal = d.getMinutes();
        minVal = minVal < 10 ? '0' + minVal : minVal;
        var hourVal = d.getHours();
        var ampm = hourVal >= 12 ? 'pm' : 'am';
        hourVal = hourVal % 12;
        hourVal = hourVal ? hourVal : 12;
        var dayVal = d.getDate();
        var monVal = d.getMonth() + 1;
        var yearVal = d.getFullYear();
        result = monVal + "/" + dayVal + "/" + yearVal + " " + hourVal + ":" + minVal + " " + ampm;
        return result;
    };
    DoctimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'doctime'
        })
    ], DoctimePipe);
    return DoctimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _doctime_doctime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctime/doctime.pipe */ "./src/app/pipes/doctime/doctime.pipe.ts");




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _doctime_doctime_pipe__WEBPACK_IMPORTED_MODULE_3__["DoctimePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _doctime_doctime_pipe__WEBPACK_IMPORTED_MODULE_3__["DoctimePipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
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
//# sourceMappingURL=admin-users-users-module.js.map