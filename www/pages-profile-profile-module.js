(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"pf-user-image-container\">\n    <div id=\"pf-user-image-inner\">\n      <img src=\"assets/imgs/img-default-profile.svg\" />\n    </div>\n  </div>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Username</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"userInfo.username\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">First Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"userInfo.fname\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Last Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"userInfo.lname\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"userInfo.email\"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item (click)=\"onClickBirthDay()\">\n    <ion-label position=\"stacked\">BOD</ion-label>\n    <ion-label>\n      {{userInfo.birthday}}\n    </ion-label>\n  </ion-item> -->\n  <div (click)=\"onClickBirthDay()\" id=\"profile-birthday\">\n    <p>BOD</p>\n    <p>\n      {{userInfo.birthday}}\n    </p>\n  </div>\n\n  <div *ngIf=\"isShowCalendar\">\n    <calendar \n      [calendarMode]=\"calendar.mode\" \n      [currentDate]=\"calendar.currentDate\"\n      (onCurrentDateChanged)=\"onCurrentDateChanged($event)\" \n      startingDayWeek=\"1\" \n      [showEventDetail]='false'\n      class=\"profile-calendar\"\n      >\n    </calendar>\n  </div>\n\n  <div id=\"pf-btn-save\">\n    <ion-button (click)=\"onClickBtnSave()\">Update</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pf-user-image-container {\n  position: relative;\n  height: 6em; }\n\n#pf-user-image-inner {\n  position: absolute;\n  width: 6em;\n  height: 6em;\n  border-radius: 50%;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n#pf-btn-save {\n  width: 100%;\n  text-align: center;\n  margin-top: 3vh; }\n\n#profile-birthday {\n  display: flex;\n  padding: 0 16px;\n  border-bottom: 1px solid #dedede; }\n\n#profile-birthday p {\n    flex: 1;\n    margin: 16px 0 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFIcEM7SUFLUSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BmLXVzZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2ZW07XG59XG5cbiNwZi11c2VyLWltYWdlLWlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZlbTtcbiAgICBoZWlnaHQ6IDZlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNwZi1idG4tc2F2ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDN2aDtcbn1cblxuI3Byb2ZpbGUtYmlydGhkYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgIHAge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IDE2cHggMCA4cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");





var ProfilePage = /** @class */ (function () {
    function ProfilePage(myUtils, navCtrl, loadingCtrl, apiService) {
        this.myUtils = myUtils;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.isShowCalendar = false;
        this.calendar = {
            mode: 'month',
            currentDate: null
        };
        this.userInfo = {};
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Init Page variables
     */
    ProfilePage.prototype.initPage = function () {
        this.loadUserProfile();
    };
    ProfilePage.prototype.loadUserProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profileLoader, uid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        profileLoader = _a.sent();
                        return [4 /*yield*/, profileLoader.present()];
                    case 2:
                        _a.sent();
                        uid = localStorage.getItem("uid");
                        this.apiService.getUser(uid)
                            .subscribe(function (res) {
                            _this.userInfo = {
                                username: res.user.username ? res.user.username : '',
                                fname: res.user.fname ? res.user.fname : '',
                                lname: res.user.lname ? res.user.lname : '',
                                email: res.user.email ? res.user.email : '',
                                birthday: res.user.birthday ? res.user.birthday : '',
                                uid: uid
                            };
                            _this.calendar.currentDate = new Date(_this.userInfo.birthday);
                            console.log(_this.userInfo);
                            profileLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            profileLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    /**
     * Update Profile Setting
     */
    ProfilePage.prototype.onClickBtnSave = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateLoader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        updateLoader = _a.sent();
                        return [4 /*yield*/, updateLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.updateUser(this.userInfo)
                            .subscribe(function () {
                            updateLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            updateLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.onClickBirthDay = function () {
        this.isShowCalendar = !this.isShowCalendar;
    };
    ProfilePage.prototype.onCurrentDateChanged = function (evt) {
        var d = new Date(evt);
        this.userInfo.birthday = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/services/utils/utils.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * It saves user info globally and using this without re-calling api.
 */


var UtilsService = /** @class */ (function () {
    function UtilsService() {
        this._userInfo = null;
    }
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map