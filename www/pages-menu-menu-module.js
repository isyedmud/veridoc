(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

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

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");








var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
                        children: [
                            { path: 'landing', loadChildren: '../landing/landing.module#LandingPageModule' },
                            { path: 'expertsreview', loadChildren: '../user/expertsreview/expertsreview.module#ExpertsreviewPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'myrequests', loadChildren: '../user/request-list/request-list.module#RequestListPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'expert-requests', loadChildren: '../expert/request/request.module#RequestPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'admin-requests', loadChildren: '../admin/admin-requests/admin-requests.module#AdminRequestsPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'adminallcases', loadChildren: '../admin/all-cases/all-cases.module#AllCasesPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'admin-users', loadChildren: '../admin/users/users.module#UsersPageModule' },
                        ]
                    }
                ])
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-split-pane disabled=true>\n  <ion-menu side=\"end\" contentId=\"content\" type=\"overlay\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages; let i = index;\">\n          <ion-item button=\"true\" (click)=\"onClickMainMenuItem(page.id)\">\n            {{page.name}}\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, event, altCtrl, toastService, loadingCtrl, apiService) {
        this.navCtrl = navCtrl;
        this.event = event;
        this.altCtrl = altCtrl;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        /**
         * Array for page menu
         */
        this.pages = [];
    }
    MenuPage.prototype.ngOnInit = function () { };
    MenuPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    MenuPage.prototype.initPage = function () {
        var isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
        this.userRole = localStorage.getItem("role");
        if (isLoggedIn == false) {
            this.pages = [
                {
                    id: 3,
                    name: "Login"
                },
                {
                    id: 4,
                    name: "Signup"
                },
            ];
        }
        else {
            var commonMenu = [
                {
                    id: 9,
                    name: "Change Password"
                },
                {
                    id: 11,
                    name: "Log Out"
                },
            ];
            if (this.userRole == '0') {
                this.pages = [
                    {
                        id: 5,
                        name: "New Request"
                    },
                    {
                        id: 6,
                        name: "My Requests"
                    },
                    {
                        id: 7,
                        name: "My profile"
                    },
                    {
                        id: 8,
                        name: "Payment Option"
                    },
                    {
                        id: 10,
                        name: "Delete Account"
                    },
                ];
            }
            else if (this.userRole == '1') {
                this.pages = [
                    {
                        id: 6,
                        name: "Requests"
                    },
                    {
                        id: 7,
                        name: "My profile"
                    },
                    {
                        id: 8,
                        name: "Bank Details"
                    },
                    {
                        id: 10,
                        name: "Delete Account"
                    },
                ];
            }
            else if (this.userRole == '2') {
                this.pages = [
                    {
                        id: 5,
                        name: "Users"
                    },
                    {
                        id: 6,
                        name: "Requests"
                    },
                    {
                        id: 7,
                        name: "My profile"
                    },
                ];
            }
            this.pages = this.pages.concat(commonMenu);
            this.pages.sort(function (a, b) { return a.id - b.id; });
            console.log(this.pages);
        }
    };
    /**
     * Navigate to pages based on pageindex
     * @param pageindex: Number
     */
    MenuPage.prototype.onClickMainMenuItem = function (pageindex) {
        switch (pageindex) {
            case 3:
                this.navCtrl.navigateForward('/login');
                break;
            case 4:
                this.navCtrl.navigateForward('/register');
                break;
            case 5:
                if (this.userRole == '0') {
                    this.navCtrl.navigateForward('/menu/expertsreview');
                }
                else {
                    this.navCtrl.navigateForward('/menu/admin-users');
                }
                break;
            case 6:
                if (this.userRole == '0') {
                    this.navCtrl.navigateForward('/menu/myrequests');
                }
                else if (this.userRole == '1') {
                    this.navCtrl.navigateForward('/menu/expert-requests');
                }
                else {
                    this.navCtrl.navigateForward('/menu/admin-requests');
                }
                break;
            case 7:
                this.navCtrl.navigateForward('/profile');
                break;
            case 8:
                this.navCtrl.navigateForward('/pay-opt');
                break;
            case 9:
                this.showPasswordResetDlg();
                break;
            case 10:
                this.showDeleteAccountAlert();
                break;
            case 11:
                this.showLogoutAlert();
                break;
            default:
                break;
        }
    };
    MenuPage.prototype.showLogoutAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var logoutAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Log Out?",
                            subHeader: "",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        localStorage.removeItem("isLoggedIn");
                                        _this.event.publish("onLoginStatusChange");
                                        _this.initPage();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        logoutAlt = _a.sent();
                        return [4 /*yield*/, logoutAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Show Password Reset Dialog
     */
    MenuPage.prototype.showPasswordResetDlg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resetDlg;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Reset Password",
                            subHeader: "",
                            inputs: [
                                {
                                    name: 'value',
                                    type: 'password',
                                    placeholder: 'Current password'
                                },
                                {
                                    name: 'value1',
                                    type: 'password',
                                    placeholder: 'New password'
                                },
                                {
                                    name: 'value2',
                                    type: 'password',
                                    placeholder: 'Confirm New password'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data.value1 !== data.value2) {
                                            _this.toastService.showToast("New password doesn't match!");
                                        }
                                        else {
                                            _this.resetPassword(data.value, data.value1);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        resetDlg = _a.sent();
                        return [4 /*yield*/, resetDlg.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reset Password
     * @param oldPwd: String, newPwd: String
     * @returns null
     */
    MenuPage.prototype.resetPassword = function (oldPwd, newPwd) {
        console.log("Old New", oldPwd, newPwd);
    };
    MenuPage.prototype.showDeleteAccountAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deleteAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "You want to delete the account?",
                            subHeader: "",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.deleteAccount();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        deleteAlt = _a.sent();
                        return [4 /*yield*/, deleteAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.deleteAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deleteLoader, uid, role;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        deleteLoader = _a.sent();
                        return [4 /*yield*/, deleteLoader.present()];
                    case 2:
                        _a.sent();
                        uid = localStorage.getItem("uid");
                        role = localStorage.getItem("role");
                        this.apiService.deleteAccount(uid, role)
                            .subscribe(function (res) {
                            _this.toastService.showToast("Account is Deleted!");
                            localStorage.removeItem("isLoggedIn");
                            localStorage.removeItem("uid");
                            _this.initPage();
                            _this.event.publish("onLoginStatusChange");
                            deleteLoader.dismiss();
                            _this.navCtrl.navigateBack('/menu/landing');
                        }, function (error) {
                            console.log(error);
                            deleteLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], MenuPage);
    return MenuPage;
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
//# sourceMappingURL=pages-menu-menu-module.js.map