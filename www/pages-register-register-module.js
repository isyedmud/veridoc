(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/popover/usertype/usertype.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/popover/usertype/usertype.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-item button=true (click)=\"onSelectUserType(0)\">\n    <ion-label>I'm Requestor</ion-label>\n  </ion-item>\n  <ion-item button=true (click)=\"onSelectUserType(1)\">\n    <ion-label>I'm Expert</ion-label>\n  </ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./src/app/pages/popover/usertype/usertype.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/popover/usertype/usertype.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvdXNlcnR5cGUvdXNlcnR5cGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/popover/usertype/usertype.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/popover/usertype/usertype.page.ts ***!
  \*********************************************************/
/*! exports provided: UsertypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertypePage", function() { return UsertypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UsertypePage = /** @class */ (function () {
    function UsertypePage(popOver) {
        this.popOver = popOver;
    }
    UsertypePage.prototype.ngOnInit = function () {
    };
    UsertypePage.prototype.onSelectUserType = function (type) {
        this.popOver.dismiss(type);
    };
    UsertypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usertype',
            template: __webpack_require__(/*! ./usertype.page.html */ "./src/app/pages/popover/usertype/usertype.page.html"),
            styles: [__webpack_require__(/*! ./usertype.page.scss */ "./src/app/pages/popover/usertype/usertype.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], UsertypePage);
    return UsertypePage;
}());



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _popover_usertype_usertype_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/usertype/usertype.page */ "./src/app/pages/popover/usertype/usertype.page.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"],
                _popover_usertype_usertype_page__WEBPACK_IMPORTED_MODULE_7__["UsertypePage"]
            ],
            entryComponents: [
                _popover_usertype_usertype_page__WEBPACK_IMPORTED_MODULE_7__["UsertypePage"]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"register-page-container\">\n    <p id=\"register-page-header\">Register</p>\n    <div id=\"register-page-avatar-form\">\n      <div id=\"register-page-avatar\">\n        <img [src]=\"avatarImg\" (click)=\"onClickAvatar()\"/>\n      </div>\n    </div>\n    <input type=\"file\" id=\"avatarSelector\" accept=\"image/*\" #avatarSelector (change)=\"onSelectAvatarImage()\"/>\n    <div id=\"register-page-main-content\">\n      <form [formGroup]=\"registerForm\">\n\n        <!-- UserType -->\n        <ion-item (click)=\"onSelectUserRole()\">\n          <ion-label>Type</ion-label>\n          <ion-label id=\"label-usertype\">{{userRole==0?\"I'm Requestor\":\"I'm Expert\"}}</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-dropdown\"></ion-icon>\n        </ion-item>\n\n        <!-- Expert title -->\n        <ion-item *ngIf=\"userRole == '1'\">\n          <ion-input type=\"text\" formControlName=\"title\" placeholder=\"Title\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.title.valid && registerForm.controls.role=='1' && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.title.valid && registerForm.controls.role=='1' && submitAttempt\">Please enter a Title.</p>\n        </ion-item>\n\n        <!-- Expert Headline -->\n        <ion-item *ngIf=\"userRole == '1'\">\n          <ion-input type=\"text\" formControlName=\"headline\" placeholder=\"Headline\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.headline.valid && registerForm.controls.role=='1' && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.headline.valid && registerForm.controls.role=='1' && submitAttempt\">Please enter a Headline.</p>\n        </ion-item>\n\n        <!-- Expert Category -->\n        <ion-item *ngIf=\"userRole == '1'\">\n          <ion-label>Category</ion-label>\n          <ion-select formControlName=\"category\">\n            <ion-select-option value=\"0\">Cardiology</ion-select-option>\n            <ion-select-option value=\"1\">Endocrinology</ion-select-option>\n            <ion-select-option value=\"2\">Infectious Diseases</ion-select-option>\n            <ion-select-option value=\"3\">Nephrology</ion-select-option>\n            <ion-select-option value=\"4\">Oncology & Hematology</ion-select-option>\n            <ion-select-option value=\"5\">Pediatrics</ion-select-option>\n            <ion-select-option value=\"6\">Psychiatry</ion-select-option>\n            <ion-select-option value=\"7\">Radiology</ion-select-option>\n            <ion-select-option value=\"8\">Dermatology</ion-select-option>\n            <ion-select-option value=\"9\">Gastroenterology</ion-select-option>\n            <ion-select-option value=\"10\">Internal Medicine</ion-select-option>\n            <ion-select-option value=\"11\">Neurology</ion-select-option>\n            <ion-select-option value=\"12\">Precision Oncology</ion-select-option>\n            <ion-select-option value=\"13\">Physical Med/Rehab</ion-select-option>\n            <ion-select-option value=\"14\">Pulmonary Medicine and Critical Care</ion-select-option>\n            <ion-select-option value=\"15\">Rheumatology</ion-select-option>\n          </ion-select>\n        </ion-item>\n      \n        <!-- First Name -->\n        <ion-item>\n          <ion-input type='text' formControlName=\"fname\" placeholder=\"First Name\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.fname.valid && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.fname.valid && submitAttempt\">Please enter a First Name.</p>\n        </ion-item>\n      \n        <!-- Last Name -->\n        <ion-item>\n          <ion-input type='text' formControlName=\"lname\" placeholder=\"Last Name\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.lname.valid && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.lname.valid && submitAttempt\">Please enter a Last Name.</p>\n        </ion-item>\n      \n        <!-- Email -->\n        <ion-item>\n          <ion-input type='email' formControlName=\"email\" placeholder=\"Email\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.email.valid && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.email.valid && submitAttempt\">Please enter a valid Email Address.</p>\n        </ion-item>\n      \n        <!-- Birthdate -->\n        <ion-item>\n          <ion-label>BOD</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"dob\" pickerFormat=\"DD MMMM YYYY\"></ion-datetime>\n        </ion-item>\n\n        <!-- Experienced Year for expert -->\n        <ion-item *ngIf=\"userRole == '1'\">\n          <ion-input type=\"number\" formControlName=\"experiencedyear\" placeholder=\"Experienced Years\"></ion-input>\n        </ion-item>\n      \n        <!-- User Name -->\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.username.valid && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.username.valid && submitAttempt\">Please enter a Username.</p>\n        </ion-item>\n      \n        <ion-item>\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!registerForm.controls.password.valid && submitAttempt\">\n          <p [class.invalid]=\"!registerForm.controls.password.valid && submitAttempt\">Please enter password.</p>\n        </ion-item>\n      \n        <ion-item *ngIf=\"isExpert\">Bank Detail</ion-item>\n        <ion-item *ngIf=\"isExpert\">License Documents</ion-item>\n      </form>\n    \n      <p id=\"r-registered\" (click)=\"onClickAlreadyRegisteredBtn()\">\n        Already Registered?\n      </p>\n    \n      <ion-item lines=\"none\">\n        <ion-checkbox slot=\"start\" (ionChange)=\"onChangeTermsAndConditions($event)\"></ion-checkbox>\n        <ion-label>Accept terms and conditions</ion-label>\n      </ion-item>\n    \n      <div id=\"r-btn-register\">\n        <ion-button (click)=\"onClickSignupBtn()\">Sign Up</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 641px) {\n  #register-page-container {\n    margin: 6vh 20% 0 20%;\n    box-shadow: 0 4px 4px #d2d2d2; }\n  #register-page-header {\n    background-color: #3780ff;\n    color: white; }\n  #register-page-main-content {\n    padding: 16px; } }\n\n#label-usertype {\n  text-align: right; }\n\n#register-page-header {\n  text-align: center;\n  font-size: 1.4em;\n  margin: 0;\n  padding: 16px 0; }\n\n#register-page-avatar-form {\n  display: flex;\n  justify-content: center;\n  margin-top: 3vh; }\n\n#register-page-avatar {\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n  position: relative; }\n\n#register-page-avatar img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 100%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n#r-registered {\n  font-size: .9em;\n  color: #808080;\n  text-align: center; }\n\n#r-btn-register {\n  width: 100%;\n  text-align: center;\n  margin-top: 3vh; }\n\n#r-btn-register ion-button {\n    width: 70%; }\n\n#avatarSelector {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCLEVBQUE7RUFHakM7SUFDSSx5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0VBR2hCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFPUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osd0NBQWdDO1lBQWhDLGdDQUFnQyxFQUFBOztBQUl4QztFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSG5CO0lBS1EsVUFBVSxFQUFBOztBQUlsQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcbiAgICAjcmVnaXN0ZXItcGFnZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDZ2aCAyMCUgMCAyMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAjZDJkMmQyO1xuICAgIH1cblxuICAgICNyZWdpc3Rlci1wYWdlLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzgwZmY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAjcmVnaXN0ZXItcGFnZS1tYWluLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbn1cblxuI2xhYmVsLXVzZXJ0eXBlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3JlZ2lzdGVyLXBhZ2UtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xufVxuXG4jcmVnaXN0ZXItcGFnZS1hdmF0YXItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbiNyZWdpc3Rlci1wYWdlLWF2YXRhciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG4jci1yZWdpc3RlcmVkIHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jci1idG4tcmVnaXN0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG4jYXZhdGFyU2VsZWN0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _popover_usertype_usertype_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popover/usertype/usertype.page */ "./src/app/pages/popover/usertype/usertype.page.ts");










var RegisterPage = /** @class */ (function () {
    function RegisterPage(loadingCtrl, navCtrl, altCtrl, apiService, toastService, formBuilder, event, actionSheetCtrl, camera, platform, popOver) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.event = event;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.platform = platform;
        this.popOver = popOver;
        /**
         * Form Group Validator
         */
        this.submitAttempt = false;
        this.isAcceptedTerms = false;
        /**
         * terms and conditions text
         */
        this.txtTerms = _constants__WEBPACK_IMPORTED_MODULE_8__["TERMSANDCONDITIONSTXT"];
        /**
         * User Role
         * 0: normal user
         * 1: expert
         * if role == 1
         *  add experience year field
         */
        this.userRole = 0;
        /**
         * Avatar Image(base64)
         */
        this.avatarImg = "assets/imgs/img-default-profile.svg";
        this.registerForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            role: ['0'],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dob: ['1970-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            experiencedyear: [0],
            category: ['0'],
            title: [''],
            headline: ['']
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.onSelectUserRole = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userTypePopover, result, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popOver.create({
                            component: _popover_usertype_usertype_page__WEBPACK_IMPORTED_MODULE_9__["UsertypePage"],
                            event: event
                        })];
                    case 1:
                        userTypePopover = _a.sent();
                        return [4 /*yield*/, userTypePopover.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, userTypePopover.onDidDismiss()];
                    case 4:
                        result = _a.sent();
                        if (result.data !== undefined) {
                            this.userRole = result.data;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6:
                        console.log(this.userRole);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Signup User
     * Call signUp method in ApiService
     */
    RegisterPage.prototype.onClickSignupBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reqData, signupLoader_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitAttempt = true;
                        if (this.isAcceptedTerms == false) {
                            this.toastService.showToast("Please accept our Terms and Conditions!");
                            return [2 /*return*/];
                        }
                        if (!this.registerForm.valid) return [3 /*break*/, 3];
                        reqData = {
                            email: this.registerForm.controls.email.value,
                            role: Number(this.registerForm.controls.role.value),
                            fname: this.registerForm.controls.fname.value,
                            lname: this.registerForm.controls.lname.value,
                            birthday: this.registerForm.controls.dob.value,
                            username: this.registerForm.controls.username.value,
                            password: md5__WEBPACK_IMPORTED_MODULE_5___default()(this.registerForm.controls.password.value),
                            experiencedyear: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.experiencedyear.value : 0,
                            isverified: false,
                            highlight: false,
                            title: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.title.value : "",
                            headline: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.headline.value : "",
                            category: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.category.value : 'null',
                            avatar: this.avatarImg
                        };
                        console.log(reqData);
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        signupLoader_1 = _a.sent();
                        return [4 /*yield*/, signupLoader_1.present()];
                    case 2:
                        _a.sent();
                        this.apiService.signUp(reqData)
                            .subscribe(function (res) {
                            signupLoader_1.dismiss();
                            _this.toastService.showToast("Successfully Registered!");
                            localStorage.setItem("isLoggedIn", 'true');
                            localStorage.setItem("uid", res.user._id);
                            localStorage.setItem("role", res.user.role);
                            _this.event.publish("onLoginStatusChange");
                            _this.navCtrl.navigateRoot('/menu/landing');
                        }, function (error) {
                            console.log(error);
                            signupLoader_1.dismiss();
                            if (error.error.message) {
                                _this.toastService.showToast(error.error.message);
                            }
                            else {
                                _this.toastService.showToast(error.error.err.errors.email.message);
                            }
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Select or take image for avatar
     * if platform is mobile
     *  show actionsheet
     * else
     *  only select image
     */
    RegisterPage.prototype.onClickAvatar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Albums',
                            buttons: [
                                {
                                    text: 'Select Image',
                                    icon: 'document',
                                    handler: function () {
                                        _this.avatarSelector.nativeElement.click();
                                    }
                                }, {
                                    text: 'Take Photo',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.getImageFromCamera();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        if (!this.platform.is("mobile")) return [3 /*break*/, 3];
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.avatarSelector.nativeElement.click();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.getImageFromCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, _a, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        _a.avatarImg = _b.sent();
                        console.log(this.avatarImg);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.onSelectAvatarImage = function () {
        this.getBase64(this.avatarSelector.nativeElement.files[0]);
    };
    RegisterPage.prototype.getBase64 = function (file) {
        var self = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            self.avatarImg = new String(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    /**
     * Navigate to login page
     */
    RegisterPage.prototype.onClickAlreadyRegisteredBtn = function () {
        this.navCtrl.navigateForward('/login');
    };
    /**
     * Show Terms and Conditions
     */
    RegisterPage.prototype.onChangeTermsAndConditions = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var termsAlt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isAcceptedTerms = evt.detail.checked;
                        if (!(this.isAcceptedTerms == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.altCtrl.create({
                                header: "Terms and Conditions",
                                message: this.txtTerms,
                                buttons: ['OK']
                            })];
                    case 1:
                        termsAlt = _a.sent();
                        return [4 /*yield*/, termsAlt.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('avatarSelector'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterPage.prototype, "avatarSelector", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map