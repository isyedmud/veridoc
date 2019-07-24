(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

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

module.exports = "ion-toolbar img {\n  margin-left: 16px; }\n\nion-slides {\n  max-height: 60vh; }\n\nion-slides ion-slide {\n    max-height: 60vh; }\n\n.landing-item-header p {\n  margin: 16px 0; }\n\n.landing-carousel-container {\n  position: relative;\n  max-height: 60vh; }\n\n.landing-carousel-container img {\n  max-height: 60vh;\n  width: 100%; }\n\n.landing-btn-getexperts {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  bottom: 1em;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.landing-item {\n  padding: 16px; }\n\n.landing-item-header div {\n  width: 20vw;\n  height: .6em;\n  margin: auto;\n  background-color: #3F9FEF; }\n\n.landing-item-header p {\n  text-align: center;\n  font-size: 2.8em;\n  color: #505050; }\n\n.howitworks-item {\n  margin-bottom: 3vh; }\n\n.howitworks-item-header {\n  position: relative; }\n\n.howitworks-item-header > p:first-child {\n  margin: 0;\n  color: #EDEDED; }\n\n.howitworks-item-header > p:nth-child(2) {\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  margin: 0;\n  color: #3F9FEF;\n  font-weight: bold;\n  transform: translate(0, -50%); }\n\n.howitworks-item-content p,\n.whyveridoc-content p {\n  color: #969EA5; }\n\n.whyveridoc-header {\n  text-align: center; }\n\n.whyveridoc-header p {\n    color: #505050;\n    font-size: 1.4em; }\n\n.whyveridoc-item-content {\n  margin-bottom: 6vh; }\n\n.whyveridoc-item-content > p:nth-child(3) {\n  color: #505050;\n  font-size: 1.2em;\n  font-weight: bold; }\n\n.whyveridoc-item-content > p:nth-child(4) {\n  color: #929BA2; }\n\n.whyveridoc-btn-container {\n  text-align: center;\n  width: 100%; }\n\n#ourexperts-container {\n  background-color: #F8F4F4; }\n\n.ourexperts-content {\n  margin-top: 8vh; }\n\n.ourexperts-item-content {\n  height: 100%;\n  margin-bottom: 3vh;\n  padding: 16px; }\n\n.ourexperts-item-content > div {\n  width: 4.8em;\n  height: 4.8em;\n  margin: auto;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.ourexperts-item-content > div img {\n    width: 100%; }\n\n.ourexperts-item-content > div p {\n    font-size: 1.2em; }\n\n.ourexperts-item-content > p:nth-child(2) {\n  color: #505050;\n  margin: 5px 0; }\n\n.ourexperts-item-content > p:nth-child(4) {\n  color: #A8AEB4;\n  margin-bottom: 5px 0 8vh 0; }\n\n#ourexperts-btn-more {\n  width: 100%;\n  text-align: center; }\n\n#briefinfo-container ion-grid p {\n  margin: 5px 0 5px 16px;\n  font-size: 1.4em;\n  color: #4889D9; }\n\n#briefinfo-container ion-grid p span {\n    font-size: .6em; }\n\n.review-item {\n  display: flex;\n  margin-bottom: 3vh;\n  padding: 16px; }\n\n.review-img {\n  flex: 0.5;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.review-img div {\n    width: 4.8em;\n    height: 4.8em;\n    border-radius: 50%;\n    overflow: hidden; }\n\n.review-img div img {\n      width: 100%; }\n\n.review-content {\n  flex: 2;\n  padding-left: 16px; }\n\n.review-content p {\n    text-align: left; }\n\n.review-content > p:first-child {\n  font-size: 1em;\n  color: #3a4652; }\n\n.review-content > p:nth-child(2) {\n  font-size: .8em;\n  color: #6e7b88; }\n\n#landing-footer {\n  padding: 16px;\n  background: #484848; }\n\n#landing-footer > p {\n  color: #c1c1c1;\n  font-size: .8em;\n  margin: 5px 0; }\n\n#landing-footer-menu ion-row ion-col p {\n  color: #c1c1c1;\n  font-size: 1em;\n  margin: 5px 0; }\n\n.milestones-item {\n  display: flex;\n  align-items: center; }\n\n.milestones-item img {\n    height: 1.6em; }\n\n@media only screen and (max-width: 640px) {\n  .btn-side-navmenu {\n    display: none; }\n  .howitworks-item {\n    display: initial; }\n  .howitworks-img {\n    display: none; }\n  .howitworks-item-header > p:first-child {\n    font-size: 12em; }\n  .howitworks-item-header > p:nth-child(2) {\n    font-size: 1.8em; }\n  .howitworks-item-content p {\n    font-size: 1.2em; } }\n\n@media only screen and (min-width: 641px) {\n  .btn-side-menu {\n    display: none; }\n  .howitworks-item {\n    display: flex; }\n  .howitworks-txt {\n    flex: 1; }\n  .howitworks-img {\n    flex: 1; }\n  .howitworks-img {\n    display: block;\n    margin: auto;\n    text-align: center; }\n    .howitworks-img img {\n      width: 250px; }\n  .howitworks-item-header > p:first-child {\n    font-size: 6em; }\n  .howitworks-item-header > p:nth-child(2) {\n    font-size: 1.2em; }\n  .howitworks-item-content p {\n    font-size: .9em; } }\n\n#landing-footer-social {\n  width: 100%;\n  text-align: right;\n  padding: 16px; }\n\n#landing-footer-social ion-icon {\n    margin-left: 2vw;\n    color: var(--ion-color-medium);\n    font-size: 1.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGdCQUFnQixFQUFBOztBQUl4QjtFQUVRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUVRLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUxqQztFQVNRLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUl0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFNBQVM7RUFDVCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7O0FBR2pDOztFQUdRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFJUSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBTHRCO0lBUVEsV0FBVyxFQUFBOztBQVJuQjtJQVlRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFHWSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFMMUI7SUFRZ0IsZUFBZSxFQUFBOztBQU0vQjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUozQjtJQU1RLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBOztBQVR4QjtNQVdZLFdBQVcsRUFBQTs7QUFLdkI7RUFDSSxPQUFPO0VBQ1Asa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFJZ0IsY0FBYztFQUNkLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBTTdCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUZ2QjtJQUlRLGFBQWEsRUFBQTs7QUFJckI7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUNJLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksZUFBZSxFQUFBO0VBR25CO0lBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7SUFFUSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFJVDtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksT0FBTyxFQUFBO0VBR1g7SUFDSSxPQUFPLEVBQUE7RUFHWDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7SUFIdEI7TUFLUSxZQUFZLEVBQUE7RUFJcEI7SUFDSSxjQUFjLEVBQUE7RUFHbEI7SUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtJQUVRLGVBQWUsRUFBQSxFQUNsQjs7QUFJVDtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUhqQjtJQUtRLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBpb24tc2xpZGUge1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIH1cbn1cblxuLmxhbmRpbmctaXRlbS1oZWFkZXIge1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG59XG5cbi5sYW5kaW5nLWNhcm91c2VsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG59XG5cbi5sYW5kaW5nLWNhcm91c2VsLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYW5kaW5nLWJ0bi1nZXRleHBlcnRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxhbmRpbmctaXRlbSB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLmxhbmRpbmctaXRlbS1oZWFkZXIge1xuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICBoZWlnaHQ6IC42ZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNGOUZFRjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIuOGVtO1xuICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICB9XG59XG5cbi5ob3dpdHdvcmtzLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbn0gICAgXG5cbi5ob3dpdHdvcmtzLWl0ZW0taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ob3dpdHdvcmtzLWl0ZW0taGVhZGVyPnA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogI0VERURFRDtcbn1cblxuLmhvd2l0d29ya3MtaXRlbS1oZWFkZXI+cDpudGgtY2hpbGQoMikge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1JTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzRjlGRUY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5ob3dpdHdvcmtzLWl0ZW0tY29udGVudCxcbi53aHl2ZXJpZG9jLWNvbnRlbnQge1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzk2OUVBNTtcbiAgICB9XG59XG5cbi53aHl2ZXJpZG9jLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIH1cbn1cblxuLndoeXZlcmlkb2MtaXRlbS1jb250ZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiA2dmg7XG59XG5cbi53aHl2ZXJpZG9jLWl0ZW0tY29udGVudD5wOm50aC1jaGlsZCgzKSB7XG4gICAgY29sb3I6ICM1MDUwNTA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndoeXZlcmlkb2MtaXRlbS1jb250ZW50PnA6bnRoLWNoaWxkKDQpIHtcbiAgICBjb2xvcjogIzkyOUJBMjtcbn1cblxuLndoeXZlcmlkb2MtYnRuLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jb3VyZXhwZXJ0cy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY0RjQ7XG59XG5cbi5vdXJleHBlcnRzLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbn1cblxuLm91cmV4cGVydHMtaXRlbS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5vdXJleHBlcnRzLWl0ZW0tY29udGVudCA+IGRpdiB7XG4gICAgd2lkdGg6IDQuOGVtO1xuICAgIGhlaWdodDogNC44ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4ub3VyZXhwZXJ0cy1pdGVtLWNvbnRlbnQ+cDpudGgtY2hpbGQoMikge1xuICAgIGNvbG9yOiAjNTA1MDUwO1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbi5vdXJleHBlcnRzLWl0ZW0tY29udGVudD5wOm50aC1jaGlsZCg0KSB7XG4gICAgY29sb3I6ICNBOEFFQjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4IDAgOHZoIDA7XG59XG5cbiNvdXJleHBlcnRzLWJ0bi1tb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNicmllZmluZm8tY29udGFpbmVyIHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHggMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICBjb2xvcjogIzQ4ODlEOTtcbiAgICAgICAgXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC42ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yZXZpZXctaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLnJldmlldy1pbWcge1xuICAgIGZsZXg6IDAuNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDQuOGVtO1xuICAgICAgICBoZWlnaHQ6IDQuOGVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJldmlldy1jb250ZW50IHtcbiAgICBmbGV4OiAyO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbi5yZXZpZXctY29udGVudCA+IHA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjM2E0NjUyO1xufVxuXG4ucmV2aWV3LWNvbnRlbnQgPiBwOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAjNmU3Yjg4O1xufVxuXG4jbGFuZGluZy1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogIzQ4NDg0ODtcbn1cblxuI2xhbmRpbmctZm9vdGVyID4gcCB7XG4gICAgY29sb3I6ICNjMWMxYzE7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbiNsYW5kaW5nLWZvb3Rlci1tZW51IHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWNvbCAge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjMWMxYzE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pbGVzdG9uZXMtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMS42ZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLmJ0bi1zaWRlLW5hdm1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbS1oZWFkZXI+cDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJlbTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pdGVtLWhlYWRlcj5wOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbS1jb250ZW50IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MXB4KSB7XG4gICAgLmJ0bi1zaWRlLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLXR4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaW1nIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG93aXR3b3Jrcy1pdGVtLWhlYWRlcj5wOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgfVxuXG4gICAgLmhvd2l0d29ya3MtaXRlbS1oZWFkZXI+cDpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cblxuICAgIC5ob3dpdHdvcmtzLWl0ZW0tY29udGVudCB7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jbGFuZGluZy1mb290ZXItc29jaWFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");






var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, modalCtrl, altCtrl, event, platform, loadingCtrl, apiService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.altCtrl = altCtrl;
        this.event = event;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
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
                childs: []
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
        this.getHighlightExperts();
    };
    LandingPage.prototype.getHighlightExperts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var expertsLoader, expertsResult_1, tmpHighlightedExperts_1, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..."
                        })];
                    case 1:
                        expertsLoader = _a.sent();
                        return [4 /*yield*/, expertsLoader.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.apiService.getHighlightedExperts().toPromise()];
                    case 4:
                        expertsResult_1 = _a.sent();
                        console.log(expertsResult_1.data);
                        tmpHighlightedExperts_1 = [];
                        Object.keys(expertsResult_1.data).map(function (key) {
                            tmpHighlightedExperts_1.push({
                                id: key,
                                header: expertsResult_1.data[key].fname + " " + expertsResult_1.data[key].lname,
                                subheader: expertsResult_1.data[key].headline,
                                img: expertsResult_1.data[key].avatar,
                                content: expertsResult_1.data[key].expertbio
                            });
                        });
                        this.landingPageContents[2].childs = tmpHighlightedExperts_1;
                        expertsLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        expertsLoader.dismiss();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map