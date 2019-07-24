(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expert-expert-detail-expert-detail-module"],{

/***/ "./node_modules/ionic4-rating/dist/components/rating.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/components/rating.js ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.size = 'default';
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.onClick = function (rate) {
        this.rate = rate;
        this.rateChange.emit(this.rate);
        this._onChange(this.rate);
    };
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.rate = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) { };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled;
    };
    var RatingComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RatingComponent.prototype, "rateChange", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "rating",
            template: "\n    <ion-buttons>\n      <ion-button [disabled]=\"readonly\" fill=\"clear\" [size]=\"size\" *ngFor=\"let current of [1, 2, 3, 4, 5]; let i = index\"\n        (click)=\"onClick(i + 1)\" (mouseover)=\"hoverRate = i + 1\" (mouseleave)=\"hoverRate = 0\">\n        <ion-icon slot=\"icon-only\" name=\"star\" [class.filled]=\"(i + 1 <= hoverRate || (!hoverRate && i + 1 <= rate))\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  ",
            styles: [
                "\n      ion-buttons {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled] {\n        opacity: 1;\n      }\n\n      ion-icon {\n        color: gray;\n      }\n\n      ion-icon.filled {\n        color: orange;\n      }\n    "
            ],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RatingComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RatingComponent);
    return RatingComponent;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/index.js ***!
  \**************************************************/
/*! exports provided: IonicRatingModule, RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic-rating.module */ "./node_modules/ionic4-rating/dist/ionic-rating.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return _ionic_rating_module__WEBPACK_IMPORTED_MODULE_0__["IonicRatingModule"]; });

/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _components_rating__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic4-rating/dist/ionic-rating.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ionic4-rating/dist/ionic-rating.module.js ***!
  \****************************************************************/
/*! exports provided: IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating */ "./node_modules/ionic4-rating/dist/components/rating.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
    IonicRatingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
            exports: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]],
            declarations: [_components_rating__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"]]
        })
    ], IonicRatingModule);
    return IonicRatingModule;
}());

//# sourceMappingURL=ionic-rating.module.js.map

/***/ }),

/***/ "./src/app/pages/expert/expert-detail/expert-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expert/expert-detail/expert-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: ExpertDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertDetailPageModule", function() { return ExpertDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expert_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expert-detail.page */ "./src/app/pages/expert/expert-detail/expert-detail.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");








var routes = [
    {
        path: '',
        component: _expert_detail_page__WEBPACK_IMPORTED_MODULE_6__["ExpertDetailPage"]
    }
];
var ExpertDetailPageModule = /** @class */ (function () {
    function ExpertDetailPageModule() {
    }
    ExpertDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expert_detail_page__WEBPACK_IMPORTED_MODULE_6__["ExpertDetailPage"]]
        })
    ], ExpertDetailPageModule);
    return ExpertDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expert/expert-detail/expert-detail.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/expert/expert-detail/expert-detail.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Expert Detail</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div id=\"expert-detail-header\">\n    <div>\n      <div id=\"expert-detail-avatar\">\n        <img [src]=\"expertInfo?.avatar\" />\n      </div>\n    </div>\n    <div>\n      <p class=\"expert-detail-name\">\n        {{expertInfo?.fname + \" \" + expertInfo?.lname}}\n      </p>\n      <p>\n        {{expertInfo?.title}}\n      </p>\n      <p>\n        {{expertInfo?.headline}}\n      </p>\n      <p>\n        Category: {{arrCategories[expertInfo?.category]}}\n      </p>\n    </div>\n  </div>\n\n  <div id=\"expert-detail-main\">\n    <div id=\"expert-detail-bio\">\n      <div id=\"expert-detail-bio-header\">\n        <ion-icon name=\"person\"></ion-icon>\n        <p class=\"expert-detail-header\">\n          Bio\n        </p>\n      </div>\n      <p class=\"expert-detail-content-txt1\">\n        {{expertInfo?.expertbio}}\n      </p>\n    </div>\n    \n    <div id=\"expert-detail-education\">\n      <div id=\"expert-detail-education-header\">\n        <ion-icon src=\"assets/icons/icon-education.svg\"></ion-icon>\n        <p class=\"expert-detail-header\">\n          Education\n        </p>\n      </div>\n      <div id=\"expert-detail-education-body\">\n        <p class=\"expert-detail-sub-header\">\n          School\n        </p>\n        <p class=\"expert-detail-content-txt1\">\n          {{expertInfo?.expertschool}}\n        </p>\n\n        <p class=\"expert-detail-sub-header\">\n          Residency\n        </p>\n        <p class=\"expert-detail-content-txt1\">\n          {{expertInfo?.expertresidency}}\n        </p>\n\n        <p class=\"expert-detail-sub-header\">\n          Internship\n        </p>\n        <p class=\"expert-detail-content-txt1\">\n          {{expertInfo?.expertinternship}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expert/expert-detail/expert-detail.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/expert/expert-detail/expert-detail.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#expert-detail-header {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  background-color: #F4F6F5; }\n\n#expert-detail-header > div:first-child {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 16px; }\n\n#expert-detail-header > div:nth-child(2) {\n  flex: 3;\n  padding-left: 16px; }\n\n#expert-detail-header > div:nth-child(2) p {\n    margin: 8px 0; }\n\n#expert-detail-avatar {\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%; }\n\n#expert-detail-avatar img {\n    width: 100%;\n    height: 100%; }\n\n#expert-detail-bio-header, #expert-detail-education-header {\n  display: flex;\n  align-items: center;\n  padding: 8px; }\n\n#expert-detail-bio-header ion-icon, #expert-detail-education-header ion-icon {\n    color: #4E4E4E;\n    font-size: 1.2em; }\n\n#expert-detail-bio-header p, #expert-detail-education-header p {\n    margin: 0;\n    padding-left: 4px; }\n\n.expert-detail-content-txt1 {\n  margin: 8px;\n  font-size: .9em;\n  color: #717171; }\n\n.expert-detail-sub-header {\n  margin: 8px;\n  font-size: .9em;\n  font-weight: bold;\n  color: #484848; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0L2V4cGVydC1kZXRhaWwvZXhwZXJ0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxPQUFPO0VBQ1Asa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsYUFBYSxFQUFBOztBQUlyQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBSGhCO0lBS1EsY0FBYztJQUNkLGdCQUFnQixFQUFBOztBQU54QjtJQVNRLFNBQVM7SUFDVCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlcnQvZXhwZXJ0LWRldGFpbC9leHBlcnQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2V4cGVydC1kZXRhaWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNkY1O1xufVxuXG4jZXhwZXJ0LWRldGFpbC1oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbiNleHBlcnQtZGV0YWlsLWhlYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGZsZXg6IDM7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbn1cblxuI2V4cGVydC1kZXRhaWwtYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbiNleHBlcnQtZGV0YWlsLWJpby1oZWFkZXIsICNleHBlcnQtZGV0YWlsLWVkdWNhdGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzRFNEU0RTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxufVxuXG4uZXhwZXJ0LWRldGFpbC1jb250ZW50LXR4dDEge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBjb2xvcjogIzcxNzE3MTtcbn1cblxuLmV4cGVydC1kZXRhaWwtc3ViLWhlYWRlciB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expert/expert-detail/expert-detail.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expert/expert-detail/expert-detail.page.ts ***!
  \******************************************************************/
/*! exports provided: ExpertDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertDetailPage", function() { return ExpertDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");






var ExpertDetailPage = /** @class */ (function () {
    function ExpertDetailPage(route, navCtrl, loadingCtrl, apiService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.expertId = "";
        this.expertInfo = null;
        this.arrReviews = [];
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"];
    }
    ExpertDetailPage.prototype.ngOnInit = function () {
    };
    ExpertDetailPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    ExpertDetailPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reviewLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.expertId = this.route.snapshot.paramMap.get("expertId");
                        this.expertInfo = null;
                        this.arrReviews = [];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Loading..."
                            })];
                    case 1:
                        reviewLoader = _a.sent();
                        return [4 /*yield*/, reviewLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.getReviewByExpertId(this.expertId)
                            .subscribe(function (res) {
                            if (res.data) {
                                if (res.data[0].mark) {
                                    _this.expertInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[0].expertsId);
                                    _this.arrReviews = res.data;
                                }
                                else {
                                    _this.expertInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[0]);
                                }
                            }
                            console.log(_this.expertInfo);
                            reviewLoader.dismiss();
                        }, function (error) {
                            console.log(error);
                            reviewLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpertDetailPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/our-experts');
    };
    ExpertDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expert-detail',
            template: __webpack_require__(/*! ./expert-detail.page.html */ "./src/app/pages/expert/expert-detail/expert-detail.page.html"),
            styles: [__webpack_require__(/*! ./expert-detail.page.scss */ "./src/app/pages/expert/expert-detail/expert-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ExpertDetailPage);
    return ExpertDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expert-expert-detail-expert-detail-module.js.map