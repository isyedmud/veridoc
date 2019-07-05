(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

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

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");









var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_8__["IonicRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <img src=\"assets/imgs/logo-veridoc.svg\" />\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isLoggedIn\" fill=\"solid\" color=\"success\" (click)=\"onClickGetStarted()\">Get Started</ion-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #landingCarousel>\n    <ion-slides pager=\"true\" [options]=\"carouselSlideOpts\">\n      <ion-slide *ngFor=\"let img of arrImgs; let i = index;\">\n        <div class=\"landing-carousel-container\">\n          <div class=\"landing-btn-getexperts\" *ngIf=\"i==0&&userRole=='0'\">\n            <ion-button (click)=\"onClickGetExpertsReviewBtn($event)\">Get Experts Review</ion-button>\n          </div>\n          <img [src]=\"img\"/>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div #howitworks class=\"landing-item\">\n    <div class=\"landing-item-header\">\n      <div></div>\n      <p>\n        How it works\n      </p>\n    </div>\n    <div class=\"landing-item-content\">\n      <div class=\"howitworks-item\" *ngFor=\"let item of landingPageContents[0].childs; let i = index;\">\n        <ng-container *ngIf=\"i%2==0; else rightSide\">\n          <div class=\"howitworks-txt\">\n            <div class=\"howitworks-item-header\">\n              <p>\n                {{item.id}}\n              </p>\n              <p>\n                {{item.subheader}}\n              </p>\n            </div>\n            <div class=\"howitworks-item-content\">\n              <p>\n                {{item.content}}\n              </p>\n            </div>\n          </div>\n          <div class=\"howitworks-img\">\n            <img [src]=\"item.img\" />\n          </div>\n        </ng-container>\n        <ng-template #rightSide let-id=\"i\">\n          <div class=\"howitworks-img\">\n            <img [src]=\"item.img\" />\n          </div>\n          <div class=\"howitworks-txt\">\n            <div class=\"howitworks-item-header\">\n              <p>\n                {{item.id}}\n              </p>\n              <p>\n                {{item.subheader}}\n              </p>\n            </div>\n            <div class=\"howitworks-item-content\">\n              <p>\n                {{item.content}}\n              </p>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <div #whyverify class=\"landing-item\">\n    <div class=\"landing-item-header\">\n      <div></div>\n      <p>\n        Why VeriDoc\n      </p>\n    </div>\n    <div class=\"landing-item-content\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of landingPageContents[1].childs\">\n          <div class=\"whyveridoc-item-content\">\n            <div>\n              <img [src]=\"item.img\"/>\n            </div>\n            <p>\n              {{item.header}}\n            </p>\n            <p>\n              {{item.subheader}}\n            </p>\n            <p>\n              {{item.content}}\n            </p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"whyveridoc-btn-container\">\n        <ion-button color=\"success\">Verify Documents Now</ion-button>\n      </div>\n    </div>\n  </div>\n\n  <div #ourexperts class=\"landing-item\" id=\"ourexperts-container\">\n    <div class=\"landing-item-header\">\n      <div></div>\n      <p>\n        Our Experts\n      </p>\n    </div>\n    <div class=\"landing-item-content ourexperts-content\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let profile of landingPageContents[2].childs\">\n          <div class=\"ourexperts-item-content\">\n            <div>\n              <img [src]=\"profile.img\"/>\n            </div>\n            <p>\n              {{profile.header}}\n            </p>\n            <p>\n              {{profile.subheader}}\n            </p>\n            <p>\n              {{profile.content}}\n            </p>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div id=\"ourexperts-btn-more\">\n        <ion-button color=\"success\" (click)=\"onClickViewOurExperts()\">Browse Experts</ion-button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"landing-item\" id=\"briefinfo-container\">\n    <div class=\"landing-item-header\">\n      <div></div>\n      <p>\n        We have logs of milestones\n      </p>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"milestones-item\">\n            <img src=\"assets/icons/icon-round-checked.svg\" />\n            <p>\n              {{numExperts}}<span>&nbsp;&nbsp;Experts</span>\n            </p>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"milestones-item\">\n            <img src=\"assets/icons/icon-round-checked.svg\" />\n            <p>\n              {{numCategories}}<span>&nbsp;&nbsp;Categories</span>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"milestones-item\">\n            <img src=\"assets/icons/icon-round-checked.svg\" />\n            <p>\n              {{numReviewedDoc}}<span>&nbsp;&nbsp;Reviewed</span>\n            </p>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"landing-item\" id=\"popular-review-container\">\n    <div class=\"landing-item-header\">\n      <div></div>\n      <p>\n        Reviews\n      </p>\n    </div>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let review of arrReviews\">\n        <div class=\"review-item\">\n          <div class=\"review-img\">\n            <div>\n              <img [src]=\"review.img\"/>\n            </div>\n          </div>\n          <div class=\"review-content\">\n            <p>\n              {{review.name}}\n            </p>\n            <p>\n              {{review.feedback}}\n            </p>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div id=\"landing-footer\">\n    <div>\n      <img src=\"assets/imgs/logo-veridoc.svg\" />\n    </div>\n    <p>\n      Email: {{contactInfo.email}}\n    </p>\n    <p>\n      Contact: {{contactInfo.number}}\n    </p>\n    <ion-grid id=\"landing-footer-menu\">\n      <ion-row>\n        <ion-col size-sm=\"4\" size-xs=\"6\" size-xl=\"2\" *ngFor=\"let menu of arrFooterMenus\">\n          <p (click)=\"onClickFooterMenuItem(menu.id)\">\n            {{menu.title}}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div id=\"landing-footer-social\">\n      <ion-icon name=\"logo-googleplus\"></ion-icon>\n      <ion-icon name=\"logo-facebook\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar img {\n  margin-left: 16px; }\n\nion-slides {\n  max-height: 60vh; }\n\nion-slides ion-slide {\n    max-height: 60vh; }\n\n.landing-item-header p {\n  margin: 16px 0; }\n\n.landing-carousel-container {\n  position: relative;\n  max-height: 60vh; }\n\n.landing-carousel-container img {\n  max-height: 60vh;\n  width: 100%; }\n\n.landing-btn-getexperts {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  bottom: 1em;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.landing-item {\n  padding: 16px; }\n\n.landing-item-header div {\n  width: 20vw;\n  height: .6em;\n  margin: auto;\n  background-color: #3F9FEF; }\n\n.landing-item-header p {\n  text-align: center;\n  font-size: 2.8em;\n  color: #505050; }\n\n.howitworks-item {\n  margin-bottom: 3vh; }\n\n.howitworks-item-header {\n  position: relative; }\n\n.howitworks-item-header > p:first-child {\n  margin: 0;\n  color: #EDEDED; }\n\n.howitworks-item-header > p:nth-child(2) {\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  margin: 0;\n  color: #3F9FEF;\n  font-weight: bold;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.howitworks-item-content p,\n.whyveridoc-content p {\n  color: #969EA5; }\n\n.whyveridoc-header {\n  text-align: center; }\n\n.whyveridoc-header p {\n    color: #505050;\n    font-size: 1.4em; }\n\n.whyveridoc-item-content {\n  margin-bottom: 6vh; }\n\n.whyveridoc-item-content > p:nth-child(3) {\n  color: #505050;\n  font-size: 1.2em;\n  font-weight: bold; }\n\n.whyveridoc-item-content > p:nth-child(4) {\n  color: #929BA2; }\n\n.whyveridoc-btn-container {\n  text-align: center;\n  width: 100%; }\n\n#ourexperts-container {\n  background-color: #F8F4F4; }\n\n.ourexperts-content {\n  margin-top: 8vh; }\n\n.ourexperts-item-content {\n  height: 100%;\n  margin-bottom: 3vh;\n  padding: 16px; }\n\n.ourexperts-item-content > div {\n  width: 4.8em;\n  height: 4.8em;\n  margin: auto;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.ourexperts-item-content > div img {\n    width: 100%; }\n\n.ourexperts-item-content > div p {\n    font-size: 1.2em; }\n\n.ourexperts-item-content > p:nth-child(2) {\n  color: #505050;\n  margin: 5px 0; }\n\n.ourexperts-item-content > p:nth-child(4) {\n  color: #A8AEB4;\n  margin-bottom: 5px 0 8vh 0; }\n\n#ourexperts-btn-more {\n  width: 100%;\n  text-align: center; }\n\n#briefinfo-container ion-grid p {\n  margin: 5px 0 5px 16px;\n  font-size: 1.4em;\n  color: #4889D9; }\n\n#briefinfo-container ion-grid p span {\n    font-size: .6em; }\n\n.review-item {\n  display: flex;\n  margin-bottom: 3vh;\n  padding: 16px; }\n\n.review-img {\n  flex: 0.5;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.review-img div {\n    width: 4.8em;\n    height: 4.8em;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.review-img div img {\n      width: 100%; }\n\n.review-content {\n  flex: 2;\n  padding-left: 16px; }\n\n.review-content p {\n    text-align: left; }\n\n.review-content > p:first-child {\n  font-size: 1em;\n  color: #3a4652; }\n\n.review-content > p:nth-child(2) {\n  font-size: .8em;\n  color: #6e7b88; }\n\n#landing-footer {\n  padding: 16px;\n  background: #484848; }\n\n#landing-footer > p {\n  color: #c1c1c1;\n  font-size: .8em;\n  margin: 5px 0; }\n\n#landing-footer-menu ion-row ion-col p {\n  color: #c1c1c1;\n  font-size: 1em;\n  margin: 5px 0; }\n\n.milestones-item {\n  display: flex;\n  align-items: center; }\n\n.milestones-item img {\n    height: 1.6em; }\n\n@media only screen and (max-width: 640px) {\n  .btn-side-navmenu {\n    display: none; }\n  .howitworks-item {\n    display: initial; }\n  .howitworks-img {\n    display: none; }\n  .howitworks-item-header > p:first-child {\n    font-size: 12em; }\n  .howitworks-item-header > p:nth-child(2) {\n    font-size: 1.8em; }\n  .howitworks-item-content p {\n    font-size: 1.2em; } }\n\n@media only screen and (min-width: 641px) {\n  .btn-side-menu {\n    display: none; }\n  .howitworks-item {\n    display: flex; }\n  .howitworks-txt {\n    flex: 1; }\n  .howitworks-img {\n    flex: 1; }\n  .howitworks-img {\n    display: block;\n    margin: auto;\n    text-align: center; }\n    .howitworks-img img {\n      width: 250px; }\n  .howitworks-item-header > p:first-child {\n    font-size: 6em; }\n  .howitworks-item-header > p:nth-child(2) {\n    font-size: 1.2em; }\n  .howitworks-item-content p {\n    font-size: .9em; } }\n\n#landing-footer-social {\n  width: 100%;\n  text-align: right;\n  padding: 16px; }\n\n#landing-footer-social ion-icon {\n    margin-left: 2vw;\n    color: var(--ion-color-medium);\n    font-size: 1.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGdCQUFnQixFQUFBOztBQUl4QjtFQUVRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFMakM7RUFTUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxTQUFTO0VBQ1QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFDQUE2QjtVQUE3Qiw2QkFBNkIsRUFBQTs7QUFHakM7O0VBR1EsY0FBYyxFQUFBOztBQUl0QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUlRLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFMdEI7SUFRUSxXQUFXLEVBQUE7O0FBUm5CO0lBWVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUdZLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUwxQjtJQVFnQixlQUFlLEVBQUE7O0FBTS9CO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBSjNCO0lBTVEsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBVHhCO01BV1ksV0FBVyxFQUFBOztBQUt2QjtFQUNJLE9BQU87RUFDUCxrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUlnQixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFNN0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsYUFBYSxFQUFBOztBQUlyQjtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxlQUFlLEVBQUE7RUFHbkI7SUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtJQUVRLGdCQUFnQixFQUFBLEVBQ25COztBQUlUO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxPQUFPLEVBQUE7RUFHWDtJQUNJLE9BQU8sRUFBQTtFQUdYO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtJQUh0QjtNQUtRLFlBQVksRUFBQTtFQUlwQjtJQUNJLGNBQWMsRUFBQTtFQUdsQjtJQUNJLGdCQUFnQixFQUFBO0VBR3BCO0lBRVEsZUFBZSxFQUFBLEVBQ2xCOztBQUlUO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBSGpCO0lBS1EsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxufVxuXG5pb24tc2xpZGVzIHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgfVxufVxuXG4ubGFuZGluZy1pdGVtLWhlYWRlciB7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgIH1cbn1cblxuLmxhbmRpbmctY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbn1cblxuLmxhbmRpbmctY2Fyb3VzZWwtY29udGFpbmVyIGltZyB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxhbmRpbmctYnRuLWdldGV4cGVydHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAxZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZGluZy1pdGVtIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubGFuZGluZy1pdGVtLWhlYWRlciB7XG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgIGhlaWdodDogLjZlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y5RkVGO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMi44ZW07XG4gICAgICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgIH1cbn1cblxuLmhvd2l0d29ya3MtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xufSAgICBcblxuLmhvd2l0d29ya3MtaXRlbS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvd2l0d29ya3MtaXRlbS1oZWFkZXI+cDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjRURFREVEO1xufVxuXG4uaG93aXR3b3Jrcy1pdGVtLWhlYWRlcj5wOm50aC1jaGlsZCgyKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzNGOUZFRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmhvd2l0d29ya3MtaXRlbS1jb250ZW50LFxuLndoeXZlcmlkb2MtY29udGVudCB7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOTY5RUE1O1xuICAgIH1cbn1cblxuLndoeXZlcmlkb2MtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM1MDUwNTA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgfVxufVxuXG4ud2h5dmVyaWRvYy1pdGVtLWNvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDZ2aDtcbn1cblxuLndoeXZlcmlkb2MtaXRlbS1jb250ZW50PnA6bnRoLWNoaWxkKDMpIHtcbiAgICBjb2xvcjogIzUwNTA1MDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud2h5dmVyaWRvYy1pdGVtLWNvbnRlbnQ+cDpudGgtY2hpbGQoNCkge1xuICAgIGNvbG9yOiAjOTI5QkEyO1xufVxuXG4ud2h5dmVyaWRvYy1idG4tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNvdXJleHBlcnRzLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjRGNDtcbn1cblxuLm91cmV4cGVydHMtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xufVxuXG4ub3VyZXhwZXJ0cy1pdGVtLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLm91cmV4cGVydHMtaXRlbS1jb250ZW50ID4gZGl2IHtcbiAgICB3aWR0aDogNC44ZW07XG4gICAgaGVpZ2h0OiA0LjhlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi5vdXJleHBlcnRzLWl0ZW0tY29udGVudD5wOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6ICM1MDUwNTA7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLm91cmV4cGVydHMtaXRlbS1jb250ZW50PnA6bnRoLWNoaWxkKDQpIHtcbiAgICBjb2xvcjogI0E4QUVCNDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggMCA4dmggMDtcbn1cblxuI291cmV4cGVydHMtYnRuLW1vcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2JyaWVmaW5mby1jb250YWluZXIge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwIDVweCAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDg4OUQ5O1xuICAgICAgICBcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJldmlldy1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmV2aWV3LWltZyB7XG4gICAgZmxleDogMC41O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogNC44ZW07XG4gICAgICAgIGhlaWdodDogNC44ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICAgIGZsZXg6IDI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLnJldmlldy1jb250ZW50ID4gcDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICMzYTQ2NTI7XG59XG5cbi5yZXZpZXctY29udGVudCA+IHA6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICM2ZTdiODg7XG59XG5cbiNsYW5kaW5nLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjNDg0ODQ4O1xufVxuXG4jbGFuZGluZy1mb290ZXIgPiBwIHtcbiAgICBjb2xvcjogI2MxYzFjMTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuI2xhbmRpbmctZm9vdGVyLW1lbnUge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24tY29sICB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2MxYzFjMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWlsZXN0b25lcy1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxLjZlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuYnRuLXNpZGUtbmF2bWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pdGVtLWhlYWRlcj5wOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxMmVtO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWl0ZW0taGVhZGVyPnA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pdGVtLWNvbnRlbnQge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcbiAgICAuYnRuLXNpZGUtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtdHh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pbWcge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWl0ZW0taGVhZGVyPnA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDZlbTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pdGVtLWhlYWRlcj5wOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbS1jb250ZW50IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNsYW5kaW5nLWZvb3Rlci1zb2NpYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _modal_contactus_contactus_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/contactus/contactus.page */ "./src/app/pages/modal/contactus/contactus.page.ts");





var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, modalCtrl, altCtrl, event, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.altCtrl = altCtrl;
        this.event = event;
        this.platform = platform;
        /**
         * Array of Menu items for Browser platform.
         */
        this.arrFooterMenus = [
            {
                id: 0,
                title: "Home"
            },
            {
                id: 1,
                title: "Contact"
            },
            {
                id: 2,
                title: "How it works"
            },
            {
                id: 3,
                title: "Why Veridoc"
            },
            {
                id: 4,
                title: "Our Team"
            },
            {
                id: 5,
                title: "FAQ"
            },
            {
                id: 6,
                title: "Terms of Use"
            },
        ];
        /**
         * Array of images for Carousel
         */
        this.arrImgs = [
            'assets/imgs/img-carousel_1.jpg',
            'assets/imgs/img-carousel_2.jpg',
            'assets/imgs/img-carousel_3.jpg'
        ];
        /**
         * Options for slide component
         */
        this.slideOpts = {
            initialSlide: 0,
            zoom: false,
            slidesPerView: 1
        };
        this.carouselSlideOpts = {
            initialSlide: 0,
            zoom: false,
            slidesPerView: 1
        };
        /**
         * Landing Page contents(How it works, Why veridoc, Team behind veridoc)
         */
        this.landingPageContents = [
            {
                title: "How it works",
                childs: [
                    {
                        id: 1,
                        header: "",
                        subheader: "Create Free Profile",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-landing-tmp.svg"
                    },
                    {
                        id: 2,
                        header: "",
                        subheader: "Upload Documents",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-landing-tmp.svg"
                    },
                    {
                        id: 3,
                        header: "",
                        subheader: "Documents Verified",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-landing-tmp.svg"
                    },
                ]
            },
            {
                title: "Why VeriDoc",
                childs: [
                    {
                        id: 1,
                        header: "",
                        subheader: "24 Hours Service",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-whyveridoc.svg"
                    },
                    {
                        id: 2,
                        header: "",
                        subheader: "24 Hours Service",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-whyveridoc.svg"
                    },
                    {
                        id: 3,
                        header: "",
                        subheader: "24 Hours Service",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email",
                        img: "assets/imgs/img-whyveridoc.svg"
                    }
                ]
            },
            {
                title: "Team Behind VeriDoc",
                childs: [
                    {
                        id: 1,
                        header: "John Smith",
                        subheader: "CEO",
                        img: "assets/imgs/img-profile1.jpg",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
                    },
                    {
                        id: 2,
                        header: "John Smith",
                        subheader: "CEO",
                        img: "assets/imgs/img-profile2.jpg",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
                    },
                    {
                        id: 3,
                        header: "John Smith",
                        subheader: "CEO",
                        img: "assets/imgs/img-profile3.jpg",
                        content: "It takes only two minutes to create a user at VeriDoc. It's completely free and you can easily via Facebook, Google or your Email"
                    },
                ]
            }
        ];
        /**
         * Experts Number
         */
        this.numExperts = 100;
        /**
         * Categories Number
         */
        this.numCategories = _constants__WEBPACK_IMPORTED_MODULE_3__["CATEGORIES"].length;
        /**
         * Reviewd Doc Number
         */
        this.numReviewedDoc = 500;
        /**
         * Contact Info constants
         * @see ../constants.ts
         */
        this.contactInfo = _constants__WEBPACK_IMPORTED_MODULE_3__["CONTACTINFO"];
        /**
         * Array Reviews
         */
        this.arrReviews = [
            {
                name: "John Doe",
                rating: 5,
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: "assets/imgs/img-profile1.jpg",
            },
            {
                name: "John Doe",
                rating: 4,
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: "assets/imgs/img-profile2.jpg",
            },
            {
                name: "John Doe",
                rating: 5,
                feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: "assets/imgs/img-profile3.jpg",
            },
        ];
        this.event.subscribe("onLoginStatusChange", function (data) {
            _this.initPage();
        });
    }
    LandingPage.prototype.ngOnInit = function () { };
    LandingPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Init page
     */
    LandingPage.prototype.initPage = function () {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
        this.userRole = localStorage.getItem("role");
        if (!this.platform.is("mobile")) {
            this.slideOpts.slidesPerView = 3;
        }
    };
    /**
     * Scroll to specific position
     * @param index
     * @returns null
     */
    LandingPage.prototype.onClickFooterMenuItem = function (index) {
        switch (index) {
            case 0:
                this.landingCarousel.nativeElement.scrollIntoView({ behavior: "smooth" });
                break;
            case 1:
                this.onClickContactUs();
                break;
            case 2:
                this.divHowWorks.nativeElement.scrollIntoView({ behavior: "smooth" });
                break;
            case 3:
                this.divVerify.nativeElement.scrollIntoView({ behavior: "smooth" });
                break;
            case 4:
                this.divOurExperts.nativeElement.scrollIntoView({ behavior: "smooth" });
                break;
            case 5:
                this.onClickFaq();
                break;
            case 6:
                this.onClickViewTermsofUse();
                break;
            default:
                break;
        }
    };
    /**
     * Navigate to Login page
     */
    LandingPage.prototype.onClickGetStarted = function () {
        this.navCtrl.navigateForward('/login');
    };
    /**
     * Navigate to Review page
     * @param evt
     * @returns null
     */
    LandingPage.prototype.onClickGetExpertsReviewBtn = function (evt) {
        evt.preventDefault();
        this.navCtrl.navigateForward('/menu/expertsreview/null');
    };
    /**
     * View All Experts
     */
    LandingPage.prototype.onClickViewOurExperts = function () {
        this.navCtrl.navigateForward('/our-experts');
    };
    /**
     * Scroll to top
     */
    LandingPage.prototype.onClickToTop = function () {
        this.landingCarousel.nativeElement.scrollIntoView({ behavior: "smooth" });
    };
    /**
     * Navigate to FAQ page
     */
    LandingPage.prototype.onClickFaq = function () {
        this.navCtrl.navigateForward('faq');
    };
    /**
     * Show Contact Us Modal
     */
    LandingPage.prototype.onClickContactUs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var contactUsModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_contactus_contactus_page__WEBPACK_IMPORTED_MODULE_4__["ContactusPage"],
                            cssClass: 'info-modal'
                        })];
                    case 1:
                        contactUsModal = _a.sent();
                        return [4 /*yield*/, contactUsModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Show Term of Use Modal
     */
    LandingPage.prototype.onClickViewTermsofUse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var termsAlt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Terms of Use",
                            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis neque et odio semper tincidunt. In vel odio id elit lacinia finibus vel nec arcu. Donec at lacinia elit, vel accumsan ligula.",
                            buttons: ['OK']
                        })];
                    case 1:
                        termsAlt = _a.sent();
                        return [4 /*yield*/, termsAlt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear event listener
     */
    LandingPage.prototype.ionViewWillLeave = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('landingCarousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingPage.prototype, "landingCarousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('whyverify'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingPage.prototype, "divVerify", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('howitworks'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingPage.prototype, "divHowWorks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ourexperts'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingPage.prototype, "divOurExperts", void 0);
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/pages/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], LandingPage);
    return LandingPage;
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
//# sourceMappingURL=landing-landing-module.js.map