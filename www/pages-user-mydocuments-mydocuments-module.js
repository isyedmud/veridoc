(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-mydocuments-mydocuments-module"],{

/***/ "./src/app/pages/user/mydocuments/mydocuments.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/mydocuments/mydocuments.module.ts ***!
  \**************************************************************/
/*! exports provided: MydocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocumentsPageModule", function() { return MydocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _mydocuments_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mydocuments.page */ "./src/app/pages/user/mydocuments/mydocuments.page.ts");








var routes = [
    {
        path: '',
        component: _mydocuments_page__WEBPACK_IMPORTED_MODULE_7__["MydocumentsPage"]
    }
];
var MydocumentsPageModule = /** @class */ (function () {
    function MydocumentsPageModule() {
    }
    MydocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mydocuments_page__WEBPACK_IMPORTED_MODULE_7__["MydocumentsPage"]]
        })
    ], MydocumentsPageModule);
    return MydocumentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/mydocuments/mydocuments.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/mydocuments/mydocuments.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>My Documents</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"mydocuments-list-container\">\n    <ion-list>\n      <div *ngFor=\"let request of arrMyRequests\" class=\"mydocuments-request-item\">\n        <div class=\"mydocuments-request-header\">\n          <p>\n            RequestId: {{request._id}}\n          </p>\n        </div>\n        <div class=\"mydocuments-request-contents\">\n          <ng-container *ngIf=\"request.files\">\n            <div *ngFor=\"let file of request.files\">\n              <img *ngIf=\"file.type!='pdf'\" class=\"mydocuments-request-contents-image\" [src]=\"serverAssetsPath + file.filename\" (click)=\"onClickAttachment(file.filename)\"/>\n              <img *ngIf=\"file.type=='pdf'\" class=\"mydocuments-request-contents-document\" src=\"assets/icons/icon-documents.svg\" (click)=\"onClickAttachment(file.filename)\"/>\n            </div>\n          </ng-container>\n        </div>\n        <div class=\"mydocuments-request-footer\">\n          <p>\n            Created At: {{request.createdAt | doctime: true}}\n          </p>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/mydocuments/mydocuments.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/user/mydocuments/mydocuments.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mydocuments-request-item {\n  margin: 16px 16px 3vh 16px;\n  box-shadow: 0 0 8px #c7c7c7; }\n\n.mydocuments-request-header {\n  background-color: #3780ff; }\n\n.mydocuments-request-header p {\n    margin: 0;\n    padding: 16px;\n    color: white; }\n\n.mydocuments-request-contents {\n  padding: 16px; }\n\n.mydocuments-request-contents-image {\n  width: 200px;\n  margin-bottom: 2vh; }\n\n.mydocuments-request-contents-document {\n  margin-bottom: 2vh; }\n\n.mydocuments-request-footer p {\n  margin: 0;\n  padding: 16px;\n  text-align: right;\n  font-size: .9em;\n  color: #696969; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9teWRvY3VtZW50cy9teWRvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0kseUJBQXlCLEVBQUE7O0FBRDdCO0lBR1EsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFUSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9teWRvY3VtZW50cy9teWRvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlkb2N1bWVudHMtcmVxdWVzdC1pdGVtIHtcbiAgICBtYXJnaW46IDE2cHggMTZweCAzdmggMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNjN2M3Yzc7XG59XG5cbi5teWRvY3VtZW50cy1yZXF1ZXN0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ODBmZjtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ubXlkb2N1bWVudHMtcmVxdWVzdC1jb250ZW50cyB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLm15ZG9jdW1lbnRzLXJlcXVlc3QtY29udGVudHMtaW1hZ2Uge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5teWRvY3VtZW50cy1yZXF1ZXN0LWNvbnRlbnRzLWRvY3VtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5teWRvY3VtZW50cy1yZXF1ZXN0LWZvb3RlciB7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgY29sb3I6ICM2OTY5Njk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user/mydocuments/mydocuments.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/user/mydocuments/mydocuments.page.ts ***!
  \************************************************************/
/*! exports provided: MydocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydocumentsPage", function() { return MydocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");





var MydocumentsPage = /** @class */ (function () {
    function MydocumentsPage(navCtrl, apiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.arrMyRequests = [];
        this.serverAssetsPath = _constants__WEBPACK_IMPORTED_MODULE_4__["SERVERASSETS"];
    }
    MydocumentsPage.prototype.ngOnInit = function () {
    };
    MydocumentsPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    MydocumentsPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestLoader, uid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..."
                        })];
                    case 1:
                        requestLoader = _a.sent();
                        return [4 /*yield*/, requestLoader.present()];
                    case 2:
                        _a.sent();
                        try {
                            uid = localStorage.getItem("uid");
                            this.apiService.getRequest(uid)
                                .subscribe(function (res) {
                                _this.arrMyRequests = res.data;
                                console.log(_this.arrMyRequests);
                                requestLoader.dismiss();
                            });
                        }
                        catch (err) {
                            console.log(err);
                            requestLoader.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * View Attachment file
     * @param path file path
     */
    MydocumentsPage.prototype.onClickAttachment = function (path) {
        window.open(this.serverAssetsPath + path, '_blank');
    };
    MydocumentsPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/myrequests');
    };
    MydocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mydocuments',
            template: __webpack_require__(/*! ./mydocuments.page.html */ "./src/app/pages/user/mydocuments/mydocuments.page.html"),
            styles: [__webpack_require__(/*! ./mydocuments.page.scss */ "./src/app/pages/user/mydocuments/mydocuments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MydocumentsPage);
    return MydocumentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-mydocuments-mydocuments-module.js.map