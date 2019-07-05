(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expert-request-request-module"],{

/***/ "./src/app/pages/expert/request/request.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/expert/request/request.module.ts ***!
  \********************************************************/
/*! exports provided: RequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.page */ "./src/app/pages/expert/request/request.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");









var routes = [
    {
        path: '',
        component: _request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]
    }
];
var RequestPageModule = /** @class */ (function () {
    function RequestPageModule() {
    }
    RequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"],
            ]
        })
    ], RequestPageModule);
    return RequestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expert/request/request.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/expert/request/request.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Requests</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClickFilter()\">\n        <ion-icon src=\"assets/icons/icon-custom-filter.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"request-list\">\n    <div *ngFor=\"let request of arrRequests; let i = index;\" class=\"request-item\">\n      <div class=\"request-item-header\">\n        <p>\n          {{request.user.fname + \" \" + request.user.lname}}\n        </p>\n        <div *ngIf=\"!request.expert\">\n          <ion-button fill=\"clear\" color=\"white\" (click)=\"onClickAssignRequest(i)\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n      <div class=\"request-item-content\">\n        <p>\n          Comments: {{request.comments}}\n        </p>\n        <p>\n          Queries: {{request.queries}}\n        </p>\n        <ion-item lines=\"none\" (click)=\"onToggleViewAttachment(i)\">\n          <ion-icon *ngIf=\"!request.expanded\" name=\"arrow-dropright\"></ion-icon>\n          <ion-icon *ngIf=\"request.expanded\" name=\"arrow-dropdown\"></ion-icon>\n          <ion-label>View Attachments</ion-label>\n        </ion-item>\n        <ion-list *ngIf=\"request.expanded\" no-padding>\n          <div *ngFor=\"let file of request.files\">\n            <p (click)=\"onClickAttachments(file.filename)\">\n              {{file.filename}}\n            </p>\n          </div>\n        </ion-list>\n      </div>\n      <div class=\"request-item-footer\">\n        <div class=\"request-item-controls\">\n          <div>\n            <ion-button [disabled]=\"!request.expert\" expand=\"full\" (click)=\"onClickProvideInput(i)\">Provide Input</ion-button>\n          </div>\n          <div>\n            <ion-button [disabled]=\"!request.expert\" expand=\"full\" (click)=\"onClickFinalOpinion(i)\">Final Opinion</ion-button>\n          </div>\n        </div>\n        <p>\n          Created At: {{request.createdAt | doctime}}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)=\"onClickReviewedCases()\">\n    <ion-title>Reviewd Cases</ion-title>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/expert/request/request.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/expert/request/request.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-title {\n  text-align: center; }\n\n#request-list {\n  margin: 16px; }\n\n.request-item {\n  box-shadow: 0 2px 4px #b3b3b3;\n  margin-bottom: 2vh; }\n\n.request-item-header {\n  background-color: #3780ff;\n  display: flex; }\n\n.request-item-header p {\n    flex: 1;\n    margin: 0;\n    padding: 16px;\n    color: white;\n    text-align: left; }\n\n.request-item-header div {\n    flex: 1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center; }\n\n.request-item-content {\n  margin: 16px; }\n\n.request-item-footer {\n  padding: 0 16px 16px 16px; }\n\n.request-item-footer p {\n    margin: 0;\n    font-size: .8em;\n    text-align: right; }\n\n.request-item-controls {\n  display: flex;\n  margin-bottom: 3vh; }\n\n.request-item-controls div {\n    flex: 1;\n    padding: 0 16px; }\n\nion-list {\n  margin-left: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0L3JlcXVlc3QvcmVxdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQTZCO0VBQzdCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBRmpCO0lBSVEsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQVJ4QjtJQVdRLE9BQU87SUFDUCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxPQUFPO0lBQ1AsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJ0L3JlcXVlc3QvcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4jcmVxdWVzdC1saXN0IHtcbiAgICBtYXJnaW46IDE2cHg7XG59XG5cbi5yZXF1ZXN0LWl0ZW0ge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjYjNiM2IzO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLnJlcXVlc3QtaXRlbS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzgwZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4ucmVxdWVzdC1pdGVtLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMTZweDtcbn1cblxuLnJlcXVlc3QtaXRlbS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4IDE2cHg7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbi5yZXF1ZXN0LWl0ZW0tY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/expert/request/request.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/expert/request/request.page.ts ***!
  \******************************************************/
/*! exports provided: RequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPage", function() { return RequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../popover/filter/filter.page */ "./src/app/pages/popover/filter/filter.page.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _modal_expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modal/expert-comment/expert-comment.page */ "./src/app/pages/modal/expert-comment/expert-comment.page.ts");











var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, apiService, loadingCtrl, platform, file, transfer, popOver, toastService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.popOver = popOver;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.uid = "";
        this.arrRequests = [];
        this.arrFilterOpts = [
            "Category",
            "Date",
            "Requestor First Name",
            "Requestor Last Name"
        ];
    }
    RequestPage.prototype.ngOnInit = function () {
    };
    RequestPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    /**
     * Init Page when it's loaded
     */
    RequestPage.prototype.initPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var requestLoader;
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
                        this.uid = localStorage.getItem("uid");
                        try {
                            this.apiService.getAllRequests()
                                .subscribe(function (res) {
                                _this.arrRequests = [];
                                if (res.data) {
                                    console.log(res.data);
                                    for (var i = 0; i < res.data.length; i++) {
                                        if (res.data[i].status == 1 && (res.data[i].expert == _this.uid || !res.data[i].expert)) {
                                            _this.arrRequests.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false }));
                                        }
                                    }
                                }
                                console.log(_this.arrRequests);
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
     * Show Filter Popover
     */
    RequestPage.prototype.onClickFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filterPopover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popOver.create({
                            component: _popover_filter_filter_page__WEBPACK_IMPORTED_MODULE_8__["FilterPage"],
                            componentProps: {
                                "filterOpts": this.arrFilterOpts
                            },
                            event: event
                        })];
                    case 1:
                        filterPopover = _a.sent();
                        return [4 /*yield*/, filterPopover.present()];
                    case 2:
                        _a.sent();
                        filterPopover.onDidDismiss()
                            .then(function (data) {
                            // console.log(data);
                            _this.filterRequests(data.data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Assign Request to currrent Expert
     * @param index array arrRequests index
     */
    RequestPage.prototype.onClickAssignRequest = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignLoader, objAssign;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        assignLoader = _a.sent();
                        return [4 /*yield*/, assignLoader.present()];
                    case 2:
                        _a.sent();
                        objAssign = {
                            requestId: this.arrRequests[index]._id,
                            expertId: localStorage.getItem("uid")
                        };
                        this.apiService.requestSetExpert(objAssign)
                            .subscribe(function () {
                            _this.arrRequests[index].expert = _this.uid;
                            assignLoader.dismiss();
                            _this.toastService.showToast("Request is accepted!");
                        }, function (error) {
                            console.log(error);
                            assignLoader.dismiss();
                            _this.toastService.showToast("Operation failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Filter Requests by selected option
     * @param filterOpt Filter option as array Index
     */
    RequestPage.prototype.filterRequests = function (filterOpt) {
        if (filterOpt == 0) {
            this.arrRequests.sort(function (a, b) { return a.category - b.category; });
        }
        else if (filterOpt == 1) {
            this.arrRequests.sort(function (a, b) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); });
        }
        else if (filterOpt == 2) {
            this.arrRequests.sort(function (a, b) { return a.user.fname - b.user.fname; });
        }
        else {
            this.arrRequests.sort(function (a, b) { return a.user.lname - b.user.lname; });
        }
    };
    /**
     * Toggle to view attachments
     * @param i array index of arrRequests
     */
    RequestPage.prototype.onToggleViewAttachment = function (i) {
        this.arrRequests[i].expanded = !this.arrRequests[i].expanded;
    };
    /**
     * Download attachment file
     * Check platform, so if platform is mobile, then, use cordova plugin
     * if platform is not mobile, then, use file-saver.js
     * @param filename the name of file to download
     */
    RequestPage.prototype.onClickAttachments = function (filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isMobile, fileTransfer, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isMobile = this.platform.is("mobile");
                        if (!isMobile) return [3 /*break*/, 5];
                        fileTransfer = this.transfer.create();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fileTransfer.download(_constants__WEBPACK_IMPORTED_MODULE_7__["SERVERASSETS"] + filename, this.file.externalRootDirectory + 'Download/' + filename)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.apiService.downloadFile(filename)
                            .subscribe(function (data) {
                            console.log(data);
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(data, filename);
                        }, function (error) {
                            console.log(error);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set request's status as "Provide Input"
     * @param index arrRequestIndex: Number
     */
    RequestPage.prototype.onClickProvideInput = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateStatusLoader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        updateStatusLoader = _a.sent();
                        return [4 /*yield*/, updateStatusLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.updateRequestStatus(this.arrRequests[index]._id, 2)
                            .subscribe(function () {
                            updateStatusLoader.dismiss();
                            _this.toastService.showToast("Success!");
                        }, function (error) {
                            console.log(error);
                            updateStatusLoader.dismiss();
                            _this.toastService.showToast("Operation Failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Show Modal to input expert comments
     * @param index arrRequestIndex: Number
     */
    RequestPage.prototype.onClickFinalOpinion = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var commentModal, expertReview, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_10__["ExpertCommentPage"],
                            cssClass: "info-modal",
                            backdropDismiss: false
                        })];
                    case 1:
                        commentModal = _a.sent();
                        return [4 /*yield*/, commentModal.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, commentModal.onDidDismiss()];
                    case 4:
                        expertReview = _a.sent();
                        if (expertReview.data !== null) {
                            this.provideExpertComment(index, expertReview.data);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Provide expert's comment to request and set request's status as "Completed"
     * @param index arrRequestIndex: Number
     * @param str expert's comment: String
     */
    RequestPage.prototype.provideExpertComment = function (index, str) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var commentLoader, objComment;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        commentLoader = _a.sent();
                        return [4 /*yield*/, commentLoader.present()];
                    case 2:
                        _a.sent();
                        objComment = {
                            expertsId: this.arrRequests[index].expert,
                            userId: this.arrRequests[index].user._id,
                            requestId: this.arrRequests[index]._id,
                            comment: str
                        };
                        this.apiService.provideExpertComment(objComment)
                            .subscribe(function () {
                            commentLoader.dismiss();
                            _this.toastService.showToast("Successful!");
                        }, function (error) {
                            console.log(error);
                            commentLoader.dismiss();
                            _this.toastService.showToast("Operation Failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Navigate to Revied Case page
     */
    RequestPage.prototype.onClickReviewedCases = function () {
        this.navCtrl.navigateForward('/reviewed-cases');
    };
    /**
     * Navigate to landing page
     */
    RequestPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    RequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.page.html */ "./src/app/pages/expert/request/request.page.html"),
            styles: [__webpack_require__(/*! ./request.page.scss */ "./src/app/pages/expert/request/request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RequestPage);
    return RequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=expert-request-request-module.js.map