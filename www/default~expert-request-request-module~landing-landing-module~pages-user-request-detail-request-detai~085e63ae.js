(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~expert-request-request-module~landing-landing-module~pages-user-request-detail-request-detai~085e63ae"],{

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

/***/ "./src/app/pages/modal/contactus/contactus.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/modal/contactus/contactus.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"stacked\">\n      Email\n    </ion-label>\n    <ion-input type=\"email\" disabled=\"true\" [value]=\"contactInfo.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">\n      Number\n    </ion-label>\n    <ion-input type=\"email\" disabled=\"true\" [value]=\"contactInfo.number\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">\n      User Email\n    </ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"userEmail\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">\n      User Phone Number\n    </ion-label>\n    <ion-input type=\"tel\" [(ngModel)]=\"userPhone\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-textarea placeholder=\"Enter your message here...\" [(ngModel)]=\"userMsg\"></ion-textarea>\n  </ion-item>\n\n  <div id=\"contact-modal-btn-send\">\n    <ion-button color=\"success\" (click)=\"onClickSendBtn()\">Send</ion-button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/modal/contactus/contactus.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/modal/contactus/contactus.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact-modal-btn-send {\n  width: 100%;\n  text-align: center;\n  margin-top: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbW9kYWwvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3QtbW9kYWwtYnRuLXNlbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/modal/contactus/contactus.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/modal/contactus/contactus.page.ts ***!
  \*********************************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ContactusPage = /** @class */ (function () {
    function ContactusPage(emailComposer, modalCtrl) {
        this.emailComposer = emailComposer;
        this.modalCtrl = modalCtrl;
        this.contactInfo = _constants__WEBPACK_IMPORTED_MODULE_2__["CONTACTINFO"];
        this.userEmail = "";
        this.userPhone = "";
        this.userMsg = "";
    }
    ContactusPage.prototype.ngOnInit = function () {
    };
    ContactusPage.prototype.onClickSendBtn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // let email = {
                //   to: this.contactInfo.email,
                //   cc: '',
                //   bcc: [],
                //   attachments: [],
                //   subject: "Contact message",
                //   body: this.userMsg,
                //   isHtml: false
                // }
                // await this.emailComposer.open(email);
                this.modalCtrl.dismiss();
                return [2 /*return*/];
            });
        });
    };
    ContactusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.page.html */ "./src/app/pages/modal/contactus/contactus.page.html"),
            styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/pages/modal/contactus/contactus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], ContactusPage);
    return ContactusPage;
}());



/***/ }),

/***/ "./src/app/pages/modal/expert-comment/expert-comment.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal/expert-comment/expert-comment.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"strExpertComment\" [placeholder]=\"placeholder\" rows=\"8\"></ion-textarea>\n  </ion-item>\n\n  <div class=\"comment-modal-footer\">\n    <div>\n      <ion-button expand=\"full\" (click)=\"onClickSendExpertComment()\">\n        Send\n      </ion-button>\n    </div>\n    <div>\n      <ion-button expand=\"full\" (click)=\"onClickCancelExpertComment()\">\n        Cancel\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/modal/expert-comment/expert-comment.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal/expert-comment/expert-comment.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-modal-footer {\n  display: flex;\n  margin: 3vh 0; }\n  .comment-modal-footer div {\n    flex: 1;\n    padding: 0 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbW9kYWwvZXhwZXJ0LWNvbW1lbnQvZXhwZXJ0LWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGFBQWEsRUFBQTtFQUZqQjtJQUlRLE9BQU87SUFDUCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbC9leHBlcnQtY29tbWVudC9leHBlcnQtY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1tb2RhbC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAzdmggMDtcbiAgICBkaXYge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/modal/expert-comment/expert-comment.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal/expert-comment/expert-comment.page.ts ***!
  \*******************************************************************/
/*! exports provided: ExpertCommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertCommentPage", function() { return ExpertCommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ExpertCommentPage = /** @class */ (function () {
    function ExpertCommentPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.title = "";
        this.placeholder = "";
        this.strExpertComment = "";
    }
    ExpertCommentPage.prototype.ngOnInit = function () {
    };
    ExpertCommentPage.prototype.onClickSendExpertComment = function () {
        this.modalCtrl.dismiss(this.strExpertComment);
    };
    ExpertCommentPage.prototype.onClickCancelExpertComment = function () {
        this.modalCtrl.dismiss(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpertCommentPage.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('placeholder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExpertCommentPage.prototype, "placeholder", void 0);
    ExpertCommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expert-comment',
            template: __webpack_require__(/*! ./expert-comment.page.html */ "./src/app/pages/modal/expert-comment/expert-comment.page.html"),
            styles: [__webpack_require__(/*! ./expert-comment.page.scss */ "./src/app/pages/modal/expert-comment/expert-comment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ExpertCommentPage);
    return ExpertCommentPage;
}());



/***/ }),

/***/ "./src/app/pages/modal/feedback/feedback.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/modal/feedback/feedback.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <rating [(ngModel)]=\"rate\" readonly=\"false\" size=\"default\" (ngModelChange)=\"onModelChange($event)\">\n    </rating>\n  </div>\n  <ion-item>\n    <ion-textarea [(ngModel)]=\"strReview\" placeholder=\"Please input your feedback\" rows=\"6\"></ion-textarea>\n  </ion-item>\n\n  <div class=\"feedback-control\">\n    <div>\n      <ion-button expand=\"full\" (click)=\"onClickProvideFeedback()\">Send</ion-button>\n    </div>\n    <div>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"onClickCancelBtn()\">cancel</ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/modal/feedback/feedback.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/modal/feedback/feedback.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback-control {\n  margin-top: 4vh;\n  display: flex; }\n  .feedback-control div {\n    padding: 0 8px;\n    flex: 1;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvbW9kYWwvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGFBQWEsRUFBQTtFQUZqQjtJQUlRLGNBQWM7SUFDZCxPQUFPO0lBQ1Asa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbC9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlZGJhY2stY29udHJvbCB7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/modal/feedback/feedback.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal/feedback/feedback.page.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(apiService, loadingCtrl, modalCtrl) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.strReview = "";
        this.rate = 0;
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    FeedbackPage.prototype.onModelChange = function (evt) {
        console.log(evt);
    };
    FeedbackPage.prototype.onClickProvideFeedback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var feedbackLoader, feedback;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        feedbackLoader = _a.sent();
                        return [4 /*yield*/, feedbackLoader.present()];
                    case 2:
                        _a.sent();
                        feedback = {
                            review: this.strReview,
                            mark: this.rate,
                            expertsId: this.expertId,
                            userId: localStorage.getItem("uid"),
                            requestId: this.requestId
                        };
                        this.apiService.provideFeedback(feedback)
                            .subscribe(function () {
                            feedbackLoader.dismiss();
                            _this.modalCtrl.dismiss(0);
                        }, function (error) {
                            console.log(error);
                            feedbackLoader.dismiss();
                            _this.modalCtrl.dismiss(1);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedbackPage.prototype.onClickCancelBtn = function () {
        this.modalCtrl.dismiss(1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expertId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeedbackPage.prototype, "expertId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('requestId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeedbackPage.prototype, "requestId", void 0);
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/pages/modal/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/pages/modal/feedback/feedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], FeedbackPage);
    return FeedbackPage;
}());



/***/ }),

/***/ "./src/app/pages/modal/modal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus/contactus.page */ "./src/app/pages/modal/contactus/contactus.page.ts");
/* harmony import */ var _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback/feedback.page */ "./src/app/pages/modal/feedback/feedback.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expert-comment/expert-comment.page */ "./src/app/pages/modal/expert-comment/expert-comment.page.ts");









var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactusPage"],
                _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"],
                _expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_8__["ExpertCommentPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
            ],
            exports: [
                _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactusPage"],
                _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"],
                _expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_8__["ExpertCommentPage"]
            ],
            entryComponents: [
                _contactus_contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactusPage"],
                _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"],
                _expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_8__["ExpertCommentPage"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~expert-request-request-module~landing-landing-module~pages-user-request-detail-request-detai~085e63ae.js.map