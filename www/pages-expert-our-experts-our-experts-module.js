(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expert-our-experts-our-experts-module"],{

/***/ "./src/app/pages/expert/our-experts/our-experts.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/expert/our-experts/our-experts.module.ts ***!
  \****************************************************************/
/*! exports provided: OurExpertsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurExpertsPageModule", function() { return OurExpertsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _our_experts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-experts.page */ "./src/app/pages/expert/our-experts/our-experts.page.ts");







var routes = [
    {
        path: '',
        component: _our_experts_page__WEBPACK_IMPORTED_MODULE_6__["OurExpertsPage"]
    }
];
var OurExpertsPageModule = /** @class */ (function () {
    function OurExpertsPageModule() {
    }
    OurExpertsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_our_experts_page__WEBPACK_IMPORTED_MODULE_6__["OurExpertsPage"]]
        })
    ], OurExpertsPageModule);
    return OurExpertsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expert/our-experts/our-experts.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/expert/our-experts/our-experts.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Our Experts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let expert of arrExperts; let i = index;\" [size]=\"isMobile?'4': '2'\">\n        <div [class]=\"expert.isExpanded?'active-expert-profile expert-item': 'expert-item'\" (mouseover)=\"onHighlightExpert(i)\" (mouseout)=\"onLowlightExpert(i)\" (click)=\"onClickExpert(i, expert)\">\n          <div class=\"expert-item-main\">\n            <div class=\"expert-avatar\">\n              <img [src]=\"expert.avatar\" />\n            </div>\n          </div>\n          <div [class]=\"isMobile?'expert-item-extra relative-position': 'expert-item-extra absolute-position'\">\n            <ng-container *ngIf=\"isMobile; else desktopView\">\n              <p>\n                {{expert.fname + \" \" + expert.lname}}\n              </p>\n              <p class=\"italic-font\">\n                {{arrCategories[expert.category]}}\n              </p>\n              <p class=\"italic-font\">\n                {{expert.expertdegree}}\n              </p>\n              <p class=\"italic-font\">\n                {{expert.expertschool}}\n              </p>\n              <!-- <div class=\"expert-item-extra-btn-detail\">\n                <div (click)=\"onClickViewDetailExpert($event, expert)\">\n                  <ion-icon name=\"person\"></ion-icon>\n                  <p>\n                    View Profile\n                  </p>\n                </div>\n              </div> -->\n            </ng-container>\n            <ng-template #desktopView let-i=\"i\">\n              <p class=\"expert-name\" *ngIf=\"!expert.isExpanded\">\n                {{expert.fname + \" \" + expert.lname}}\n              </p>\n              <ng-container *ngIf=\"expert.isExpanded\">\n                <p>\n                  {{expert.fname + \" \" + expert.lname}}\n                </p>\n                <p class=\"italic-font\">\n                  {{arrCategories[expert.category]}}\n                </p>\n                <p class=\"italic-font\">\n                  {{expert.expertdegree}}\n                </p>\n                <p class=\"italic-font\">\n                  {{expert.expertschool}}\n                </p>\n                <!-- <div class=\"expert-item-extra-btn-detail\">\n                  <div (click)=\"onClickViewDetailExpert($event, expert)\">\n                    <ion-icon name=\"person\"></ion-icon>\n                    <p>\n                      View Profile\n                    </p>\n                  </div>\n                </div> -->\n              </ng-container>\n            </ng-template>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expert/our-experts/our-experts.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/expert/our-experts/our-experts.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light); }\n\nion-grid ion-row ion-col {\n  margin-bottom: 6vh; }\n\n.expert-item {\n  background-color: white;\n  position: relative;\n  cursor: pointer; }\n\n.expert-avatar {\n  width: 100%;\n  height: 120px;\n  overflow: hidden; }\n\n.expert-avatar img {\n    height: 120px;\n    width: 100%; }\n\n.expert-name {\n  margin: 0;\n  padding: 8px !important;\n  background-color: #404040;\n  color: white; }\n\n.expert-item-extra {\n  width: 100%;\n  background-color: #0073ED;\n  z-index: 9999999; }\n\n.expert-item-extra > p {\n  font-size: .8em;\n  color: white;\n  margin: 0;\n  padding: 4px 0 4px 4px; }\n\n.active-expert-profile {\n  outline-offset: -1px;\n  outline: 1px solid #0073ed; }\n\n.expert-item-extra-btn-detail {\n  padding: 0 8px 8px; }\n\n.expert-item-extra-btn-detail div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #003d7d; }\n\n.expert-item-extra-btn-detail div ion-icon {\n      color: white;\n      font-size: .7em; }\n\n.expert-item-extra-btn-detail div p {\n      color: white;\n      font-size: .7em;\n      margin: 0;\n      padding: 4px 0; }\n\n.italic-font {\n  font-style: italic; }\n\n.relative-position {\n  position: relative; }\n\n.absolute-position {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0L291ci1leHBlcnRzL291ci1leHBlcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFhLEVBQUE7O0FBR2pCO0VBR1ksa0JBQWtCLEVBQUE7O0FBSzlCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBT25CO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFIcEI7SUFLUSxhQUFhO0lBQ2IsV0FBVyxFQUFBOztBQUluQjtFQUNJLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG9CQUFvQjtFQUNwQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUIsRUFBQTs7QUFOakM7TUFRWSxZQUFZO01BQ1osZUFBZSxFQUFBOztBQVQzQjtNQVlZLFlBQVk7TUFDWixlQUFlO01BQ2YsU0FBUztNQUNULGNBQWMsRUFBQTs7QUFLMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVydC9vdXItZXhwZXJ0cy9vdXItZXhwZXJ0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnZoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZXhwZXJ0LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIC5leHBlcnQtaXRlbS1tYWluIHtcbiAgICBcbi8vIH1cblxuLmV4cGVydC1hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5leHBlcnQtbmFtZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXhwZXJ0LWl0ZW0tZXh0cmEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczRUQ7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbn1cblxuLmV4cGVydC1pdGVtLWV4dHJhID4gcCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNHB4IDAgNHB4IDRweDtcbn1cblxuLmFjdGl2ZS1leHBlcnQtcHJvZmlsZSB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICMwMDczZWQ7XG59XG5cbi5leHBlcnQtaXRlbS1leHRyYS1idG4tZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAwIDhweCA4cHg7XG4gICAgZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNkN2Q7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaXRhbGljLWZvbnQge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expert/our-experts/our-experts.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/expert/our-experts/our-experts.page.ts ***!
  \**************************************************************/
/*! exports provided: OurExpertsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurExpertsPage", function() { return OurExpertsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");





var OurExpertsPage = /** @class */ (function () {
    function OurExpertsPage(apiService, loadingCtrl, navCtrl, platform) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.isMobile = false;
        this.arrExperts = [];
        this.colSize = "4";
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES"];
    }
    OurExpertsPage.prototype.ngOnInit = function () {
    };
    OurExpertsPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    OurExpertsPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var expertsLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isMobile = this.platform.is("mobile");
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        expertsLoader = _a.sent();
                        return [4 /*yield*/, expertsLoader.present()];
                    case 2:
                        _a.sent();
                        this.arrExperts = [];
                        this.apiService.getUsers(1)
                            .subscribe(function (data) {
                            if (data.data) {
                                for (var i = 0; i < data.data.length; i++) {
                                    if (data.data[i].highlight == true) {
                                        _this.arrExperts.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data.data[i], { isExpanded: false }));
                                    }
                                }
                                _this.arrExperts.sort(function (a, b) { return (b.experiencedyear > a.experiencedyear) ? 1 : ((a.experiencedyear > b.experiencedyear) ? -1 : 0); });
                            }
                            console.log(_this.arrExperts);
                            expertsLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            expertsLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Expand Expert Info
     * @param index arrExpers array index
     */
    OurExpertsPage.prototype.onHighlightExpert = function (index) {
        if (!this.isMobile) {
            this.arrExperts[index].isExpanded = true;
        }
    };
    OurExpertsPage.prototype.onLowlightExpert = function (index) {
        if (!this.isMobile) {
            this.arrExperts[index].isExpanded = false;
        }
    };
    /**
     * Click Expert Item
     * Mobile: None
     * Browser: View Profile
     * @param index
     * @param expert expert object
     */
    OurExpertsPage.prototype.onClickExpert = function (index) {
        this.navCtrl.navigateForward('/expert-detail/' + this.arrExperts[index]._id);
    };
    OurExpertsPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    OurExpertsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-experts',
            template: __webpack_require__(/*! ./our-experts.page.html */ "./src/app/pages/expert/our-experts/our-experts.page.html"),
            styles: [__webpack_require__(/*! ./our-experts.page.scss */ "./src/app/pages/expert/our-experts/our-experts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], OurExpertsPage);
    return OurExpertsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expert-our-experts-our-experts-module.js.map