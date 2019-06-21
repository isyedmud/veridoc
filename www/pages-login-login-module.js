(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"l-page-container\">\n    <p id=\"l-page-header\">\n      Login\n    </p>\n    <div id=\"l-page-main-content\">\n      <form [formGroup]=\"loginForm\">\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Email\n          </ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n    \n        <ion-item *ngIf=\"!loginForm.controls.email.valid && submitAttempt\">\n          <p [class.invalid]=\"!loginForm.controls.email.valid && submitAttempt\">Please enter a valid Email Address.</p>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label position=\"stacked\">\n            Password\n          </ion-label>\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n    \n        <ion-item *ngIf=\"!loginForm.controls.password.valid && submitAttempt\">\n          <p [class.invalid]=\"!loginForm.controls.password.valid && submitAttempt\">Please enter a Password.</p>\n        </ion-item>\n      </form>\n    \n      <div id=\"l-forgotornew-container\">\n        <div>\n          <p id=\"l-newaccount\" (click)=\"onClickForgotpwd()\">Forgot Password?</p>\n        </div>\n        <div>\n          <p id=\"l-forgotpwd\" (click)=\"onClickSignup()\">Signup?</p>\n        </div>\n      </div>\n    \n      <div id=\"login-btn-container\">\n        <div id=\"l-btnlogin\">\n          <ion-button (click)=\"onClickLogin()\">Login</ion-button>\n        </div>\n        <div id=\"l-btnfb\">\n          <ion-button (click)=\"onClickFBLogin()\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n            <ion-label>Facebook</ion-label>\n          </ion-button>\n        </div>\n        <div id=\"l-btngplus\">\n          <ion-button color=\"danger\" (click)=\"onClickGPlusLogin()\">\n            <ion-icon name=\"logo-googleplus\"></ion-icon>\n            <ion-label>Google Plus</ion-label>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 641px) {\n  #l-page-container {\n    margin: 10vh 20% 0 20%;\n    box-shadow: 0 4px 4px #d2d2d2; }\n  #l-page-header {\n    background-color: #3780ff;\n    color: white; }\n  #l-page-main-content {\n    padding: 16px; } }\n\n#l-page-header {\n  text-align: center;\n  font-size: 1.4em;\n  margin: 0;\n  padding: 16px 0; }\n\n#login-btn-container {\n  padding: 2vh 0; }\n\n#login-btn-container div {\n    margin-bottom: 2vh;\n    width: 100%;\n    text-align: center; }\n\n#login-btn-container div ion-button {\n      width: 70%; }\n\n#l-btnfb ion-button {\n  --background: var(--ion-color-fbbtn); }\n\n#l-forgotornew-container {\n  display: flex;\n  padding: 16px; }\n\n#l-forgotornew-container div {\n    flex: 1; }\n\n#l-forgotpwd, #l-newaccount {\n  font-size: .9em;\n  color: #808080;\n  text-align: center; }\n\n#l-newaccount {\n  text-align: left; }\n\n#l-forgotpwd {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxzQkFBc0I7SUFDdEIsNkJBQTZCLEVBQUE7RUFHakM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0VBR2hCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQUwxQjtNQU9ZLFVBQVUsRUFBQTs7QUFLdEI7RUFFUSxvQ0FBYSxFQUFBOztBQUlyQjtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBRmpCO0lBSVEsT0FBTyxFQUFBOztBQUlmO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkge1xuICAgICNsLXBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxMHZoIDIwJSAwIDIwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4ICNkMmQyZDI7XG4gICAgfVxuXG4gICAgI2wtcGFnZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI2wtcGFnZS1tYWluLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbn1cblxuI2wtcGFnZS1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG59XG5cbiNsb2dpbi1idG4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAydmggMDtcbiAgICBkaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2wtYnRuZmIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1mYmJ0bik7XG4gICAgfVxufVxuXG4jbC1mb3Jnb3Rvcm5ldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuI2wtZm9yZ290cHdkLCAjbC1uZXdhY2NvdW50IHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbC1uZXdhY2NvdW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jbC1mb3Jnb3Rwd2Qge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");








var LoginPage = /** @class */ (function () {
    function LoginPage(altCtrl, loadingCtrl, apiService, toastService, navCtrl, googlePlus, platform, formBuilder, event) {
        this.altCtrl = altCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.event = event;
        this.submitAttempt = false;
        /**
         * Validate Form input fields.
         */
        this.loginForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /**
     * Show Forgot password Dialog
     */
    LoginPage.prototype.onClickForgotpwd = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var forgotAlt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Forgot Password?",
                            inputs: [
                                {
                                    name: 'value',
                                    type: 'email',
                                    placeholder: 'Email Address'
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
                                        _this.resetPassword(data.value);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        forgotAlt = _a.sent();
                        forgotAlt.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.resetPassword = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resetPwdLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait.."
                        })];
                    case 1:
                        resetPwdLoader = _a.sent();
                        return [4 /*yield*/, resetPwdLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.resetPassword(email)
                            .subscribe(function () {
                            resetPwdLoader.dismiss();
                            _this.toastService.showToast("Password is reset");
                        }, function (error) {
                            console.log(error);
                            resetPwdLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Login User
     */
    LoginPage.prototype.onClickLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loginLoader_1, credential;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitAttempt = true;
                        if (!this.loginForm.valid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        loginLoader_1 = _a.sent();
                        return [4 /*yield*/, loginLoader_1.present()];
                    case 2:
                        _a.sent();
                        credential = {
                            email: this.loginForm.controls.email.value,
                            password: md5__WEBPACK_IMPORTED_MODULE_5___default()(this.loginForm.controls.password.value)
                        };
                        this.apiService.login(credential)
                            .subscribe(function (res) {
                            _this.toastService.showToast("Login Successful!");
                            localStorage.setItem("isLoggedIn", 'true');
                            localStorage.setItem("uid", res.user._id);
                            localStorage.setItem("role", res.user.role);
                            _this.event.publish("onLoginStatusChange");
                            loginLoader_1.dismiss();
                            _this.navCtrl.navigateRoot('/menu/landing');
                        }, function (error) {
                            loginLoader_1.dismiss();
                            console.log(error);
                            _this.toastService.showToast(error.error.message);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Facebook Login
     */
    LoginPage.prototype.onClickFBLogin = function () {
    };
    /**
     * Google Plus Login
     * It checks the platform and use appropriate plugin
     * for mobile: Cordova plugin
     * for website: pure javascript
     */
    LoginPage.prototype.onClickGPlusLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var gplusLoader, user, userInfo, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        gplusLoader = _a.sent();
                        return [4 /*yield*/, gplusLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.googlePlus.login({})];
                    case 4:
                        user = _a.sent();
                        userInfo = {
                            username: "",
                            password: "",
                            role: 0,
                            email: user.email,
                            fname: user.givenName,
                            lname: user.familyName,
                            birthday: ""
                        };
                        localStorage.setItem("isLoggedIn", 'true');
                        this.apiService.signUp(userInfo)
                            .subscribe(function () {
                            gplusLoader.dismiss();
                            _this.event.publish("onLoginStatusChange");
                            _this.navCtrl.navigateRoot('/menu/landing');
                        }, function (error) {
                            console.log(error);
                            gplusLoader.dismiss();
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        gplusLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Navigate to signup page
     */
    LoginPage.prototype.onClickSignup = function () {
        this.navCtrl.navigateForward('/register');
    };
    LoginPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map