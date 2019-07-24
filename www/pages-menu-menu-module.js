(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

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
/* harmony import */ var _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/filter/filter.page */ "./src/app/pages/popover/filter/filter.page.ts");









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
                            { path: 'expertsreview/:requestId', loadChildren: '../user/expertsreview/expertsreview.module#ExpertsreviewPageModule' },
                            { path: 'myrequests', loadChildren: '../user/request-list/request-list.module#RequestListPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'expert-requests', loadChildren: '../expert/request/request.module#RequestPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'admin-requests', loadChildren: '../admin/admin-requests/admin-requests.module#AdminRequestsPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'adminallcases', loadChildren: '../admin/all-cases/all-cases.module#AllCasesPageModule', canActivate: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                            { path: 'admin-users', loadChildren: '../admin/users/users.module#UsersPageModule' },
                        ]
                    }
                ])
            ],
            declarations: [
                _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
                _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"]
            ],
            entryComponents: [
                _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"]
            ]
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
                    this.navCtrl.navigateForward('/menu/expertsreview/null');
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