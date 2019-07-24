(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-request-detail-request-detail-module"],{

/***/ "./src/app/pages/user/request-detail/request-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/user/request-detail/request-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: RequestDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailPageModule", function() { return RequestDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-detail.page */ "./src/app/pages/user/request-detail/request-detail.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");









var routes = [
    {
        path: '',
        component: _request_detail_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailPage"]
    }
];
var RequestDetailPageModule = /** @class */ (function () {
    function RequestDetailPageModule() {
    }
    RequestDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _request_detail_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailPage"]
            ]
        })
    ], RequestDetailPageModule);
    return RequestDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/request-detail/request-detail.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/user/request-detail/request-detail.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div id=\"request-detail-item\">\n    <div id=\"request-detail-item-header\">\n      <p>\n        {{arrStatus[objRequestDetail?.status]}}\n      </p>\n      <span *ngIf=\"objRequestDetail?.status == 0\">\n        Complete your Request\n      </span>\n    </div>\n    <div id=\"request-detail-item-body\">\n      <p>\n        <b>Requested Date:</b> {{objRequestDetail?.updatedAt | doctime: false}}\n      </p>\n      <p>\n        <b>Category:</b> {{arrCategories[objRequestDetail?.category]}}\n      </p>\n      <p>\n        <b>Requestor:</b> {{objRequestDetail?.user.username}}\n      </p>\n      <p>\n        <b>Comments:</b> {{objRequestDetail?.comments}}\n      </p>\n      <p>\n        <b>Queries:</b> {{objRequestDetail?.queries}}\n      </p>\n\n      <div id=\"request-detail-item-footer\">\n        <ng-container *ngIf=\"userType=='0'\">\n          <ng-container [ngSwitch]=\"objRequestDetail?.status\">\n            <div *ngSwitchCase=\"2\" class=\"btn-container\">\n              <div>\n                <p (click)=\"showConfirmMessage($event, 0)\">\n                  Take Action\n                </p>\n              </div>\n            </div>\n            <div *ngSwitchCase=\"3\" class=\"btn-container\">\n              <div>\n                <p (click)=\"showConfirmMessage($event, 1)\">\n                  Need Clarification\n                </p>\n              </div>\n              <div>\n                <p (click)=\"showConfirmMessage($event, 2)\">\n                  Close Request\n                </p>            \n              </div>\n              <div>\n                <p (click)=\"showConfirmMessage($event, 3)\">\n                  Not Satisfied\n                </p>            \n              </div>\n            </div>\n            <div *ngSwitchCase=\"4\" class=\"btn-container\">\n              <div>\n                <p (click)=\"showConfirmMessage($event, 4)\">\n                  Re Open\n                </p>\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"userType=='1'\">\n          <ng-container *ngIf=\"objRequestDetail?.expert; else acceptRequest\">\n            <div class=\"btn-container\">\n              <div>\n                <p (click)=\"onClickProvideInputFromExpert($event)\">\n                  Provide Input\n                </p>\n              </div>\n              <div>\n                <p (click)=\"onClickFinalOpinion($event)\">\n                  Final Opinion\n                </p>\n              </div>\n            </div>\n          </ng-container>\n          <ng-template #acceptRequest>\n            <div class=\"btn-container\">\n              <div>\n                <p (click)=\"onAcceptRequest($event)\">\n                  Accept Request\n                </p>\n              </div>\n            </div>\n          </ng-template>\n        </ng-container>\n      </div>\n\n      <ion-item lines=\"none\" button=\"true\" no-padding *ngIf=\"objRequestDetail?.files.length > 0\" (click)=\"onClickViewAttachment($event)\">\n        <ion-icon [name]=\"isViewAttachment?'arrow-dropdown':'arrow-dropright'\"></ion-icon>\n        <ion-label>View Attachments</ion-label>\n      </ion-item>\n      <ng-container *ngIf=\"objRequestDetail?.files.length > 0 && isViewAttachment\">\n        <p *ngFor=\"let file of objRequestDetail?.files\" class=\"request-detail-item-attachment\" (click)=\"onClickAttachmentFile($event, file.filename)\">\n          {{file.filename}}\n        </p>\n      </ng-container>\n\n      <ion-item lines=\"none\" button=\"true\" no-padding (click)=\"onClickViewTimeLine($event)\">\n        <ion-icon [name]=\"objRequestDetail?.isViewTimeLine?'arrow-dropdown': 'arrow-dropright'\"></ion-icon>\n        <ion-label>View Timeline</ion-label>\n      </ion-item>\n\n      <div class=\"request-detail-timeline\" *ngIf=\"objRequestDetail?.isViewTimeLine\">\n        <!-- Initialize request -->\n        <ng-container *ngFor=\"let track of objRequestDetail?.trackRequest\">\n          <div class=\"request-detail-time\">\n            <div [class]=\"'request-detail-indicator status-' + track.status\"></div>\n            <p>\n              {{track.createdAt | doctime: true}}\n            </p>\n          </div>\n          <div class=\"request-detail-timeline-main\">\n            <p>\n              {{arrStatus[track.status]}}\n            </p>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <div id=\"request-detail-extracomments-btn-view\">\n      <ion-item button=\"true\" lines=\"none\" no-padding (click)=\"onClickViewExtraComments($event)\">\n        <ion-icon [name]=\"objRequestDetail?.isExpandedProvideInput?'arrow-dropdown':'arrow-dropright'\"></ion-icon>\n        <ion-label>View Extra Comments</ion-label>\n      </ion-item>\n    </div>\n\n    <div id=\"request-detail-extracomments-container\" *ngIf=\"objRequestDetail?.isExpandedProvideInput\">\n      <div *ngFor=\"let extra of objRequestDetail?.extracomment\" class=\"request-detail-item-extracomment\">\n        <div [class]=\"userType==extra.role?'request-detail-item-extracomment-inner extra-sender': 'request-detail-item-extracomment-inner extra-receiver'\">\n          <p class=\"request-detail-item-extracomment-username\">\n            {{extra.uid.fname + \" \" + extra.uid.lname}}\n          </p>\n          <p class=\"request-detail-item-extracomment-message\">\n            {{extra.message}}\n          </p>\n          <div>\n            <p *ngFor=\"let file of extra.files\" class=\"request-detail-item-extra-attachment\" (click)=\"onClickAttachmentFile($event, file.filename)\">\n              {{file.filename}}\n            </p>\n          </div>\n          <p class=\"request-detail-item-extracomment-time\">\n            {{extra.createdAt | doctime: true}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/request-detail/request-detail.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/user/request-detail/request-detail.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#request-detail-item {\n  margin: 16px;\n  background-color: #fff;\n  box-shadow: 0 0 8px #bdbdbd;\n  border-radius: 4px; }\n\n#request-detail-item-header {\n  display: flex;\n  padding: 8px 16px;\n  background-color: #eaeaea; }\n\n#request-detail-item-header p {\n    margin: 0;\n    color: #272727; }\n\n#request-detail-item-body {\n  padding: 16px 16px 0; }\n\n#request-detail-item-body > p {\n  margin: 4px 0; }\n\n.request-detail-item-attachment {\n  padding-left: 28px;\n  font-size: .8em; }\n\n#request-detail-item-footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 16px 8px 16px; }\n\n.request-detail-time {\n  display: flex;\n  align-items: center; }\n\n.request-detail-time p {\n    margin: 0 0 0 16px;\n    color: #797979; }\n\n.request-detail-timeline-main {\n  margin: 1px 0 0 5.4px;\n  padding-left: 22px;\n  border-left: 5px solid #CCCED0; }\n\n.request-detail-timeline-main p {\n    margin: 0; }\n\n.request-detail-timeline-main > p {\n  padding: 4px 0 16px;\n  color: #505050; }\n\n.request-detail-indicator {\n  width: 16px;\n  height: 16px;\n  background-color: #319818;\n  border-radius: 50%; }\n\n.status-0 {\n  background-color: #ff7373; }\n\n.status-1 {\n  background-color: #319818; }\n\n.status-2 {\n  background-color: #2b7fea; }\n\n.status-3, .status-4 {\n  background-color: #F5CD82; }\n\n.btn-container {\n  display: flex; }\n\n.btn-container div {\n    padding: 0 4px; }\n\n.btn-container p {\n  font-size: .8em;\n  background: #3178d8;\n  padding: 4px;\n  margin: 0;\n  box-shadow: 0 2px 3px #a9a9a9;\n  border-radius: 2px;\n  color: white; }\n\n.request-detail-item-extracomment::after {\n  content: '';\n  display: block;\n  clear: both;\n  margin-bottom: 2em; }\n\n.request-detail-item-extracomment-inner {\n  width: 70%; }\n\n.extra-sender {\n  padding: 10px;\n  border-radius: 20px 20px 5px 20px;\n  background-color: #e0e0e0;\n  margin-right: 16px;\n  float: right; }\n\n.extra-sender .request-detail-item-extracomment-username {\n    color: black; }\n\n.extra-sender .request-detail-item-extracomment-message {\n    color: black; }\n\n.extra-sender .request-detail-item-extra-attachment {\n    color: black; }\n\n.extra-sender .request-detail-item-extracomment-time {\n    color: black; }\n\n.extra-receiver {\n  padding: 10px;\n  border-radius: 20px 20px 20px 5px;\n  background-color: #0ebdf5;\n  margin-left: 16px;\n  float: left; }\n\n.extra-receiver .request-detail-item-extracomment-username {\n    color: white; }\n\n.extra-receiver .request-detail-item-extracomment-message {\n    color: white; }\n\n.extra-receiver .request-detail-item-extra-attachment {\n    color: white; }\n\n.extra-receiver .request-detail-item-extracomment-time {\n    color: white; }\n\n.request-detail-item-extracomment-username {\n  margin: 16px 0px 8px;\n  font-size: .9em; }\n\n.request-detail-item-extracomment-message {\n  margin: 8px 0px 16px;\n  font-size: .9em;\n  font-style: italic; }\n\n.request-detail-item-extra-attachment {\n  margin: 4px 0;\n  font-size: .8em; }\n\n#request-detail-extracomments-btn-view {\n  padding: 0 16px 16px; }\n\n.request-detail-item-extracomment-time {\n  text-align: right;\n  margin: 4px 0;\n  font-size: .7em; }\n\n.black-p {\n  color: black; }\n\n.white-p {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWRldGFpbC9yZXF1ZXN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZO0VBRVosc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBOztBQUg3QjtJQUtRLFNBQVM7SUFDVCxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTs7QUFNdEI7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUhsQztJQUtRLFNBQVMsRUFBQTs7QUFJakI7RUFFUSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUl0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBTGhCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtJQVVRLFlBQVksRUFBQTs7QUFWcEI7SUFhUSxZQUFZLEVBQUE7O0FBYnBCO0lBZ0JRLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUxmO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtJQVVRLFlBQVksRUFBQTs7QUFWcEI7SUFhUSxZQUFZLEVBQUE7O0FBYnBCO0lBZ0JRLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxvQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci9yZXF1ZXN0LWRldGFpbC9yZXF1ZXN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNyZXF1ZXN0LWRldGFpbC1pdGVtIHtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgLy8gcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2JkYmRiZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNyZXF1ZXN0LWRldGFpbC1pdGVtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMjcyNzI3O1xuICAgIH1cbn1cblxuI3JlcXVlc3QtZGV0YWlsLWl0ZW0tYm9keSB7XG4gICAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbiNyZXF1ZXN0LWRldGFpbC1pdGVtLWJvZHkgPiBwIHtcbiAgICBtYXJnaW46IDRweCAwO1xufVxuXG4ucmVxdWVzdC1kZXRhaWwtaXRlbS1hdHRhY2htZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG4jcmVxdWVzdC1kZXRhaWwtaXRlbS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAwIDE2cHggOHB4IDE2cHg7XG59XG5cbi5yZXF1ZXN0LWRldGFpbC10aW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgfVxufVxuXG5cblxuLnJlcXVlc3QtZGV0YWlsLXRpbWVsaW5lLW1haW4ge1xuICAgIG1hcmdpbjogMXB4IDAgMCA1LjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjQ0NDRUQwO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4ucmVxdWVzdC1kZXRhaWwtdGltZWxpbmUtbWFpbiB7XG4gICAgJiA+IHAge1xuICAgICAgICBwYWRkaW5nOiA0cHggMCAxNnB4O1xuICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICB9XG59XG5cbi5yZXF1ZXN0LWRldGFpbC1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE5ODE4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnN0YXR1cy0wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MzczO1xufVxuXG4uc3RhdHVzLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTk4MTg7XG59XG5cbi5zdGF0dXMtMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiN2ZlYTtcbn1cblxuLnN0YXR1cy0zLCAuc3RhdHVzLTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUNEODI7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIH1cbn1cblxuLmJ0bi1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGJhY2tncm91bmQ6ICMzMTc4ZDg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggI2E5YTlhOTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYWNvbW1lbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5yZXF1ZXN0LWRldGFpbC1pdGVtLWV4dHJhY29tbWVudC1pbm5lciB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmV4dHJhLXNlbmRlciB7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYWNvbW1lbnQtdXNlcm5hbWUge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC5yZXF1ZXN0LWRldGFpbC1pdGVtLWV4dHJhY29tbWVudC1tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYS1hdHRhY2htZW50IHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYWNvbW1lbnQtdGltZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59XG5cbi5leHRyYS1yZWNlaXZlciB7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZWJkZjU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLnJlcXVlc3QtZGV0YWlsLWl0ZW0tZXh0cmFjb21tZW50LXVzZXJuYW1lIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYWNvbW1lbnQtbWVzc2FnZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnJlcXVlc3QtZGV0YWlsLWl0ZW0tZXh0cmEtYXR0YWNobWVudCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnJlcXVlc3QtZGV0YWlsLWl0ZW0tZXh0cmFjb21tZW50LXRpbWUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ucmVxdWVzdC1kZXRhaWwtaXRlbS1leHRyYWNvbW1lbnQtdXNlcm5hbWUge1xuICAgIG1hcmdpbjogMTZweCAwcHggOHB4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnJlcXVlc3QtZGV0YWlsLWl0ZW0tZXh0cmFjb21tZW50LW1lc3NhZ2Uge1xuICAgIG1hcmdpbjogOHB4IDBweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5yZXF1ZXN0LWRldGFpbC1pdGVtLWV4dHJhLWF0dGFjaG1lbnQge1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG4jcmVxdWVzdC1kZXRhaWwtZXh0cmFjb21tZW50cy1idG4tdmlldyB7XG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG59XG5cbi5yZXF1ZXN0LWRldGFpbC1pdGVtLWV4dHJhY29tbWVudC10aW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmJsYWNrLXAge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLndoaXRlLXAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/user/request-detail/request-detail.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/user/request-detail/request-detail.page.ts ***!
  \******************************************************************/
/*! exports provided: RequestDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailPage", function() { return RequestDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var _modal_expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/expert-comment/expert-comment.page */ "./src/app/pages/modal/expert-comment/expert-comment.page.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _modal_feedback_feedback_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modal/feedback/feedback.page */ "./src/app/pages/modal/feedback/feedback.page.ts");
/* harmony import */ var _modal_provide_input_provide_input_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modal/provide-input/provide-input.page */ "./src/app/pages/modal/provide-input/provide-input.page.ts");













var RequestDetailPage = /** @class */ (function () {
    function RequestDetailPage(route, loadingCtrl, apiService, navCtrl, altCtrl, platform, modalCtrl, toastService, file, transfer) {
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.file = file;
        this.transfer = transfer;
        this.selectedView = 0;
        this.requestId = "";
        this.objRequestDetail = null;
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_5__["STATUS"];
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"];
        this.isViewAttachment = false;
        this.isMobile = false;
    }
    RequestDetailPage.prototype.ngOnInit = function () {
    };
    RequestDetailPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    RequestDetailPage.prototype.initPage = function () {
        this.isMobile = this.platform.is("mobile");
        this.requestId = this.route.snapshot.paramMap.get("reqId");
        this.userType = this.route.snapshot.paramMap.get("userType");
        console.log("Role", this.userType);
        this.getRequestDetail();
    };
    RequestDetailPage.prototype.getRequestDetail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var detailLoader, detailRequest, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Loading..."
                        })];
                    case 1:
                        detailLoader = _a.sent();
                        detailLoader.present();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.apiService.getRequestById(this.requestId).toPromise()];
                    case 3:
                        detailRequest = _a.sent();
                        this.objRequestDetail = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, detailRequest.data, { isExpandedProvideInput: false, isViewTimeLine: false });
                        console.log("detail", this.objRequestDetail);
                        detailLoader.dismiss();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        detailLoader.dismiss();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.onClickViewType = function (type) {
        this.selectedView = type;
    };
    RequestDetailPage.prototype.onClickViewAttachment = function (evt) {
        evt.stopPropagation();
        this.isViewAttachment = !this.isViewAttachment;
    };
    /**
     * Process user action
     * @param action actionid
     * 0: Take action
     * 1: need clarification
     * 2: close request
     * 3: not satisified
     * 4: Re open
     */
    RequestDetailPage.prototype.showConfirmMessage = function (evt, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var message, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        message = "";
                        if (action == 0) {
                            message = "provide input to";
                        }
                        else if (action == 1) {
                            message = "clarificate";
                        }
                        else if (action == 2) {
                            message = "close";
                        }
                        else if (action == 3) {
                            message = "close";
                        }
                        else if (action == 4) {
                            message = "re open";
                        }
                        return [4 /*yield*/, this.altCtrl.create({
                                header: 'Confirm!',
                                message: "Are you sure want to " + message + " the request?",
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary'
                                    }, {
                                        text: 'Okay',
                                        handler: function () {
                                            if (action == 0) {
                                                _this.provideInput();
                                            }
                                            else if (action == 1) {
                                                _this.needClarification();
                                            }
                                            else if (action == 2) {
                                                _this.showFeedbackModal();
                                            }
                                            else if (action == 3) {
                                                _this.showFeedbackModal();
                                            }
                                            else if (action == 4) {
                                                _this.reopenRequest();
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Provide Input for selected Request
     */
    RequestDetailPage.prototype.provideInput = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provideInputModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_provide_input_provide_input_page__WEBPACK_IMPORTED_MODULE_12__["ProvideInputPage"],
                            componentProps: {
                                reqId: this.requestId
                            }
                        })];
                    case 1:
                        provideInputModal = _a.sent();
                        return [4 /*yield*/, provideInputModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Need Clarification
     * Set request status to "In Progress"
     */
    RequestDetailPage.prototype.needClarification = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var trackRequestResult, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.apiService.saveRequestStatus(1).toPromise()];
                    case 1:
                        trackRequestResult = _a.sent();
                        return [4 /*yield*/, this.apiService.updateRequestStatus(this.requestId, 1, trackRequestResult.data._id).toPromise()];
                    case 2:
                        _a.sent();
                        this.toastService.showToast("The Request is in progress");
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.toastService.showToast("Operation failed!");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.showFeedbackModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var feedbackModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.objRequestDetail);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_feedback_feedback_page__WEBPACK_IMPORTED_MODULE_11__["FeedbackPage"],
                                cssClass: "info-modal",
                                componentProps: {
                                    expertId: this.objRequestDetail.expert,
                                    requestId: this.requestId
                                },
                                backdropDismiss: false
                            })];
                    case 1:
                        feedbackModal = _a.sent();
                        return [4 /*yield*/, feedbackModal.present()];
                    case 2:
                        _a.sent();
                        feedbackModal.onDidDismiss()
                            .then(function (data) {
                            if (data.data == 0) {
                                _this.toastService.showToast("Successfully placed your feedback!");
                                _this.getRequestDetail();
                            }
                            else {
                                _this.toastService.showToast("Operation failed!");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.reopenRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var trackRequestResult, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.apiService.saveRequestStatus(1).toPromise()];
                    case 1:
                        trackRequestResult = _a.sent();
                        return [4 /*yield*/, this.apiService.updateRequestStatus(this.requestId, 1, trackRequestResult.data._id).toPromise()];
                    case 2:
                        _a.sent();
                        this.toastService.showToast("The Request is re-opened");
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        this.toastService.showToast("Operation failed!");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Expert Part
     * onAcceptRequest
     * onClickProvideInputFromExpert
     * onClickFinalOpinion
     */
    RequestDetailPage.prototype.onAcceptRequest = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignLoader, objAssign;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Please wait..."
                            })];
                    case 1:
                        assignLoader = _a.sent();
                        return [4 /*yield*/, assignLoader.present()];
                    case 2:
                        _a.sent();
                        objAssign = {
                            requestId: this.requestId,
                            expertId: localStorage.getItem("uid")
                        };
                        this.apiService.requestSetExpert(objAssign)
                            .subscribe(function () {
                            _this.objRequestDetail.expert = localStorage.getItem("uid");
                            console.log(_this.objRequestDetail);
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
    RequestDetailPage.prototype.onClickProvideInputFromExpert = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provideInputModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_provide_input_provide_input_page__WEBPACK_IMPORTED_MODULE_12__["ProvideInputPage"],
                                componentProps: {
                                    reqId: this.requestId
                                }
                            })];
                    case 1:
                        provideInputModal = _a.sent();
                        return [4 /*yield*/, provideInputModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.onClickFinalOpinion = function (evt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var commentModal, expertReview, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_expert_comment_expert_comment_page__WEBPACK_IMPORTED_MODULE_7__["ExpertCommentPage"],
                                cssClass: "info-modal",
                                componentProps: {
                                    title: "Comment",
                                    placeholder: 'Please input your feedback for the request'
                                },
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
                            this.provideExpertComment(expertReview.data);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.provideExpertComment = function (str) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var commentLoader, objComment, trackRequestResult, error_4;
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
                            expertsId: localStorage.getItem("uid"),
                            userId: this.objRequestDetail.user._id,
                            requestId: this.requestId,
                            comment: str,
                            trackReqId: ""
                        };
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.apiService.saveRequestStatus(3).toPromise()];
                    case 4:
                        trackRequestResult = _a.sent();
                        objComment.trackReqId = trackRequestResult.data._id;
                        return [4 /*yield*/, this.apiService.provideExpertComment(objComment).toPromise()];
                    case 5:
                        _a.sent();
                        commentLoader.dismiss();
                        this.toastService.showToast("Successful!");
                        return [3 /*break*/, 7];
                    case 6:
                        error_4 = _a.sent();
                        console.log(error_4);
                        commentLoader.dismiss();
                        this.toastService.showToast("Operation Failed!");
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.onClickNavBack = function () {
        if (this.userType == "0") {
            this.navCtrl.navigateBack('/menu/myrequests');
        }
        else if (this.userType == "1") {
            this.navCtrl.navigateBack('/menu/expert-requests');
        }
    };
    RequestDetailPage.prototype.onClickAttachmentFile = function (evt, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isMobile, fileTransfer, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        isMobile = this.platform.is("mobile");
                        console.log(isMobile);
                        if (!isMobile) return [3 /*break*/, 5];
                        fileTransfer = this.transfer.create();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fileTransfer.download(_constants__WEBPACK_IMPORTED_MODULE_5__["SERVERASSETS"] + filename, this.file.externalRootDirectory + 'Download/' + filename)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.apiService.downloadFile(filename)
                            .subscribe(function (data) {
                            console.log(data);
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(data, filename);
                        }, function (error) {
                            console.log(error);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RequestDetailPage.prototype.onClickViewExtraComments = function (evt) {
        evt.stopPropagation();
        this.objRequestDetail.isExpandedProvideInput = !this.objRequestDetail.isExpandedProvideInput;
    };
    RequestDetailPage.prototype.onClickViewTimeLine = function (evt) {
        evt.stopPropagation();
        this.objRequestDetail.isViewTimeLine = !this.objRequestDetail.isViewTimeLine;
    };
    RequestDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-detail',
            template: __webpack_require__(/*! ./request-detail.page.html */ "./src/app/pages/user/request-detail/request-detail.page.html"),
            styles: [__webpack_require__(/*! ./request-detail.page.scss */ "./src/app/pages/user/request-detail/request-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]])
    ], RequestDetailPage);
    return RequestDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-request-detail-request-detail-module.js.map