(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-requests-admin-requests-module"],{

/***/ "./src/app/pages/admin/admin-requests/admin-requests.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminRequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRequestsPageModule", function() { return AdminRequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-requests.page */ "./src/app/pages/admin/admin-requests/admin-requests.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal.module */ "./src/app/pages/modal/modal.module.ts");









var routes = [
    {
        path: '',
        component: _admin_requests_page__WEBPACK_IMPORTED_MODULE_6__["AdminRequestsPage"]
    }
];
var AdminRequestsPageModule = /** @class */ (function () {
    function AdminRequestsPageModule() {
    }
    AdminRequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_requests_page__WEBPACK_IMPORTED_MODULE_6__["AdminRequestsPage"]]
        })
    ], AdminRequestsPageModule);
    return AdminRequestsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button fill=\"clear\" (click)=\"onClickNavBack()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>All Requests</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div id=\"admin-requests-list\">\n      <div *ngFor=\"let request of arrRequests; let i = index;\" class=\"admin-requests-item\" (click)=\"onClickRequest(i)\">\n        <div class=\"admin-requests-item-header\">\n          <div>\n            {{request.createdAt | doctime: false}}\n          </div>\n          <div>\n            <span [class]=\"'status-' + request.status\">\n              {{arrStatus[request.status]}}\n            </span>\n          </div>\n        </div>\n        <div class=\"admin-requests-item-body\">\n          <p>\n            Category: {{arrCategories[request.category]}}\n          </p>\n          <p>\n            Comments: {{request.comments}}\n          </p>\n          <p>\n            Queries: {{request.queries}}\n          </p>\n          <ion-item lines=\"none\" (click)=\"onToggleViewAttachment($event, i)\">\n            <ion-icon *ngIf=\"!request.expandattachment\" name=\"arrow-dropright\"></ion-icon>\n            <ion-icon *ngIf=\"request.expandattachment\" name=\"arrow-dropdown\"></ion-icon>\n            <ion-label>View Attachments</ion-label>\n          </ion-item>\n          <ion-list *ngIf=\"request.expandattachment\" no-padding>\n            <div *ngFor=\"let file of request.files\">\n              <p (click)=\"onClickAttachments($event, file.filename)\">\n                {{file.filename}}\n              </p>\n            </div>\n          </ion-list>\n          <div class=\"admin-requests-detail\" *ngIf=\"request.expanded\">\n            <!-- Initialize request -->\n            <div class=\"admin-requests-detail-time\">\n              <div class=\"admin-requests-detail-indicator status-1\"></div>\n              <p>\n                {{request.createdAt | doctime: true}}\n              </p>\n            </div>\n            <div class=\"admin-requests-detail-main\">\n              <p>\n                Request Initialized\n              </p>\n              <p>\n                {{request.comments}}\n              </p>\n            </div>\n\n            <!-- Complete request -->\n            <ng-container *ngIf=\"request.status == 3 || request.status == 4\">\n                <div class=\"admin-requests-detail-time\">\n                  <div class=\"admin-requests-detail-indicator status-3\"></div>\n                  <p>\n                    {{request.updatedAt | doctime: true}}\n                  </p>\n                </div>\n                <div class=\"admin-requests-detail-main\">\n                  <p>\n                    {{arrStatus[request.status]}}\n                  </p>\n                  <p>\n                    {{request.comments}}\n                  </p>\n                </div>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"admin-requests-item-footer\">\n          <div>\n            <!-- <span *ngIf=\"request.isCategoryAssigned\" (click)=\"onClickAssignRequest($event, request)\">Assign To Expert</span> -->\n            <span *ngIf=\"request.category == 16 && !request.isCategoryAssigned\" (click)=\"onClickAssignCategory($event, i)\">Assign Category</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light); }\n\nion-footer ion-title {\n  text-align: center; }\n\nion-list {\n  padding-left: 40px; }\n\nion-list div p {\n    margin: 2px 0;\n    font-size: .8em; }\n\n#admin-requests-list {\n  margin: 16px; }\n\n.admin-requests-item {\n  box-shadow: 0 2px 12px #dcdcdc;\n  margin-bottom: 2vh;\n  background-color: white;\n  padding: 16px;\n  border-radius: 6px;\n  cursor: pointer; }\n\n.admin-requests-item-header {\n  display: flex; }\n\n.admin-requests-item-header > div:first-child {\n  flex: 2; }\n\n.admin-requests-item-header > div:nth-child(2) {\n  flex: 1;\n  text-align: right; }\n\n.admin-requests-item-header > div:nth-child(2) span {\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-size: .8em; }\n\n.admin-requests-item-body > p {\n  margin: 8px 0;\n  font-size: .9em; }\n\n.admin-requests-detail-time {\n  display: flex;\n  align-items: center; }\n\n.admin-requests-detail-time p {\n    margin: 0 0 0 32px;\n    color: #797979; }\n\n.admin-requests-detail-main {\n  margin: 1px 0 0 5.5px;\n  padding-left: 39px;\n  border-left: 5px solid #CCCED0; }\n\n.admin-requests-detail-main p {\n    margin: 0; }\n\n.admin-requests-detail-main > p:first-child {\n  padding: 16px 0 8px 0;\n  color: #505050; }\n\n.admin-requests-detail-main > p:nth-child(2) {\n  padding-bottom: 16px;\n  color: #99A2A8; }\n\n.admin-requests-detail-indicator {\n  width: 16px;\n  height: 16px;\n  background-color: #319818;\n  border-radius: 50%; }\n\n.admin-requests-item-footer {\n  margin-top: 16px; }\n\n.admin-requests-item-footer div {\n    text-align: right; }\n\n.admin-requests-item-footer div span {\n      padding: 4px 12px;\n      background-color: #2b7fea;\n      border-radius: 4px;\n      font-size: .8em;\n      color: white;\n      box-shadow: 0 2px 4px #888888; }\n\n.status-0 {\n  background-color: #ff7373; }\n\n.status-1 {\n  background-color: #319818; }\n\n.status-2 {\n  background-color: #2b7fea; }\n\n.status-3, .status-4 {\n  background-color: #F5CD82; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcmVxdWVzdHMvYWRtaW4tcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQWEsRUFBQTs7QUFHakI7RUFFUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFJWSxhQUFhO0lBQ2IsZUFBZSxFQUFBOztBQUszQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksT0FBTyxFQUFBOztBQUdYO0VBQ0ksT0FBTztFQUNQLGlCQUFpQixFQUFBOztBQUZyQjtJQUlRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGdkI7SUFJUSxrQkFBa0I7SUFDbEIsY0FBYyxFQUFBOztBQUl0QjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBSGxDO0lBS1EsU0FBUyxFQUFBOztBQUlqQjtFQUNJLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksb0JBQW9CO0VBQ3BCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7SUFHUSxpQkFBaUIsRUFBQTs7QUFIekI7TUFLWSxpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsWUFBWTtNQUNaLDZCQUE2QixFQUFBOztBQUt6QztFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcmVxdWVzdHMvYWRtaW4tcmVxdWVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBkaXYge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNhZG1pbi1yZXF1ZXN0cy1saXN0IHtcbiAgICBtYXJnaW46IDE2cHg7XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1pdGVtIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMnB4ICNkY2RjZGM7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkbWluLXJlcXVlc3RzLWl0ZW0taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRtaW4tcmVxdWVzdHMtaXRlbS1oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZsZXg6IDI7XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1pdGVtLWhlYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuXG4uYWRtaW4tcmVxdWVzdHMtaXRlbS1ib2R5ID4gcCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1kZXRhaWwtdGltZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDMycHg7XG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgIH1cbn1cblxuLmFkbWluLXJlcXVlc3RzLWRldGFpbC1tYWluIHtcbiAgICBtYXJnaW46IDFweCAwIDAgNS41cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzOXB4O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI0NDQ0VEMDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLmFkbWluLXJlcXVlc3RzLWRldGFpbC1tYWluID4gcDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMTZweCAwIDhweCAwO1xuICAgIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4uYWRtaW4tcmVxdWVzdHMtZGV0YWlsLW1haW4gPiBwOm50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6ICM5OUEyQTg7XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1kZXRhaWwtaW5kaWNhdG9yIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxOTgxODtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5hZG1pbi1yZXF1ZXN0cy1pdGVtLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjdmZWE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzg4ODg4ODtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0YXR1cy0wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3MzczO1xufVxuXG4uc3RhdHVzLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTk4MTg7XG59XG5cbi5zdGF0dXMtMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiN2ZlYTtcbn1cblxuLnN0YXR1cy0zLCAuc3RhdHVzLTQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUNEODI7XG59XG5cbi8vIC5hZG1pbi1yZXF1ZXN0cy1pdGVtIHtcbiAgICAvLyBib3gtc2hhZG93OiAwIDJweCA0cHggI2IzYjNiMztcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyB9XG5cbi8vIC5hZG1pbi1yZXF1ZXN0LWl0ZW0taGVhZGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4MGZmO1xuLy8gICAgIHAge1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5hZG1pbi1yZXF1ZXN0LWl0ZW0tY29udGVudCB7XG4vLyAgICAgbWFyZ2luOiAxNnB4O1xuLy8gfVxuXG4vLyAuYWRtaW4tcmVxdWVzdC1pdGVtLWZvb3RlciB7XG4vLyAgICAgcGFkZGluZzogMCAxNnB4IDE2cHggMTZweDtcbi8vICAgICBwIHtcbi8vICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICBmb250LXNpemU6IC44ZW07XG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgIH1cbi8vIH1cblxuLy8gLmFkbWluLXJlcXVlc3RzLWNvbnRyb2xsZXJzLWNvbnRhaW5lciB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBkaXYge1xuLy8gICAgICAgICBmbGV4OiAxO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gaW9uLWxpc3Qge1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuLy8gfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/admin-requests/admin-requests.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/admin-requests/admin-requests.page.ts ***!
  \*******************************************************************/
/*! exports provided: AdminRequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRequestsPage", function() { return AdminRequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _modal_assign_category_assign_category_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/assign-category/assign-category.page */ "./src/app/pages/modal/assign-category/assign-category.page.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");










var AdminRequestsPage = /** @class */ (function () {
    function AdminRequestsPage(navCtrl, loadingCtrl, apiService, platform, file, transfer, modalCtrl, toastService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.platform = platform;
        this.file = file;
        this.transfer = transfer;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        /**
         * Requests array
         */
        this.arrRequests = [];
        /**
         * Status array
         */
        this.arrStatus = _constants__WEBPACK_IMPORTED_MODULE_7__["STATUS"];
        /**
         * Category array
         */
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_7__["CATEGORIES"];
    }
    AdminRequestsPage.prototype.ngOnInit = function () {
    };
    AdminRequestsPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    AdminRequestsPage.prototype.initPage = function () {
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
                        this.arrRequests = [];
                        this.apiService.getAllRequests()
                            .subscribe(function (res) {
                            if (res.data) {
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].status == 0) {
                                        _this.arrRequests.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, res.data[i], { expanded: false, expandattachment: false, isCategoryAssigned: false }));
                                    }
                                }
                                _this.arrRequests = res.data;
                            }
                            requestLoader.dismiss();
                            console.log(_this.arrRequests);
                        }, function (error) {
                            console.log(error);
                            requestLoader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * View Details of request
     * @param index arrRequests index
     */
    AdminRequestsPage.prototype.onClickRequest = function (index) {
        this.arrRequests[index].expanded = !this.arrRequests[index].expanded;
    };
    /**
     * Toggle attachments
     * @param evt Click Event
     * @param i arrRequests index
     */
    AdminRequestsPage.prototype.onToggleViewAttachment = function (evt, i) {
        evt.stopPropagation();
        this.arrRequests[i].expandattachment = !this.arrRequests[i].expandattachment;
    };
    /**
     * Check platform
     *  if mobile: use file transfer plugin
     *  else directly download
     * @param evt Click Event
     * @param filename Filename to download
     */
    AdminRequestsPage.prototype.onClickAttachments = function (evt, filename) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isMobile, fileTransfer, err_1;
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
     * If the category of request is "I don't know", admin can select request.
     * @param objRequest Assign request to expert
     */
    AdminRequestsPage.prototype.onClickAssignRequest = function (evt, objRequest) {
        // evt.stopPropagation();
        // this.navCtrl.navigateForward('/admin-assign-expert/' + objRequest._id + "/" + objRequest.category);
    };
    /**
     * Assign category to request
     * @param evt click event
     * @param index index request object
     */
    AdminRequestsPage.prototype.onClickAssignCategory = function (evt, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignModal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.stopPropagation();
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_assign_category_assign_category_page__WEBPACK_IMPORTED_MODULE_8__["AssignCategoryPage"],
                                cssClass: 'assign-modal',
                                backdropDismiss: false
                            })];
                    case 1:
                        assignModal = _a.sent();
                        return [4 /*yield*/, assignModal.present()];
                    case 2:
                        _a.sent();
                        assignModal.onDidDismiss()
                            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var assignLoader, error_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!data.data) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.loadingCtrl.create({
                                                message: "Please wait..."
                                            })];
                                    case 1:
                                        assignLoader = _a.sent();
                                        return [4 /*yield*/, assignLoader.present()];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        _a.trys.push([3, 5, , 6]);
                                        return [4 /*yield*/, this.apiService.assignCategoryToRequest(this.arrRequests[index]._id, data.data)];
                                    case 4:
                                        _a.sent();
                                        this.arrRequests[index].category = data.data;
                                        this.arrRequests[index].isCategoryAssigned = true;
                                        assignLoader.dismiss();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        error_1 = _a.sent();
                                        console.log(error_1);
                                        assignLoader.dismiss();
                                        this.toastService.showToast("Operation failed!");
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (error) {
                            console.log(error);
                            _this.toastService.showToast("Operation failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Navigate to landing page
     */
    AdminRequestsPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    AdminRequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-requests',
            template: __webpack_require__(/*! ./admin-requests.page.html */ "./src/app/pages/admin/admin-requests/admin-requests.page.html"),
            styles: [__webpack_require__(/*! ./admin-requests.page.scss */ "./src/app/pages/admin/admin-requests/admin-requests.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
    ], AdminRequestsPage);
    return AdminRequestsPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-requests-admin-requests-module.js.map