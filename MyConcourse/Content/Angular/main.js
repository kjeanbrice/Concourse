(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ang6';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index */ "./src/app/components/index.ts");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/index */ "./src/app/routes/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _routes_guards_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/guards/index */ "./src/app/routes/guards/index.ts");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/index */ "./src/app/modules/index.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["NavbarHomeComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["SubNavbarComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_index__WEBPACK_IMPORTED_MODULE_4__["DiscussionBoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _routes_index__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_8__["ErrorsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModule"]
            ],
            providers: [
                _services_index__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _services_index__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
                _services_index__WEBPACK_IMPORTED_MODULE_6__["DiscussionBoardService"],
                _routes_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboardcomponent/dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboardcomponent/dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card-options-settings{\r\n    color:#495057 !important;\r\n}\r\n\r\n.card-content{\r\n    min-height: 230px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.modal-title-settings{\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.hide-item{\r\n    display:none;\r\n}\r\n\r\n.group-area{\r\n    min-height: 70vh;\r\n}\r\n\r\n.modal-wrap{\r\n    word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmRjb21wb25lbnQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkY29tcG9uZW50L2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY2FyZC1vcHRpb25zLXNldHRpbmdze1xyXG4gICAgY29sb3I6IzQ5NTA1NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi5tb2RhbC10aXRsZS1zZXR0aW5nc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uaGlkZS1pdGVte1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uZ3JvdXAtYXJlYXtcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbn1cclxuLm1vZGFsLXdyYXB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboardcomponent/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboardcomponent/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <!--Navigation bar-->\r\n    <app-navbar></app-navbar>\r\n    <!--Nav Options Area-->\r\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-lg\">\r\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\r\n              <li class=\"nav-item\">\r\n                <a href=\"#\" class=\"nav-link\"><i class=\"fe fe-home\"></i> Home</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-group-modal\"><i\r\n                    class=\"fe fe-box\"></i> Create Group</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"#\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#join-group-modal\"><i\r\n                    class=\"fe fe-check-square\"></i> Join Group</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 ml-auto\">\r\n            <form class=\"input-icon my-3 my-lg-0\">\r\n              <input type=\"search\" class=\"form-control header-search\" placeholder=\"Search&hellip;\" tabindex=\"1\">\r\n              <div class=\"input-icon-addon\">\r\n                <i class=\"fe fe-search\"></i>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Nav Options Area End-->\r\n\r\n    <!-- Group Area -->\r\n    <div class=\"my-3 my-mid-5\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"alert alert-success alert-dismissible {{alert_success_settings}}\">\r\n              <button id=\"alert-success-creategroup\" (click)=\"onAlertSuccessClose($event)\" class=\"close\"></button>\r\n              <i class=\"fe fe-check mr-2\" aria-hidden=\"true\"></i> {{alert_success_message}}\r\n            </div>\r\n            <form class=\"card\" action=\"javascript:void(0);\" method=\"post\">\r\n              <div class=\"card-header\">\r\n                <h3 class=\"card-title\"> My Groups</h3>\r\n                <div class=\"card-options card-options-settings\">\r\n                  <div class=\"custom-controls-stacked\">\r\n                    <label class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"example-inline-radios\" value=\"option1\"\r\n                        checked=\"\">\r\n                      <span class=\"custom-control-label\">All</span>\r\n                    </label>\r\n                    <label class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"example-inline-radios\" value=\"option2\">\r\n                      <span class=\"custom-control-label\">Groups you created</span>\r\n                    </label>\r\n                    <label class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" class=\"custom-control-input\" name=\"example-inline-radios\" value=\"option3\">\r\n                      <span class=\"custom-control-label\">Groups you joined</span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!--Individual Group Card-->\r\n              <div class=\"card-body group-area\">\r\n                <div class=\"group-content\">\r\n                  <div *ngFor=\"let groups of groups_container; let i = index;\" class=\"row\">\r\n                    <div *ngFor=\"let groupitem of groups\" class=\"col-md-6 col-xl-6 col-sm-6\">\r\n                      <div class=\"card\">\r\n\r\n                        <div *ngIf=\"groupitem.IsOwner == 1; else memberCardBackground\" class=\"card-status bg-blue\">\r\n                        </div>\r\n                        <ng-template #memberCardBackground>\r\n                          <div class=\"card-status bg-green\"></div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"card-header\">\r\n                          <h3 class=\"card-title\">{{groupitem.Title}}</h3>\r\n                          <div class=\"card-options\">\r\n\r\n                            <span *ngIf=\"groupitem.IsOwner == 1; else memberTag\" class=\"tag tag-blue\">Owner</span>\r\n                            <ng-template #memberTag>\r\n                              <span class=\"tag tag-green\">Member</span>\r\n                            </ng-template>\r\n\r\n                            <a href=\"javascript:void(0);\" class=\"card-options-collapse\" data-toggle=\"card-collapse\"><i\r\n                                class=\"fe fe-chevron-up\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"card-content\">{{groupitem.BoardDescription}}</div>\r\n                          <div>\r\n                            <span *ngIf=\"groupitem.IsOwner == 1; else memberCreatorName\"\r\n                              class=\"tag tag-rounded tag-blue\">Created By: {{groupitem.FirstName}}\r\n                              {{groupitem.LastName}}</span>\r\n                            <ng-template #memberCreatorName>\r\n                              <span class=\"tag tag-rounded tag-green\">Created By: {{groupitem.FirstName}}\r\n                                {{groupitem.LastName}}</span>\r\n                            </ng-template>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <div class=\"container\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-1 col-lg-1 col-xl-1 offset-11\">\r\n                                <div class=\"item-action dropdown\">\r\n                                  <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                      class=\"fe fe-more-horizontal\"></i></a>\r\n\r\n\r\n                                  <div class=\"dropdown-menu dropdown-menu-right\">\r\n\r\n                                    <div *ngIf=\"groupitem.IsOwner == 1; then OwnerGroupOptions else MemberGroupOptions\">\r\n                                    </div>\r\n\r\n                                    <ng-template #OwnerGroupOptions>\r\n                                      <a name=\"entergroup\" (click)=\"onClickGroupOptions($event)\" routerLink=\"/home\"\r\n                                        attr.data-discussionid=\"{{groupitem.DiscussionBoardId}}\"\r\n                                        class=\"dropdown-item\"><i\r\n                                          class=\"dropdown-icon fe fe-arrow-right-circle\"></i>Enter</a>\r\n\r\n                                      <span id=\"edit{{groupitem.DiscussionBoardId}}\" data-toggle=\"modal\"\r\n                                        class=\"hide-item\" data-target=\"#edit-group-modal\"></span>\r\n                                      <a name=\"editgroup\" (click)=\"onClickGroupOptions($event)\"\r\n                                        attr.data-discussionid=\"{{groupitem.DiscussionBoardId}}\"\r\n                                        href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                          class=\"dropdown-icon fe fe-edit-2\"></i>Edit </a>\r\n\r\n                                      <span id=\"details{{groupitem.DiscussionBoardId}}\" data-toggle=\"modal\"\r\n                                        data-target=\"#details-modal\" class=\"hide-item\"></span>\r\n                                      <a name=\"detailsgroup\" (click)=\"onClickGroupOptions($event)\"\r\n                                        attr.data-discussionid=\"{{groupitem.DiscussionBoardId}}\"\r\n                                        href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                          class=\"dropdown-icon fe fe-book-open\"></i> Details</a>\r\n\r\n                                      <div class=\"dropdown-divider\"></div>\r\n\r\n                                      <span id=\"delete{{groupitem.DiscussionBoardId}}\" data-toggle=\"modal\"\r\n                                        data-target=\"#delete-group-modal\" class=\"hide-item\"></span>\r\n                                      <a name=\"deletegroup\" (click)=\"onClickGroupOptions($event)\"\r\n                                        href=\"javascript:void(0)\"\r\n                                        attr.data-discussionid=\"{{groupitem.DiscussionBoardId}}\"\r\n                                        class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-trash-2\"></i> Delete</a>\r\n                                    </ng-template>\r\n\r\n                                    <ng-template #MemberGroupOptions>\r\n                                      <a (click)=\"onClickGroupOptions($event)\" routerLink=\"/home\"\r\n                                        attr.data-discussionid=\"{{groupitem.DiscussionBoardId}}\"\r\n                                        class=\"dropdown-item\"><i\r\n                                          class=\"dropdown-icon fe fe-arrow-right-circle\"></i>Enter</a>\r\n                                    </ng-template>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <!--Individual Group Card End-->\r\n\r\n            </form>\r\n            <!-- Form End-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- Group Area End-->\r\n\r\n    <!-- Modal Area-->\r\n    <!-- Modal -->\r\n\r\n\r\n    <!--Create Group Modal-->\r\n    <div class=\"modal fade modal-wrap\" id=\"create-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Group Creation\r\n              <button id=\"createmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                aria-label=\"Close\"></button>\r\n            </h5>\r\n\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form action=\"javascript:void(0);\" action=\"post\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">Group Name\r\n                          <span class=\"form-required\">*</span>\r\n                          <span id=\"creategroup-title-count\"\r\n                            class=\"form-label-small\">{{create_group_title_count}}</span>\r\n                        </label>\r\n                        <input id=\"creategroup-title\" attr.maxlength=\"{{MAX_TITLE_LIMIT}}\" class=\"form-control\"\r\n                          type=\"input\" name=\"group-name\" placeholder=\"Enter Group Name\"\r\n                          (input)=\"onUpdateCreateGroup($event)\" (keyup)=\"onUpdateCreateGroup($event)\" />\r\n                        <div id=\"error-creategroup-title\" class=\"invalid-feedback\">{{error_create_group_title}}</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">Description\r\n                          <span id=\"creategroup-description-count\"\r\n                            class=\"form-label-small\">{{create_group_description_count}}</span>\r\n                        </label>\r\n                        <textarea attr.maxlength=\"{{MAX_DESCRIPTION_LIMIT}}\" id=\"creategroup-description\"\r\n                          (input)=\"onUpdateCreateGroup($event)\" (keyup)=\"onUpdateCreateGroup($event)\"\r\n                          class=\"form-control\" name=\"group-description\" style=\"resize: none;\" rows=\"6\"\r\n                          placeholder=\"Enter a short description for the group\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">Group Code\r\n                          <span class=\"form-required\">*</span>\r\n                          <span id=\"creategroup-code-count\" class=\"form-label-small\">{{create_group_code_count}}</span>\r\n                        </label>\r\n                        <input id=\"creategroup-code\" attr.maxlength=\"{{MAX_CODE_LIMIT}}\" class=\"form-control\"\r\n                          type=\"input\" name=\"group-name\" placeholder=\"Enter a group code\"\r\n                          (input)=\"onUpdateCreateGroup($event)\" (keyup)=\"onUpdateCreateGroup($event)\" />\r\n                        <div id=\"error-creategroup-code\" class=\"invalid-feedback\">{{error_create_group_code}}</div>\r\n                        <div id=\"error-creategroup-server\" class=\"invalid-feedback\">{{error_create_group_server}}</div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <div class=\"{{css_loading_creategroup}}\">\r\n              <div class=\"loader\"></div>\r\n              <div class=\"dimmer-content\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\"\r\n                  id=\"btn-creategroup\">Create Group</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--Edit Group Modal-->\r\n    <div class=\"modal fade\" id=\"edit-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Make Changes To This Group\r\n              <button id=\"editmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                aria-label=\"Close\"></button>\r\n            </h5>\r\n\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form action=\"javascript:void(0);\" action=\"post\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Group Name\r\n                        <span class=\"form-required\">*</span>\r\n                        <span class=\"form-label-small\">0/20</span>\r\n                      </label>\r\n                      <input id=\"edit-title\" class=\"form-control\" type=\"input\" name=\"group-name\"\r\n                        placeholder=\"Enter Group Name\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Description\r\n                        <span class=\"form-label-small\">10/200</span>\r\n                      </label>\r\n\r\n                      <textarea id=\"edit-description\" class=\"form-control\" name=\"group-description\"\r\n                        style=\"resize: none;\" rows=\"6\" placeholder=\"Enter a short description for the group\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Current Group Code\r\n                      </label>\r\n                      <input id=\"edit-currgroupcode\" class=\"form-control\" type=\"input\" name=\"old-group-code\" disabled\r\n                        placeholder=\"Group Code\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">New Group Code\r\n                        <span class=\"form-required\">*</span>\r\n                        <span class=\"form-label-small\">0/15</span>\r\n                      </label>\r\n                      <input id=\"edit-newgroupcode\" class=\"form-control\" type=\"input\" name=\"new-group-code\"\r\n                        placeholder=\"Enter a group code\" />\r\n                        <div id=\"error-editgroup\" class=\"invalid-feedback\">{{error_edit_group}}</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <span class=\"hide-item\" id=\"edit-discussionid\" attr.data-discussionid=''>void</span>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <div class=\"{{css_loading_editgroup}}\">\r\n                <div class=\"loader\"></div>\r\n                <div class=\"dimmer-content\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\"\r\n                    id=\"btn-editgroup\">Edit Group</button>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Join Group Modal-->\r\n    <div class=\"modal fade\" id=\"join-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Get Connected and Join A\r\n              Group\r\n              <button id=\"joinmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form action=\"javascript:void(0);\" action=\"post\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Group ID\r\n                        <span class=\"form-required\">*</span>\r\n                      </label>\r\n                      <input (input)=\"onUpdateJoinGroup($event)\" (keyup)=\"onUpdateJoinGroup($event)\" id=\"joingroup-id\" class=\"form-control\" type=\"input\" name=\"group-name\" placeholder=\"Enter Group ID\" />\r\n                      <div id=\"error-joingroup-id\" class=\"invalid-feedback\">{{error_create_group_code}}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Group Code\r\n                        <span class=\"form-required\">*</span>\r\n                      </label>\r\n                      <input attr.maxlength=\"{{MAX_CODE_LIMIT}}\" (input)=\"onUpdateJoinGroup($event)\" (keyup)=\"onUpdateJoinGroup($event)\" id=\"joingroup-code\" class=\"form-control\" type=\"input\" name=\"group-code\" placeholder=\"Enter Group Code\" />\r\n                      <div id=\"error-joingroup-code\" class=\"invalid-feedback\">{{error_create_group_code}}</div>\r\n                      <div id=\"error-joingroup-server\" class=\"invalid-feedback\">{{error_join_group_server}}</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <div class=\"{{css_loading_joingroup}}\">\r\n              <div class=\"loader\"></div>\r\n              <div class=\"dimmer-content\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\"\r\n                  id=\"btn-joingroup\">Join Group</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Details Modal-->\r\n    <div class=\"modal fade\" id=\"details-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Group Details\r\n              <button id=\"detailsmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                aria-label=\"Close\"></button>\r\n            </h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form action=\"javascript:void(0);\" action=\"post\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Group ID\r\n                      </label>\r\n                      <input id=\"details-groupid\" class=\"form-control\" type=\"input\" disabled=\"\"\r\n                        placeholder=\"Group ID\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">Group Code\r\n                      </label>\r\n                      <input id=\"details-groupcode\" class=\"form-control\" type=\"input\" disabled=\"\"\r\n                        placeholder=\"Group Code\" />\r\n                      <div class=\"invalid-feedback\"></div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Delete Group  Modal-->\r\n    <div class=\"modal fade\" id=\"delete-group-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n      aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n        <span class=\"hide-item\" id = \"delete-discussionid\" attr.data-discussionid=''></span>\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Are you sure?\r\n              <button id=\"deletegroup-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                aria-label=\"Close\"></button>\r\n            </h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form action=\"javascript:void(0);\" action=\"post\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 modal-title-settings\">\r\n                    <h5> Do you really want to delete this group? This process cannot be undone.</h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <div id=\"error-deletegroup\" class=\"invalid-feedback\">{{error_delete_group}}</div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <div class=\"{{css_loading_deletegroup}}\">\r\n                <div class=\"loader\"></div>\r\n                <div class=\"dimmer-content\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click) = \"onSubmit($event)\" id=\"btn-deletegroup\">Delete Group</button>\r\n                </div>\r\n              </div>    \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Modal Area End-->\r\n\r\n  </div>\r\n  <app-footer-nav></app-footer-nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboardcomponent/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboardcomponent/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants.export */ "./src/app/constants/constants.export.ts");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dashboard_service, discussionboard_service) {
        this.router = router;
        this.dashboard_service = dashboard_service;
        this.discussionboard_service = discussionboard_service;
        this.MAX_TITLE_LIMIT = 80;
        this.MAX_DESCRIPTION_LIMIT = 500;
        this.MAX_CODE_LIMIT = 30;
        this.load_group_obs = null;
        this.items_per_row = 2;
        this.valid_create_group_title = false;
        this.valid_create_group_description = false;
        this.valid_create_group_code = false;
        this.valid_create_group_info = false;
        this.valid_join_group_id = false;
        this.valid_join_group_code = false;
        this.valid_join_group_info = false;
        this.css_loading_creategroup = 'dimmer';
        this.css_loading_joingroup = 'dimmer';
        this.css_loading_deletegroup = 'dimmer';
        this.css_loading_editgroup = 'dimmer';
        this.alert_success_settings = 'hide-item';
        this.alert_success_message = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.loadScript('content/angular/assets/js/jquery-3.2.1.min.js');
        this.loadScript('content/angular/assets/js/modifiedcore.js');
        this.loadGroups(0);
        this.loadGroups(10000);
        this.resetFormFields();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.load_group_obs !== null) {
            this.load_group_obs.unsubscribe();
        }
    };
    /*onCreateGroup(event: any): void {
      this.css_loading_creategroup = 'dimmer active';
      if (this.valid_create_group_info === true) {
        if (this.create_group_description === undefined || this.create_group_description === null) {
          this.create_group_description = '';
        }
  
        this.dashboard_service.createGroup(this.create_group_title, this.create_group_description, this.create_group_code).subscribe(
          data => {
            document.getElementById('createmodal-close').click();
            this.changeAlertSuccessMessage('You have successfully created a new group called ' + this.create_group_title + '!');
            this.onAlertSuccessOpen();
            this.resetFormFields();
            document.getElementById('error-creategroup-server').style.display = 'none';
            this.loadGroups();
          },
          errors => {
            if (errors.error) {
              this.error_create_group_server = errors.error;
            } else {
              this.error_create_group_server = ERROR_SERVER_ERROR;
            }
            document.getElementById('error-creategroup-server').style.display = 'block';
            this.css_loading_creategroup = 'dimmer';
          });
      } else {
        this.css_loading_creategroup = 'dimmer';
        console.log('Dashboard: CreateGroup Error');
      }
  
    }
  
    onJoinGroup(event: any): void {
      this.css_loading_joingroup = 'dimmer active';
      if (this.valid_join_group_info === true) {
        this.dashboard_service.joinGroup(this.join_group_id, this.join_group_code).subscribe(
          data => {
            this.changeAlertSuccessMessage('You have successfully joined a new group!');
            this.onAlertSuccessOpen();
            this.resetFormFields();
            document.getElementById('joinmodal-close').click();
            document.getElementById('error-joingroup-server').style.display = 'none';
            this.css_loading_joingroup = 'dimmer';
            this.loadGroups();
          },
          errors => {
            console.log('Error:' + JSON.stringify(errors));
            if (errors.error) {
              this.error_join_group_server = errors.error;
            } else {
              this.error_join_group_server = ERROR_SERVER_ERROR;
            }
            document.getElementById('error-joingroup-server').style.display = 'block';
            this.css_loading_joingroup = 'dimmer';
          }
        );
      }
    }*/
    DashboardComponent.prototype.changeAlertSuccessMessage = function (message) {
        this.alert_success_message = message;
    };
    DashboardComponent.prototype.onAlertSuccessClose = function (event) {
        this.alert_success_settings = 'hide-item';
    };
    DashboardComponent.prototype.onAlertSuccessOpen = function () {
        if (this.alert_success_settings === 'hide-item') {
            this.alert_success_settings = '';
        }
        else {
            this.alert_success_settings = 'hide-item';
            this.alert_success_settings = '';
        }
    };
    DashboardComponent.prototype.loadGroups = function (period) {
        var _this = this;
        if (period > 0) {
            this.load_group_obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(period).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function () { return _this.dashboard_service.retrieveGroups(); })).subscribe(function (data) {
                _this.groups = data;
                var container_index = 0;
                _this.groups_container = [];
                _this.groups_container[container_index] = [];
                for (var i = 0; i < _this.groups.length; i++) {
                    if (i % _this.items_per_row === 0 && i !== 0) {
                        _this.groups_container[++container_index] = [];
                    }
                    _this.groups_container[container_index].push(_this.groups[i]);
                    console.log('Results loadGroups()');
                }
            }, function (error) {
                console.log('An error occured while attempting to load data. Error: ' + error);
            });
        }
        else {
            this.dashboard_service.retrieveGroups().subscribe(function (data) {
                _this.groups = data;
                var container_index = 0;
                _this.groups_container = [];
                _this.groups_container[container_index] = [];
                for (var i = 0; i < _this.groups.length; i++) {
                    if (i % _this.items_per_row === 0 && i !== 0) {
                        _this.groups_container[++container_index] = [];
                    }
                    _this.groups_container[container_index].push(_this.groups[i]);
                    console.log('Results: ' + JSON.stringify(_this.groups_container));
                }
            }, function (error) {
                console.log('An error occured while attempting to load data. Error: ' + error);
            });
        }
    };
    DashboardComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log('OnSubmit');
        switch (event.target.id) {
            case 'btn-editgroup':
                // API Call
                this.css_loading_editgroup = 'dimmer active';
                var new_title = document.getElementById('edit-title').value;
                var new_description = document.getElementById('edit-description').value;
                var old_group_code = document.getElementById('edit-currgroupcode').value;
                var new_group_code = document.getElementById('edit-newgroupcode').value;
                var edit_itemid = document.getElementById('edit-discussionid').getAttribute('data-discussionid');
                new_title = new_title ? new_title : '';
                new_description = new_description ? new_description : '';
                if (new_group_code === undefined || new_group_code === null || new_group_code.trim().length === 0) {
                    if (old_group_code === undefined || old_group_code === null || old_group_code.trim().length === 0) {
                        new_group_code = '';
                    }
                    else {
                        new_group_code = old_group_code;
                    }
                }
                this.dashboard_service.editGroup(new_title, new_description, new_group_code, edit_itemid).subscribe(function (data) {
                    _this.changeAlertSuccessMessage('You have successfully edited a group!');
                    _this.onAlertSuccessOpen();
                    _this.resetFormFields();
                    document.getElementById('editmodal-close').click();
                    document.getElementById('error-editgroup').style.display = 'none';
                    _this.css_loading_editgroup = 'dimmer';
                    _this.loadGroups(0);
                }, function (errors) {
                    console.log('Error:' + JSON.stringify(errors));
                    if (errors.error) {
                        _this.error_edit_group = errors.error;
                    }
                    else {
                        _this.error_edit_group = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_SERVER"];
                    }
                    document.getElementById('error-editgroup').style.display = 'block';
                    _this.css_loading_editgroup = 'dimmer';
                });
                break;
            case 'btn-joingroup':
                // API Call
                this.css_loading_joingroup = 'dimmer active';
                if (this.valid_join_group_info === true) {
                    this.dashboard_service.joinGroup(this.join_group_id, this.join_group_code).subscribe(function (data) {
                        _this.changeAlertSuccessMessage('You have successfully joined a new group!');
                        _this.onAlertSuccessOpen();
                        _this.resetFormFields();
                        document.getElementById('joinmodal-close').click();
                        document.getElementById('error-joingroup-server').style.display = 'none';
                        _this.css_loading_joingroup = 'dimmer';
                        _this.loadGroups(0);
                    }, function (errors) {
                        console.log('Error:' + JSON.stringify(errors));
                        if (errors.error) {
                            _this.error_join_group_server = errors.error;
                        }
                        else {
                            _this.error_join_group_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_SERVER"];
                        }
                        document.getElementById('error-joingroup-server').style.display = 'block';
                        _this.css_loading_joingroup = 'dimmer';
                    });
                }
                break;
            case 'btn-creategroup':
                // API Call
                this.css_loading_creategroup = 'dimmer active';
                if (this.valid_create_group_info === true) {
                    if (this.create_group_description === undefined || this.create_group_description === null) {
                        this.create_group_description = '';
                    }
                    this.dashboard_service.createGroup(this.create_group_title, this.create_group_description, this.create_group_code).subscribe(function (data) {
                        document.getElementById('createmodal-close').click();
                        _this.changeAlertSuccessMessage('You have successfully created a new group called \'' + _this.create_group_title + '\'!');
                        _this.onAlertSuccessOpen();
                        _this.resetFormFields();
                        document.getElementById('error-creategroup-server').style.display = 'none';
                        _this.loadGroups(0);
                    }, function (errors) {
                        if (errors.error) {
                            _this.error_create_group_server = errors.error;
                        }
                        else {
                            _this.error_create_group_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_SERVER"];
                        }
                        document.getElementById('error-creategroup-server').style.display = 'block';
                        _this.css_loading_creategroup = 'dimmer';
                    });
                }
                else {
                    this.css_loading_creategroup = 'dimmer';
                    console.log('Dashboard: CreateGroup Error');
                }
                break;
            case 'btn-deletegroup':
                // API Call
                this.css_loading_deletegroup = 'dimmer active';
                var item_id = document.getElementById('delete-discussionid').getAttribute('data-discussionid');
                if (item_id === null || item_id === undefined) {
                    this.error_delete_group = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_SERVER"];
                    document.getElementById('error-deletegroup').style.display = 'block';
                }
                else {
                    this.dashboard_service.deleteGroup(item_id).subscribe(function (data) {
                        _this.changeAlertSuccessMessage('You have successfully deleted the group.');
                        console.log('Delete: Success');
                        document.getElementById('error-deletegroup').style.display = 'none';
                        document.getElementById('deletegroup-close').click();
                        _this.onAlertSuccessOpen();
                        _this.loadGroups(0);
                        _this.resetFormFields();
                        _this.css_loading_deletegroup = 'dimmer';
                    }, function (errors) {
                        if (errors.error) {
                            _this.error_delete_group = errors.error;
                        }
                        else {
                            _this.error_delete_group = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_SERVER"];
                        }
                        document.getElementById('error-deletegroup').style.display = 'block';
                        _this.css_loading_deletegroup = 'dimmer';
                    });
                }
                break;
            default:
                console.log('OnSubmit: No event handler found for requested event.');
                break;
        }
    };
    DashboardComponent.prototype.onUpdateCreateGroup = function (event) {
        switch (event.target.id) {
            case 'creategroup-title':
                var title = event.target.value;
                if (title === null || title.trim().length === 0) {
                    this.error_create_group_title = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-creategroup-title').style.display = 'block';
                    this.valid_create_group_title = false;
                }
                else {
                    this.create_group_title = title.trim();
                    this.valid_create_group_title = true;
                    document.getElementById('error-creategroup-title').style.display = 'none';
                }
                this.create_group_title_count = event.target.value.length + '/' + this.MAX_TITLE_LIMIT;
                break;
            case 'creategroup-description':
                var description = event.target.value;
                if (description === null || description.trim().length === 0) {
                    description = '';
                }
                this.create_group_description_count = event.target.value.length + '/' + this.MAX_DESCRIPTION_LIMIT;
                this.create_group_description = description.trim();
                break;
            case 'creategroup-code':
                var groupcode = event.target.value;
                if (groupcode === null || groupcode.trim().length === 0) {
                    this.error_create_group_code = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-creategroup-code').style.display = 'block';
                    this.valid_create_group_code = false;
                }
                else {
                    this.create_group_code = groupcode.trim();
                    document.getElementById('error-creategroup-code').style.display = 'none';
                    this.valid_create_group_code = true;
                }
                this.create_group_code_count = event.target.value.length + '/' + this.MAX_CODE_LIMIT;
                break;
            default:
                console.log('OnUpdate: Dashboard Error');
                break;
        }
        if (this.valid_create_group_title && this.valid_create_group_code) {
            this.valid_create_group_info = true;
            document.getElementById('btn-creategroup').removeAttribute('disabled');
        }
        else {
            this.valid_create_group_info = false;
            document.getElementById('btn-creategroup').setAttribute('disabled', '');
        }
    };
    DashboardComponent.prototype.onUpdateJoinGroup = function (event) {
        switch (event.target.id) {
            case 'joingroup-id':
                var groupid = event.target.value.trim();
                this.valid_join_group_id = validator__WEBPACK_IMPORTED_MODULE_3__["isLength"](groupid, { min: 1, max: undefined });
                this.error_create_group_code = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_NAME_NOT_VALID"];
                if (this.valid_join_group_id) {
                    document.getElementById('error-joingroup-id').style.display = 'none';
                    this.join_group_id = groupid;
                }
                else {
                    document.getElementById('error-joingroup-id').style.display = 'block';
                }
                break;
            case 'joingroup-code':
                var groupcode = event.target.value.trim();
                this.error_create_group_code = _constants_constants_export__WEBPACK_IMPORTED_MODULE_2__["ERROR_NAME_NOT_VALID"];
                this.valid_join_group_code = validator__WEBPACK_IMPORTED_MODULE_3__["isLength"](groupcode, { min: 1, max: undefined });
                if (this.valid_join_group_code) {
                    this.join_group_code = groupcode;
                    document.getElementById('error-joingroup-code').style.display = 'none';
                }
                else {
                    document.getElementById('error-joingroup-code').style.display = 'block';
                }
                break;
            default:
                break;
        }
        if (this.valid_join_group_code && this.valid_join_group_id) {
            this.valid_join_group_info = true;
            document.getElementById('btn-joingroup').removeAttribute('disabled');
        }
        else {
            this.valid_join_group_info = false;
            document.getElementById('btn-joingroup').setAttribute('disabled', '');
        }
    };
    DashboardComponent.prototype.onClickGroupOptions = function (event) {
        var discussion_id = event.target.getAttribute('data-discussionid');
        if (discussion_id === null) {
            return null;
        }
        var item;
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].DiscussionBoardId === parseInt(discussion_id, 10)) {
                item = this.groups[i];
                break;
            }
        }
        if (item === null) {
            return;
        }
        switch (event.target.name) {
            case 'entergroup':
                var discussionboard_id = event.target.getAttribute('data-discussionid');
                this.router.navigate(['/discussion', discussionboard_id]);
                break;
            case 'editgroup':
                document.getElementById('edit-title').value = item.Title;
                document.getElementById('edit-description').value = item.BoardDescription;
                document.getElementById('edit-currgroupcode').value = item.Code;
                document.getElementById('edit-discussionid').value = discussion_id;
                document.getElementById('edit-discussionid').setAttribute('data-discussionid', discussion_id);
                document.getElementById('edit' + discussion_id).click();
                break;
            case 'detailsgroup':
                document.getElementById('details-groupid').value = item.CodeId + '';
                document.getElementById('details-groupcode').value = item.Code;
                document.getElementById('details' + discussion_id).click();
                break;
            case 'deletegroup':
                document.getElementById('delete' + discussion_id).click();
                document.getElementById('delete-discussionid').setAttribute('data-discussionid', discussion_id);
                break;
        }
    };
    DashboardComponent.prototype.resetFormFields = function () {
        document.getElementById('edit-title').value = '';
        document.getElementById('edit-description').value = '';
        document.getElementById('edit-currgroupcode').value = '';
        document.getElementById('edit-discussionid').value = '';
        document.getElementById('edit-newgroupcode').value = '';
        document.getElementById('creategroup-title').value = '';
        document.getElementById('creategroup-description').value = '';
        document.getElementById('creategroup-code').value = '';
        document.getElementById('joingroup-id').value = '';
        document.getElementById('joingroup-code').value = '';
        document.getElementById('error-creategroup-title').style.display = 'none';
        document.getElementById('error-creategroup-code').style.display = 'none';
        document.getElementById('error-joingroup-id').style.display = 'none';
        document.getElementById('error-joingroup-code').style.display = 'none';
        this.create_group_title_count = 0 + '/' + this.MAX_TITLE_LIMIT;
        this.create_group_description_count = 0 + '/' + this.MAX_DESCRIPTION_LIMIT;
        this.create_group_code_count = 0 + '/' + this.MAX_CODE_LIMIT;
        document.getElementById('btn-creategroup').setAttribute('disabled', '');
        document.getElementById('btn-joingroup').setAttribute('disabled', '');
        this.valid_create_group_title = false;
        this.valid_create_group_description = false;
        this.valid_create_group_code = false;
        this.valid_create_group_info = false;
        this.css_loading_creategroup = 'dimmer';
        this.css_loading_joingroup = 'dimmer';
        this.css_loading_editgroup = 'dimmer';
        this.css_loading_deletegroup = 'dimmer';
    };
    DashboardComponent.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboardcomponent/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboardcomponent/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_index__WEBPACK_IMPORTED_MODULE_1__["DashboardService"],
            _services_index__WEBPACK_IMPORTED_MODULE_1__["DiscussionBoardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/discussionboardcomponent/discussionboard.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/discussionboardcomponent/discussionboard.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group-icon{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.padding-overide{\r\n    padding-left: .75rem !important; \r\n}\r\n\r\n.card-group-title{\r\n    font-size: 1.2rem !important;\r\n    font-weight: 600 !important;\r\n    vertical-align: middle;\r\n}\r\n\r\n.post-nav-heading, .member-nav-heading{\r\n    font-weight: 600;\r\n}\r\n\r\n.ql-editor-settings-view{\r\n}\r\n\r\n.ql-editor-settings-edit{\r\n}\r\n\r\n.q1-container{\r\n    font-size: inherit !important;\r\n    font-family: inherit !important;\r\n}\r\n\r\npre{\r\n     text-shadow: 0 0px white !important; \r\n}\r\n\r\n.dropdown-right{\r\n    float:right;\r\n}\r\n\r\n.card-footer-group{\r\n    border: none !important;\r\n}\r\n\r\n.members-list{\r\n    min-height: 20rem;\r\n    max-height: 30rem;\r\n    \r\n}\r\n\r\n.posts-list{\r\n    min-height: 40rem;\r\n    max-height: 50rem;\r\n\r\n    \r\n}\r\n\r\n.postrow {\r\n    padding: 1.0rem 1.0rem 1.0rem 0rem;\r\n    /*margin-right: 1.5rem;*/\r\n    background-color: none;\r\n    transition: background-color .5s ease-in-out;\r\n}\r\n\r\n.postrow:hover {\r\n    background-color: rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.cardbody-group{\r\n    padding: 0rem !important;\r\n}\r\n\r\n.activepost{\r\n    background-color: rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.modal-title-settings{\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.hide-item{\r\n    display:none;\r\n}\r\n\r\n.modal-wrap{\r\n    word-wrap: break-word;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjdXNzaW9uYm9hcmRjb21wb25lbnQvZGlzY3Vzc2lvbmJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUlBO0tBQ0ssbUNBQW1DO0FBQ3hDOztBQUlBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOzs7QUFHckI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUl0Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBSUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY3Vzc2lvbmJvYXJkY29tcG9uZW50L2Rpc2N1c3Npb25ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLWljb257XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhZGRpbmctb3ZlcmlkZXtcclxuICAgIHBhZGRpbmctbGVmdDogLjc1cmVtICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4uY2FyZC1ncm91cC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucG9zdC1uYXYtaGVhZGluZywgLm1lbWJlci1uYXYtaGVhZGluZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5xbC1lZGl0b3Itc2V0dGluZ3Mtdmlld3tcclxufVxyXG5cclxuLnFsLWVkaXRvci1zZXR0aW5ncy1lZGl0e1xyXG59XHJcblxyXG5cclxuXHJcbi5xMS1jb250YWluZXJ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxucHJle1xyXG4gICAgIHRleHQtc2hhZG93OiAwIDBweCB3aGl0ZSAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcblxyXG4uZHJvcGRvd24tcmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyLWdyb3Vwe1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZW1iZXJzLWxpc3R7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDMwcmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5wb3N0cy1saXN0e1xyXG4gICAgbWluLWhlaWdodDogNDByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHJlbTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLnBvc3Ryb3cge1xyXG4gICAgcGFkZGluZzogMS4wcmVtIDEuMHJlbSAxLjByZW0gMHJlbTtcclxuICAgIC8qbWFyZ2luLXJpZ2h0OiAxLjVyZW07Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wb3N0cm93OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuXHJcbi5jYXJkYm9keS1ncm91cHtcclxuICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZXBvc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcblxyXG5cclxuXHJcbi5tb2RhbC10aXRsZS1zZXR0aW5nc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uaGlkZS1pdGVte1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ubW9kYWwtd3JhcHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/discussionboardcomponent/discussionboard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/discussionboardcomponent/discussionboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <!--Navigation bar-->\r\n    <app-navbar></app-navbar>\r\n    <!--Nav Options Area-->\r\n    <div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\r\n      <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n\r\n          <div class=\"col-lg\">\r\n            <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\r\n              <li class=\"nav-item\">\r\n                <a href=\"#\" class=\"nav-link\"><i class=\"fe fe-home\"></i> Home</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0);\" class=\"nav-link\" data-toggle=\"modal\" data-target=\"#create-post-modal\"><i\r\n                    class=\"fe fe-box\"></i> Create Post</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"my-3 my-mid-5\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-sm-6\">\r\n\r\n            <!-- Post Selection Area-->\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n\r\n\r\n                <div class=\"card posts-list\">\r\n                  <div class=\"card-status card-status-left bg-purple\"></div>\r\n                  <div class=\"card-header\">\r\n                    <table class=\"table card-table\">\r\n                      <tr>\r\n                        <td width=\"1\" class=\"padding-overide\"> <i class=\"fa fa-comments group-icon\"></i></td>\r\n                        <td>\r\n                          <h3 class=\"card-title card-group-title\">Posts\r\n                          </h3>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"card-body cardbody-group o-auto\">\r\n                    <ul class=\"list-unstyled list-separated\">\r\n                      <li *ngFor=\"let post of current_posts; let i = index\" id=\"post-option{{post.PostId}}\"\r\n                        (click)=\"onChangePost(post.PostId)\" attr.data-postid=\"{{post.PostId}}\"\r\n                        class=\"list-separated-item postrow {{post.Active}} \">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit post-nav-heading\">{{post.Title}}</a>\r\n                            </div>\r\n                            <small\r\n                              class=\"d-block item-except text-sm text-muted h-1x\">{{posts_navigation_subsection[i]}}\r\n                            </small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div *ngIf=\"post.UserRole === 0\" class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a name=\"editpost\"  (click) = \"onClickPostOptions($event, post.PostId, 'edit')\" href=\"javascript:void(0)\"\r\n                                class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-edit-2\"></i>Edit </a>\r\n                                <div class=\"dropdown-divider\"></div> \r\n                                <a attr.data-postid=\"{{post.PostId}}\" (click) = \"onClickPostOptions($event, post.PostId, 'delete')\"  attr.data-discussionid=\"{{post.DiscussionID}}\"\r\n                                  href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Delete</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\"></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Post Selection Area-->\r\n\r\n            <!-- Member Area-->\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"card members-list\">\r\n                  <div class=\"card-status card-status-left bg-purple\"></div>\r\n                  <div class=\"card-header\">\r\n                    <table class=\"table card-table\">\r\n                      <tr>\r\n                        <td width=\"1\" class=\"padding-overide\"> <i class=\"fa fa-users group-icon\"></i></td>\r\n                        <td>\r\n                          <h3 class=\"card-title card-group-title\">Members\r\n                          </h3>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"card-body o-auto\">\r\n                    <ul class=\"list-unstyled list-separated\">\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                              style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit member-nav-heading\">Amanda Hunt</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">amanda_hunt@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                              style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit\">Laura Weaver</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">lauraweaver@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                              style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit\">Margaret Berry</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">margaret88@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                              ></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit\">Nancy Herrera</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">nancy_83@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                             ></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit\">Edward Larson</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">edward90@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                      <li class=\"list-separated-item\">\r\n                        <div class=\"row align-items-center\">\r\n                          <div class=\"col-auto\">\r\n                            <span class=\"avatar avatar-md d-block\"\r\n                             ></span>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div>\r\n                              <a href=\"javascript:void(0)\" class=\"text-inherit\">Joan Hanson</a>\r\n                            </div>\r\n                            <small class=\"d-block item-except text-sm text-muted h-1x\">joan.hanson@example.com</small>\r\n                          </div>\r\n                          <div class=\"col-auto\">\r\n                            <div class=\"item-action dropdown\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-vertical\"></i></a>\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-tag\"></i> Action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-edit-2\"></i> Another action </a>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-message-square\"></i> Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i\r\n                                    class=\"dropdown-icon fe fe-link\"></i> Separated link</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Member Area End -->\r\n\r\n          </div>\r\n          <div class=\"col-lg-8 col-sm-6\">\r\n            <!-- Post Section -->\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <!-- Alert Area-->\r\n                <div class=\"alert alert-success alert-dismissible {{alert_success_settings}}\">\r\n                  <button id=\"alert-success-creategroup\" (click)=\"onAlertSuccessClose($event)\" class=\"close\"></button>\r\n                  <i class=\"fe fe-check mr-2\" aria-hidden=\"true\"></i> {{alert_success_message}}\r\n                </div>\r\n                <!-- Alert Area End-->\r\n                <div *ngFor=\"let post of current_posts\">\r\n                  <div *ngIf=\"post.PostId === current_postid\" class=\"card\">\r\n                    <div class=\"card-status bg-blue\"></div>\r\n                    <div class=\"card-header\">\r\n                      <table class=\"table card-table\">\r\n                        <tr>\r\n                          <td width=\"1\" class=\"padding-overide\"> <i class=\"fa fa-question-circle group-icon\"></i></td>\r\n                          <td>\r\n                            <h3 class=\"card-title card-group-title\">{{post.Title}}\r\n                            </h3>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n\r\n                    </div>\r\n                    <ul class=\"list-group card-list-group\">\r\n                      <li class=\"list-group-item py-5\">\r\n                        <div class=\"media\">\r\n                          <div class=\"media-object avatar avatar-md mr-4\"\r\n                            style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\">\r\n                          </div>\r\n                          <div class=\"media-body\">\r\n                            <div class=\"media-heading\">\r\n                              <small class=\"float-right text-muted\">{{post.DateCreated}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{post.TimeCreated}}</small>\r\n                              <h5>{{post.FirstName}} {{post.LastName}}</h5>\r\n                            </div>\r\n                            <quill-editor class=\"ql-editor-settings\" [style]=\"viewing_area_styles\" [theme]=\"bubble\"\r\n                              [readOnly]=\"true\" (onEditorCreated)=\"populateEditor($event,'apipost',post.ContentDelta)\"\r\n                              [modules]=\"viewing_area_config\"></quill-editor>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n\r\n                    </ul>\r\n                    <div class=\"card-footer card-footer-group\">\r\n                      <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-1 col-lg-1 col-xl-1 offset-11\">\r\n                            <div class=\"item-action dropdown dropdown-right\">\r\n                              <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                  class=\"fe fe-more-horizontal\"></i></a>\r\n\r\n\r\n                              <div class=\"dropdown-menu dropdown-menu-right\">\r\n                                <span id=\"editpost{{post.PostId}}\" data-toggle=\"modal\" class=\"hide-item\"\r\n                                  data-target=\"#edit-post-modal\"></span>\r\n                                <a name=\"editpost\"  (click) = \"onClickPostOptions($event, post.PostId, 'edit')\" href=\"javascript:void(0)\"\r\n                                  class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-edit-2\"></i>Edit </a>\r\n\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <span id=\"deletepost{{post.PostId}}\" data-toggle=\"modal\" class=\"hide-item\"\r\n                                data-target=\"#delete-post-modal\"></span>\r\n                                <a name=\"deletegroup\" (click) = \"onClickPostOptions($event, post.PostId, 'delete')\" href=\"javascript:void(0)\" attr.data-discussionid=\"\"\r\n                                  class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-trash-2\"></i> Delete</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n            <!-- Post Section End-->\r\n\r\n            <!--Comment Section -->\r\n            <div *ngFor=\"let comment of current_comments\">\r\n            <div *ngIf=\"comment.PostId === current_postid\" class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-status bg-green\"></div>\r\n                  <div class=\"card-header\">\r\n                    <table class=\"table card-table\">\r\n                      <tr>\r\n                        <td width=\"1\" class=\"padding-overide\"> <i class=\"fa fa-commenting group-icon\"></i></td>\r\n                        <td>\r\n                          <h3 class=\"card-title card-group-title\">Response</h3>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n\r\n                  </div>\r\n                  <ul class=\"list-group card-list-group\">\r\n                    <li class=\"list-group-item py-5\">\r\n                      <div class=\"media\">\r\n                        <div class=\"media-object avatar avatar-md mr-4\"\r\n                          style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></div>\r\n                        <div class=\"media-body\">\r\n                          <div class=\"media-heading\">\r\n                            <small class=\"float-right text-muted\">{{comment.DateCreated}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{comment.TimeCreated}}</small>\r\n                            <h5>{{comment.FirstName}} {{comment.LastName}}</h5>\r\n                          </div>\r\n                          <quill-editor class=\"ql-editor-settings\" [style]=\"viewing_area_styles\" [theme]=\"bubble\"\r\n                          [readOnly]=\"true\" (onEditorCreated)=\"populateEditor($event,'apipost',comment.ContentDelta)\"\r\n                          [modules]=\"viewing_area_config\"></quill-editor>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n\r\n                  </ul>\r\n                  <div class=\"card-footer card-footer-group\">\r\n                    <div class=\"container-fluid\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-1 col-lg-1 col-xl-1 offset-11\">\r\n                          <div class=\"item-action dropdown dropdown-right\">\r\n                            <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i\r\n                                class=\"fe fe-more-horizontal\"></i></a>\r\n\r\n\r\n                            <div class=\"dropdown-menu dropdown-menu-right\">\r\n                            \r\n                                <span id=\"editcomment{{comment.CommentId}}\" data-toggle=\"modal\" class=\"hide-item\"\r\n                                  data-target=\"#edit-comment-modal\"></span>\r\n                                <a name=\"editcomment\"  (click) = \"onClickCommentOptions($event, comment.CommentId, 'edit')\" href=\"javascript:void(0)\"\r\n                                  class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-edit-2\"></i>Edit </a>\r\n                              <div class=\"dropdown-divider\"></div>\r\n\r\n        \r\n                              <span id=\"deletecomment{{comment.CommentId}}\"  data-toggle=\"modal\" data-target=\"#delete-comment-modal\"\r\n                                class=\"hide-item\"></span>\r\n                              <a name=\"deletecomment\"  (click) = \"onClickCommentOptions($event, comment.CommentId, 'delete')\" href=\"javascript:void(0)\" \r\n                                class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-trash-2\"></i> Delete</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        \r\n            <!-- Comment Section End-->\r\n\r\n            <!-- Comment Input Area-->\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div id=\"commentinput-area\" class=\"card {{comment_input_settings}}\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"container-fluid\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n\r\n                              <quill-editor [style]=\"{height: 'auto'}\"\r\n                                (onContentChanged)=\"onUpdateCreateComment($event,'createcomment-content')\"\r\n                                (onEditorCreated)=\"populateEditor($event,'createcomment','')\"\r\n                                [modules]=\"edit_area_config\"></quill-editor>\r\n                              <div id=\"error-createcomment-content\" class=\"invalid-feedback\">\r\n                                {{error_createcomment_content}}</div>\r\n                              <div id=\"error-createcomment-server\" class=\"invalid-feedback\">\r\n                                {{error_createcomment_server}}</div>\r\n                            </div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card-footer card-footer-group\">\r\n                        <div class=\"container-fluid\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"{{css_loading_createcomment}}\">\r\n                                    <div class=\"loader\"></div>\r\n                                    <div class=\"dimmer-content\">\r\n                                        <button id=\"btn-createcomment\" (click)=\"onSubmit($event)\" type=\"button\"\r\n                                        class=\"btn btn-purple float-right\">\r\n                                        Reply\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>                            \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                \r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--  Comment Input Area End-->\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Main Area end-->\r\n\r\n\r\n  <!-- Modal Area-->\r\n  <!-- Modal -->\r\n\r\n\r\n  <!--Create Post Modal-->\r\n  <div class=\"modal fade modal-wrap\" id=\"create-post-modal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Post Creation\r\n            <button id=\"createmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n          </h5>\r\n\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form action=\"javascript:void(0);\" action=\"post\">\r\n            <div class=\"container-fluid\">\r\n\r\n              <div class=\"{{css_loading_createpost}}\">\r\n                <div class=\"loader\"></div>\r\n                <div class=\"dimmer-content\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">Subject\r\n                            <span class=\"form-required\">*</span>\r\n                            <span id=\"creategroup-title-count\"\r\n                              class=\"form-label-small\">{{createpost_subject_count}}</span>\r\n                          </label>\r\n                          <input id=\"createpost-subject\" attr.maxlength=\"{{MAX_SUBJECT_LIMIT}}\" class=\"form-control\"\r\n                            type=\"input\" placeholder=\"Enter Post Subject\"\r\n                            (input)=\"onUpdateCreatePost($event,'createpost-subject')\"\r\n                            (keyup)=\"onUpdateCreatePost($event)\" />\r\n                          <div id=\"error-createpost-subject\" class=\"invalid-feedback\">{{error_createpost_subject}}</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">Content\r\n                            <span class=\"form-required\">*</span>\r\n                            <span id=\"creategroup-description-count\"\r\n                              class=\"form-label-small\">{{createpost_content_count}}</span>\r\n                          </label>\r\n                          <!--<textarea attr.maxlength=\"{{MAX_CONTENT_LIMIT}}\" id=\"createpost-content\"\r\n                                    (input)=\"onUpdateCreatePost($event)\" (keyup)=\"onUpdateCreatePost($event)\" class=\"form-control\"\r\n                                    name=\"post-content\" style=\"resize: none;\" rows=\"6\"\r\n                                    placeholder=\"Enter a short description for your post\"></textarea>-->\r\n\r\n                          <quill-editor [style]=\"{minHeight: '250px'}\"\r\n                            (onContentChanged)=\"onUpdateCreatePost($event,'createpost-content')\"\r\n                            (onEditorCreated)=\"populateEditor($event,'createpost','')\" [modules]=\"edit_area_config\">\r\n                          </quill-editor>\r\n                          <div id=\"error-createpost-content\" class=\"invalid-feedback\">{{error_createpost_content}}</div>\r\n                          <div id=\"error-createpost-server\" class=\"invalid-feedback\">{{error_createpost_server}}</div>\r\n                        </div>\r\n\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <div class=\"{{css_loading_createpost}}\">\r\n            <div class=\"loader\"></div>\r\n            <div class=\"dimmer-content\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\" id=\"btn-createpost\">Create\r\n                Post</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--Edit Post Modal-->\r\n  <div class=\"modal fade\" id=\"edit-post-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Make Changes To This Post\r\n          <button id=\"editpostmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n            aria-label=\"Close\"></button>\r\n        </h5>\r\n\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form action=\"javascript:void(0);\" action=\"post\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">Subject\r\n                    <span class=\"form-required\">*</span>\r\n                  </label>\r\n                  <input id=\"editpost_subject\" class=\"form-control\" type=\"input\" name=\"group-name\"\r\n                    placeholder=\"Enter Post Subject\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">Content\r\n                    <span class=\"form-required\">*</span>\r\n                    <span id=\"creategroup-description-count\"\r\n                      class=\"form-label-small\">{{editpost_content_count}}</span>\r\n                  </label>\r\n\r\n                  <quill-editor [style]=\"{minHeight: '250px'}\"\r\n                    (onContentChanged)=\"onUpdateEditPost($event,'editpost-content')\"\r\n                    (onEditorCreated)=\"populateEditor($event,'editpost','')\" [modules]=\"edit_area_config\">\r\n                  </quill-editor>\r\n                  <div id=\"error-editpost-content\" class=\"invalid-feedback\">{{error_editpost_content}}</div>\r\n                  <div id=\"error-editpost-server\" class=\"invalid-feedback\">{{error_editpost_server}}</div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n           \r\n            <span class=\"hide-item\" id=\"editpost-id\" attr.data-postid=''>void</span>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <div class=\"{{css_loading_editpost}}\">\r\n            <div class=\"loader\"></div>\r\n            <div class=\"dimmer-content\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\"\r\n                id=\"btn-updatepost\">Edit Post</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n     \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n <!--Edit Comment Modal-->\r\n <div class=\"modal fade\" id=\"edit-comment-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\n aria-hidden=\"true\">\r\n <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n   <div class=\"modal-content\">\r\n     <div class=\"modal-header\">\r\n       <h5 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Make Changes To This Comment\r\n         <button id=\"editcommentmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n           aria-label=\"Close\"></button>\r\n       </h5>\r\n\r\n     </div>\r\n     <div class=\"modal-body\">\r\n       <form action=\"javascript:void(0);\" action=\"post\">\r\n         <div class=\"container-fluid\">\r\n      \r\n           <div class=\"row\">\r\n             <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n               <div class=\"form-group\">\r\n                 <label class=\"form-label\">Content\r\n                   <span class=\"form-required\">*</span>\r\n                   <span id=\"creategroup-description-count\"\r\n                     class=\"form-label-small\">{{editcomment_content_count}}</span>\r\n                 </label>\r\n\r\n                 <quill-editor [style]=\"{minHeight: '250px'}\"\r\n                   (onContentChanged)=\"onUpdateEditComment($event,'editcomment-content')\"\r\n                   (onEditorCreated)=\"populateEditor($event,'editcomment','')\" [modules]=\"edit_area_config\">\r\n                 </quill-editor>\r\n                 <div id=\"error-editcomment-content\" class=\"invalid-feedback\">{{error_editcomment_content}}</div>\r\n                 <div id=\"error-editcomment-server\" class=\"invalid-feedback\">{{error_editcomment_server}}</div>\r\n               </div>\r\n\r\n\r\n             </div>\r\n           </div>\r\n\r\n          \r\n           <span class=\"hide-item\" id=\"editcomment-id\" attr.data-commentid='' attr.data-postid=''>void</span>\r\n         </div>\r\n       </form>\r\n     </div>\r\n     <div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n       <div class=\"{{css_loading_editcomment}}\">\r\n           <div class=\"loader\"></div>\r\n           <div class=\"dimmer-content\">\r\n             <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit($event)\"\r\n               id=\"btn-updatecomment\">Edit Comment</button>\r\n           </div>\r\n         </div>\r\n     </div>\r\n\r\n    \r\n   </div>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Delete Post  Modal-->\r\n<div class=\"modal fade\" id=\"delete-post-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n  <span class=\"hide-item\" id = \"delete-postid\" attr.data-postid=''></span>\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Are you sure?\r\n        <button id=\"deletepostmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n          aria-label=\"Close\"></button>\r\n      </h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form action=\"javascript:void(0);\" action=\"post\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 modal-title-settings\">\r\n              <h5> Do you really want to delete this post? This process cannot be undone.</h5>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 modal-title-settings\">\r\n              <div id=\"error-deletepost-server\" class=\"invalid-feedback\">{{error_deletepost_server}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      <div class=\"{{css_loading_deletepost}}\">\r\n          <div class=\"loader\"></div>\r\n          <div class=\"dimmer-content\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click) = \"onSubmit($event)\" id=\"btn-deletepost\">Delete Post</button>\r\n          </div>\r\n        </div>    \r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- Delete Comment  Modal-->\r\n<div class=\"modal fade\" id=\"delete-comment-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\r\naria-hidden=\"true\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n  <span class=\"hide-item\" id = \"delete-commentid\" attr.data-commentid=''></span>\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"col-12 modal-title modal-title-settings\" id=\"exampleModalLongTitle\">Are you sure?\r\n        <button id=\"deletecommentmodal-close\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n          aria-label=\"Close\"></button>\r\n      </h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form action=\"javascript:void(0);\" action=\"post\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 modal-title-settings\">\r\n              <h5> Do you really want to delete this comment? This process cannot be undone.</h5>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 modal-title-settings\">\r\n              <div id=\"error-deletecomment-server\" class=\"invalid-feedback\">{{error_deletecomment_server}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      <div class=\"{{css_loading_deletecomment}}\">\r\n          <div class=\"loader\"></div>\r\n          <div class=\"dimmer-content\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click) = \"onSubmit($event)\" id=\"btn-deletecomment\">Delete Comment</button>\r\n          </div>\r\n        </div>    \r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n  <!--Modal area end-->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/discussionboardcomponent/discussionboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/discussionboardcomponent/discussionboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiscussionBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionBoardComponent", function() { return DiscussionBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_discussionboardservice_discussionboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/discussionboardservice/discussionboard.service */ "./src/app/services/discussionboardservice/discussionboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants.export */ "./src/app/constants/constants.export.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiscussionBoardComponent = /** @class */ (function () {
    function DiscussionBoardComponent(discussionboard_service, router, route) {
        this.discussionboard_service = discussionboard_service;
        this.router = router;
        this.route = route;
        this.MAX_SUBJECT_LIMIT = 200;
        this.MAX_CONTENT_LIMIT = 2000;
        this.error_createpost_subject = '';
        this.error_createpost_content = '';
        this.error_createpost_server = '';
        this.error_editpost_content = '';
        this.error_editpost_server = '';
        this.error_editcomment_content = '';
        this.error_editcomment_server = '';
        this.error_createcomment_content = '';
        this.error_createcomment_server = '';
        this.error_deletepost_server = '';
        this.error_deletecomment_server = '';
        this.css_loading_createpost = 'dimmer';
        this.css_loading_editpost = 'dimmer';
        this.css_loading_deletepost = 'dimmer';
        this.css_loading_deletecomment = 'dimmer';
        this.css_loading_createcomment = 'dimmer';
        this.css_loading_editcomment = 'dimmer';
        this.createpost_subject_count = null;
        this.createpost_content_count = null;
        this.editpost_content_count = null;
        this.editcomment_content_count = null;
        this.valid_createpost_subject = false;
        this.valid_createpost_content = false;
        this.valid_createpost_data = false;
        this.valid_createcomment_data = false;
        this.valid_createcomment_content = false;
        this.initial_load = true;
        this.createpost_subject = null;
        this.createpost_content = null;
        this.createcomment_content = null;
        this.alert_success_settings = 'hide-item';
        this.alert_success_message = '';
        this.comment_input_settings = 'hide-item';
        this.current_posts = [];
        this.current_postid = null;
        this.current_comments = [];
        this.createpost_editor = null;
        this.createcomment_editor = null;
        this.editpost_editor = null;
        this.editcomment_editor = null;
        this.viewing_area_config = {
            toolbar: false
        };
        this.edit_area_config = {
            toolbar: [
                ['bold', 'italic', 'underline'],
                ['code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }]
            ]
        };
        this.viewing_area_styles = {
            border: 'none',
            fontSize: 'inherit',
            fontFamily: 'inherit'
        };
        this.default_post_area_text = 'Post Section';
    }
    DiscussionBoardComponent.prototype.ngOnInit = function () {
        this.discussionboard_id = Number(this.route.snapshot.paramMap.get('id'));
        if (!this.discussionboard_id) {
            this.router.navigate(['/error']);
        }
        this.hideCommentInput();
        this.resetFormFields();
        this.loadPosts(0);
        this.loadComments(0);
    };
    DiscussionBoardComponent.prototype.populateEditor = function (event, option, delta) {
        var editors = document.getElementsByClassName('ql-editor');
        for (var i = 0; i < editors.length; i++) {
            var val = editors[i].getAttribute('contenteditable');
            if (val === 'false') {
                editors[i].classList.add('q1-editor-settings-view');
            }
            if (val === 'true') {
                editors[i].classList.add('q1-editor-settings-edit');
            }
        }
        switch (option) {
            case 'createpost':
                this.createpost_editor = event;
                break;
            case 'createcomment':
                this.createcomment_editor = event;
                break;
            case 'editpost':
                this.editpost_editor = event;
                break;
            case 'editcomment':
                this.editcomment_editor = event;
                break;
            default:
                event.setContents(JSON.parse(delta));
                break;
        }
    };
    DiscussionBoardComponent.prototype.onChangePost = function (_postid) {
        this.current_postid = _postid;
        for (var i = 0; i < this.current_posts.length; i++) {
            if (this.current_posts[i].PostId === _postid) {
                document.getElementById('post-option' + this.current_posts[i].PostId).classList.add('activepost');
            }
            else {
                document.getElementById('post-option' + this.current_posts[i].PostId).classList.remove('activepost');
            }
            this.current_posts[i].Active = '';
        }
    };
    DiscussionBoardComponent.prototype.showCommentInput = function () {
        this.comment_input_settings = '';
    };
    DiscussionBoardComponent.prototype.hideCommentInput = function () {
        this.comment_input_settings = 'hide-item';
    };
    DiscussionBoardComponent.prototype.changeAlertSuccessMessage = function (message) {
        this.alert_success_message = message;
    };
    DiscussionBoardComponent.prototype.onAlertSuccessClose = function (event) {
        this.alert_success_settings = 'hide-item';
    };
    DiscussionBoardComponent.prototype.onAlertSuccessOpen = function () {
        if (this.alert_success_settings === 'hide-item') {
            this.alert_success_settings = '';
        }
        else {
            this.alert_success_settings = 'hide-item';
            this.alert_success_settings = '';
        }
    };
    DiscussionBoardComponent.prototype.loadPosts = function (period) {
        var _this = this;
        if (period > 0) {
        }
        else {
            this.discussionboard_service.retrievePosts(this.discussionboard_id).subscribe(function (data) {
                var isSetup = _this.setupPosts(data);
                if (isSetup) {
                    console.log('Posts have been updated (DiscussionBoard).');
                    _this.setupPostNavigation(data);
                    if (_this.initial_load) {
                        _this.initial_load = false;
                        if (_this.current_posts.length > 0) {
                            _this.current_postid = _this.current_posts[0].PostId;
                            _this.current_posts[0].Active = 'activepost';
                            _this.showCommentInput();
                        }
                    }
                }
                console.log('Results: DiscussionBoard ' + JSON.stringify(data));
            }, function (errors) {
                console.log('An error occured while attempting to load data. Error DiscussionBoard: ' + errors);
            });
        }
    };
    DiscussionBoardComponent.prototype.setupPosts = function (new_posts) {
        var new_posts_length = new_posts.length;
        var curr_posts_length = this.current_posts.length;
        if (new_posts_length !== curr_posts_length) {
            this.current_posts = new_posts;
            return true;
        }
        var isChanged = false;
        for (var i = 0; i < new_posts.length; i++) {
            var isEqual = this.isPostEqual(new_posts[i], this.current_posts[i]);
            if (!isEqual) {
                isChanged = true;
                break;
            }
        }
        if (isChanged) {
            this.current_posts = new_posts;
            return true;
        }
        return false;
    };
    DiscussionBoardComponent.prototype.onClickPostOptions = function (event, postid, type) {
        if (postid === null) {
            return;
        }
        var item = null;
        for (var i = 0; i < this.current_posts.length; i++) {
            if (this.current_posts[i].PostId === postid) {
                item = this.current_posts[i];
                break;
            }
        }
        if (item === null) {
            return;
        }
        switch (type) {
            case 'edit':
                this.editpost_editor.setContents(JSON.parse(item.ContentDelta));
                document.getElementById('editpost_subject').value = item.Title;
                document.getElementById('editpost-id').setAttribute('data-postid', item.PostId + '');
                document.getElementById('editpost' + item.PostId).click();
                break;
            case 'delete':
                document.getElementById('delete-postid').setAttribute('data-postid', item.PostId + '');
                document.getElementById('deletepost' + item.PostId).click();
                break;
        }
    };
    DiscussionBoardComponent.prototype.onClickCommentOptions = function (event, commentid, type) {
        if (commentid === null) {
            return;
        }
        var item = null;
        for (var i = 0; i < this.current_comments.length; i++) {
            if (this.current_comments[i].CommentId === commentid) {
                item = this.current_comments[i];
                break;
            }
        }
        if (item === null) {
            return;
        }
        switch (type) {
            case 'edit':
                this.editcomment_editor.setContents(JSON.parse(item.ContentDelta));
                document.getElementById('editcomment-id').setAttribute('data-commentid', item.CommentId + '');
                document.getElementById('editcomment-id').setAttribute('data-postid', item.PostId + '');
                document.getElementById('editcomment' + item.CommentId).click();
                break;
            case 'delete':
                document.getElementById('delete-commentid').setAttribute('data-postid', item.PostId + '');
                document.getElementById('delete-commentid').setAttribute('data-commentid', item.CommentId + '');
                document.getElementById('deletecomment' + item.CommentId).click();
                break;
            default:
                break;
        }
    };
    DiscussionBoardComponent.prototype.loadComments = function (period) {
        var _this = this;
        if (period > 0) {
        }
        else {
            this.discussionboard_service.retrieveComments(this.discussionboard_id).subscribe(function (data) {
                var isSetup = _this.setupComments(data);
                if (isSetup) {
                    console.log('Comments have been updated (DiscussionBoard).');
                }
                console.log('Results: DiscussionBoard Comments' + JSON.stringify(data));
            }, function (errors) {
                console.log('An error occured while attempting to load data. Error DiscussionBoard Comments: ' + errors);
            });
        }
    };
    DiscussionBoardComponent.prototype.setupComments = function (new_comments) {
        var new_comments_length = new_comments.length;
        var curr_comments_length = this.current_comments.length;
        if (new_comments_length !== curr_comments_length) {
            this.current_comments = new_comments;
            return true;
        }
        var isChanged = false;
        for (var i = 0; i < new_comments.length; i++) {
            var isEqual = this.isCommentEqual(new_comments[i], this.current_comments[i]);
            if (!isEqual) {
                isChanged = true;
                break;
            }
        }
        if (isChanged) {
            this.current_comments = new_comments;
            return true;
        }
        return false;
    };
    DiscussionBoardComponent.prototype.setupPostNavigation = function (posts) {
        if (posts === undefined || posts === null || posts.length === 0) {
            this.posts_navigation_subsection = [];
        }
        this.posts_navigation_subsection = new Array(posts.length);
        for (var i = 0; i < posts.length; i++) {
            var post_content = posts[i].Content;
            if (post_content.trim().length < 150) {
                this.posts_navigation_subsection[i] = post_content;
                continue;
            }
            post_content = post_content.substring(0, 150).trim() + '...';
            this.posts_navigation_subsection[i] = post_content;
        }
    };
    DiscussionBoardComponent.prototype.isPostEqual = function (firstPost, secondPost) {
        if (firstPost === null || firstPost === undefined || secondPost === null || secondPost === undefined) {
            return false;
        }
        var isEqual = false;
        if (firstPost.Content === secondPost.Content
            && firstPost.DateCreated === secondPost.DateCreated
            && firstPost.DiscussionBoardId === secondPost.DiscussionBoardId
            && firstPost.FirstName === secondPost.FirstName
            && firstPost.LastName === secondPost.LastName
            && firstPost.OwnerId === secondPost.OwnerId
            && firstPost.PostId === secondPost.PostId
            && firstPost.TimeCreated === secondPost.TimeCreated
            && firstPost.Title === secondPost.Title
            && firstPost.UserRole === secondPost.UserRole
            && firstPost.Username === secondPost.Username) {
            isEqual = true;
        }
        return isEqual;
    };
    DiscussionBoardComponent.prototype.isCommentEqual = function (firstComment, secondComment) {
        if (firstComment === null || firstComment === undefined || secondComment === null || secondComment === undefined) {
            return false;
        }
        var isEqual = false;
        if (firstComment.Content === secondComment.Content
            && firstComment.DateCreated === secondComment.DateCreated
            && firstComment.DiscussionBoardId === secondComment.DiscussionBoardId
            && firstComment.FirstName === secondComment.FirstName
            && firstComment.LastName === secondComment.LastName
            && firstComment.OwnerId === secondComment.OwnerId
            && firstComment.PostId === secondComment.PostId
            && firstComment.CommentId === secondComment.CommentId
            && firstComment.TimeCreated === secondComment.TimeCreated
            && firstComment.UserRole === secondComment.UserRole
            && firstComment.Username === secondComment.Username) {
            isEqual = true;
        }
        return isEqual;
    };
    DiscussionBoardComponent.prototype.onSubmit = function (event) {
        var _this = this;
        var post_id = null;
        var post_subject = null;
        var comment_id = null;
        switch (event.target.id) {
            case 'btn-createpost':
                this.css_loading_createpost = 'dimmer active';
                if (this.valid_createpost_data === true) {
                    this.discussionboard_service.createPost(this.discussionboard_id, this.createpost_subject, this.createpost_content, this.createpost_editor.getContents()).subscribe(function (data) {
                        document.getElementById('createmodal-close').click();
                        if (_this.createpost_editor !== null) {
                            _this.createpost_editor.deleteText(0, _this.createpost_editor.getLength());
                        }
                        _this.changeAlertSuccessMessage('You have successfully created a new post!');
                        _this.onAlertSuccessOpen();
                        _this.resetFormFields();
                        document.getElementById('error-createpost-server').style.display = 'none';
                        _this.loadPosts(0);
                    }, function (errors) {
                        if (errors.error) {
                            _this.error_createpost_server = errors.error;
                        }
                        else {
                            _this.error_createpost_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                        }
                        document.getElementById('error-createpost-server').style.display = 'block';
                        _this.css_loading_createpost = 'dimmer';
                    });
                }
                else {
                    this.css_loading_createpost = 'dimmer';
                    console.log('DiscussionBoard: CreatePost Error');
                }
                break;
            case 'btn-deletepost':
                this.css_loading_deletepost = 'dimmer active';
                post_id = document.getElementById('delete-postid').getAttribute('data-postid');
                if (post_id === null) {
                    this.css_loading_deletepost = 'dimmer';
                    console.log('DeletePost Submit Error');
                    return;
                }
                this.discussionboard_service.deletePost(this.discussionboard_id, post_id).subscribe(function (data) {
                    document.getElementById('deletepostmodal-close').click();
                    _this.changeAlertSuccessMessage('You have successfully deleted a post!');
                    _this.onAlertSuccessOpen();
                    _this.resetFormFields();
                    document.getElementById('error-deletepost-server').style.display = 'none';
                    _this.loadPosts(0);
                    _this.loadComments(0);
                    _this.hideCommentInput();
                }, function (errors) {
                    if (errors.error) {
                        _this.error_deletepost_server = errors.error;
                    }
                    else {
                        _this.error_deletepost_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                    }
                    document.getElementById('error-deletepost-server').style.display = 'block';
                    _this.css_loading_deletepost = 'dimmer';
                });
                break;
            case 'btn-updatepost':
                this.css_loading_editpost = 'dimmer active';
                post_subject = document.getElementById('editpost_subject').value;
                post_id = document.getElementById('editpost-id').getAttribute('data-postid');
                if (post_id === null || this.editpost_editor === null || post_subject === null) {
                    this.css_loading_editpost = 'dimmer';
                    console.log('Update Post Submit Error');
                    return;
                }
                this.discussionboard_service.updatePost(this.discussionboard_id, post_id, post_subject, this.editpost_editor.getText(), this.editpost_editor.getContents()).subscribe(function (data) {
                    document.getElementById('editpostmodal-close').click();
                    _this.changeAlertSuccessMessage('You have successfully edited this post!');
                    _this.onAlertSuccessOpen();
                    document.getElementById('error-editpost-server').style.display = 'none';
                    _this.resetFormFields();
                    _this.loadPosts(0);
                }, function (errors) {
                    if (errors.error) {
                        _this.error_editpost_server = errors.error;
                    }
                    else {
                        _this.error_editpost_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                    }
                    document.getElementById('error-editpost-server').style.display = 'block';
                    _this.css_loading_editpost = 'dimmer';
                });
                break;
            case 'btn-createcomment':
                this.css_loading_createcomment = 'dimmer active';
                if (this.valid_createcomment_data) {
                    this.discussionboard_service.createComment(this.discussionboard_id, this.current_postid + '', this.createcomment_content, this.createcomment_editor.getContents()).subscribe(function (data) {
                        if (_this.createcomment_editor !== null) {
                            _this.createcomment_editor.deleteText(0, _this.createcomment_editor.getLength());
                        }
                        _this.changeAlertSuccessMessage('You have successfully created a new comment!');
                        _this.onAlertSuccessOpen();
                        _this.resetFormFields();
                        document.getElementById('error-createcomment-server').style.display = 'none';
                        _this.loadComments(0);
                    }, function (errors) {
                        if (errors.error) {
                            _this.error_createcomment_server = errors.error;
                        }
                        else {
                            _this.error_createcomment_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                        }
                        document.getElementById('error-createcomment-server').style.display = 'block';
                        _this.css_loading_createcomment = 'dimmer';
                    });
                }
                break;
            case 'btn-deletecomment':
                this.css_loading_deletecomment = 'dimmer active';
                comment_id = document.getElementById('delete-commentid').getAttribute('data-commentid');
                if (comment_id === null) {
                    this.css_loading_deletecomment = 'dimmer';
                    console.log('DeleteComment Submit Error');
                    return;
                }
                this.discussionboard_service.deleteComment(this.discussionboard_id, comment_id).subscribe(function (data) {
                    document.getElementById('deletecommentmodal-close').click();
                    _this.changeAlertSuccessMessage('You have successfully deleted a comment!');
                    _this.onAlertSuccessOpen();
                    _this.resetFormFields();
                    document.getElementById('error-deletecomment-server').style.display = 'none';
                    _this.loadComments(0);
                }, function (errors) {
                    if (errors.error) {
                        _this.error_deletecomment_server = errors.error;
                    }
                    else {
                        _this.error_deletecomment_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                    }
                    document.getElementById('error-deletecomment-server').style.display = 'block';
                    _this.css_loading_deletecomment = 'dimmer';
                });
                break;
            case 'btn-updatecomment':
                this.css_loading_editcomment = 'dimmer active';
                comment_id = document.getElementById('editcomment-id').getAttribute('data-commentid');
                if (comment_id === null || this.editcomment_editor === null) {
                    this.css_loading_editcomment = 'dimmer';
                    console.log('Update Comment Submit Error');
                    break;
                }
                this.discussionboard_service.updateComment(this.discussionboard_id, comment_id, this.editcomment_editor.getText(), this.editcomment_editor.getContents()).subscribe(function (data) {
                    document.getElementById('editcommentmodal-close').click();
                    _this.changeAlertSuccessMessage('You have successfully edited a comment!');
                    _this.onAlertSuccessOpen();
                    _this.resetFormFields();
                    document.getElementById('error-editcomment-server').style.display = 'none';
                    _this.loadComments(0);
                }, function (errors) {
                    if (errors.error) {
                        _this.error_editcomment_server = errors.error;
                    }
                    else {
                        _this.error_editcomment_server = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_SERVER"];
                    }
                    document.getElementById('error-editcomment-server').style.display = 'block';
                    _this.css_loading_editcomment = 'dimmer';
                });
                break;
            default:
                console.log('OnSubmit Error');
                break;
        }
    };
    DiscussionBoardComponent.prototype.onUpdateCreatePost = function (event, name) {
        switch (name) {
            case 'createpost-subject':
                var title = event.target.value;
                if (title === null || title.trim().length === 0) {
                    this.error_createpost_subject = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-createpost-subject').style.display = 'block';
                    this.valid_createpost_subject = false;
                }
                else {
                    this.createpost_subject = title.trim();
                    this.valid_createpost_subject = true;
                    document.getElementById('error-createpost-subject').style.display = 'none';
                }
                this.createpost_subject_count = event.target.value.length + '/' + this.MAX_SUBJECT_LIMIT;
                break;
            case 'createpost-content':
                var content = event.editor.getText();
                if (content === null || content.trim().length === 0) {
                    this.error_createpost_content = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-createpost-content').style.display = 'block';
                    this.valid_createpost_content = false;
                }
                else {
                    this.createpost_content = content.trim();
                    document.getElementById('error-createpost-content').style.display = 'none';
                    this.valid_createpost_content = true;
                }
                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT + 1, event.editor.getLength());
                }
                this.createpost_content_count = event.editor.getText().trim().length + '/' + this.MAX_CONTENT_LIMIT;
                break;
            default:
                console.log('OnUpdate: Not Found');
                break;
        }
        if (this.valid_createpost_subject && this.valid_createpost_content) {
            this.valid_createpost_data = true;
            document.getElementById('btn-createpost').removeAttribute('disabled');
        }
        else {
            this.valid_createpost_data = false;
            document.getElementById('btn-createpost').setAttribute('disabled', '');
        }
    };
    DiscussionBoardComponent.prototype.onUpdateEditPost = function (event, name) {
        switch (name) {
            case 'editpost-content':
                var content = event.editor.getText();
                if (content === null || content.trim().length === 0) {
                    this.error_editpost_content = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-editpost-content').style.display = 'block';
                }
                else {
                    document.getElementById('error-editpost-content').style.display = 'none';
                }
                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT, event.editor.getLength());
                }
                this.editpost_content_count = event.editor.getText().trim().length + '/' + this.MAX_CONTENT_LIMIT;
                break;
            default:
                console.log('onUpdateEditPost: error');
                break;
        }
    };
    DiscussionBoardComponent.prototype.onUpdateEditComment = function (event, name) {
        switch (name) {
            case 'editcomment-content':
                var content = event.editor.getText();
                if (content === null || content.trim().length === 0) {
                    this.error_editcomment_content = _constants_constants_export__WEBPACK_IMPORTED_MODULE_3__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('error-editcomment-content').style.display = 'block';
                }
                else {
                    document.getElementById('error-editcomment-content').style.display = 'none';
                }
                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT, event.editor.getLength());
                }
                this.editcomment_content_count = event.editor.getText().trim().length + '/' + this.MAX_CONTENT_LIMIT;
                break;
            default:
                console.log('onUpdateEditComment: error');
                break;
        }
    };
    DiscussionBoardComponent.prototype.onUpdateCreateComment = function (event, name) {
        var comment = null;
        switch (name) {
            case 'createcomment-content':
                comment = event.editor.getText();
                if (comment === null || comment.trim().length === 0) {
                    // this.error_createcomment_content = ERROR_NAME_NOT_VALID;
                    // document.getElementById('error-createcomment-content').style.display = 'block';
                    this.valid_createcomment_content = false;
                }
                else {
                    this.createcomment_content = comment.trim();
                    this.valid_createcomment_content = true;
                    document.getElementById('error-createcomment-content').style.display = 'none';
                }
                if (event.editor.getLength() > this.MAX_CONTENT_LIMIT) {
                    event.editor.deleteText(this.MAX_CONTENT_LIMIT + 1, event.editor.getLength());
                }
                break;
            default:
                console.log('OnUpdateCreateComment: Not Found');
                break;
        }
        if (this.valid_createcomment_content) {
            this.valid_createcomment_data = true;
            document.getElementById('btn-createcomment').removeAttribute('disabled');
        }
        else {
            this.valid_createcomment_data = false;
            document.getElementById('btn-createcomment').setAttribute('disabled', '');
        }
    };
    DiscussionBoardComponent.prototype.resetFormFields = function () {
        document.getElementById('createpost-subject').value = '';
        document.getElementById('error-createpost-subject').style.display = 'none';
        document.getElementById('error-createpost-content').style.display = 'none';
        document.getElementById('error-createpost-server').style.display = 'none';
        document.getElementById('error-createcomment-server').style.display = 'none';
        document.getElementById('error-createcomment-content').style.display = 'none';
        this.createpost_subject_count = 0 + '/' + this.MAX_SUBJECT_LIMIT;
        this.createpost_content_count = 0 + '/' + this.MAX_CONTENT_LIMIT;
        document.getElementById('btn-createpost').setAttribute('disabled', '');
        document.getElementById('btn-createcomment').setAttribute('disabled', '');
        // document.getElementById('btn-deletepost').setAttribute('disabled', '');
        this.valid_createpost_subject = false;
        this.valid_createpost_content = false;
        this.valid_createpost_data = false;
        this.css_loading_createpost = 'dimmer';
        this.css_loading_createcomment = 'dimmer';
        this.css_loading_editpost = 'dimmer';
        this.css_loading_deletepost = 'dimmer';
        // this.css_loading_createcomment = 'dimmer';
        // this.css_loading_editcomment = 'dimmer';
        // this.css_loading_deletecomment = 'dimmer';
    };
    DiscussionBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discussionboard',
            template: __webpack_require__(/*! ./discussionboard.component.html */ "./src/app/components/discussionboardcomponent/discussionboard.component.html"),
            styles: [__webpack_require__(/*! ./discussionboard.component.css */ "./src/app/components/discussionboardcomponent/discussionboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_discussionboardservice_discussionboard_service__WEBPACK_IMPORTED_MODULE_1__["DiscussionBoardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DiscussionBoardComponent);
    return DiscussionBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/generalcomponents/footercomponent/footer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/footercomponent/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center flex-row-reverse\">\r\n      <div class=\"col-auto ml-lg-auto\">\r\n\r\n      </div>\r\n      <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\r\n        Copyright © 2018 <a href=\".\">Concourse</a>.  All rights reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/generalcomponents/footercomponent/footer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/generalcomponents/footercomponent/footer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-nav',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/generalcomponents/footercomponent/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarcomponent/navbar.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav a span{\r\n    background-color: #2B9DFF;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsY29tcG9uZW50cy9uYXZiYXJjb21wb25lbnQvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWxjb21wb25lbnRzL25hdmJhcmNvbXBvbmVudC9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiBhIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI5REZGO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxubmF2IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5uYXYgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarcomponent/navbar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      <a class=\"header-brand\" href=\"/\">\r\n        <nav>\r\n            <a href=\"#\">Concourse <span>Beta</span></a>      \r\n        </nav>\r\n      </a>\r\n      <div class=\"d-flex order-lg-2 ml-auto\">\r\n        <div class=\"nav-item d-none d-md-flex\">\r\n         \r\n        </div>\r\n        <!--Bell notification area-->\r\n        <div class=\"dropdown d-none d-md-flex\">\r\n          <a class=\"nav-link icon\" data-toggle=\"dropdown\">\r\n            <i class=\"fe fe-bell\"></i>\r\n            <span class=\"nav-unread\"></span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/male/41.jpg)\"></span>\r\n              <div>\r\n                <strong>Nathan</strong> pushed new commit: Fix page load performance issue.\r\n                <div class=\"small text-muted\">10 minutes ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n              <div>\r\n                <strong>Alice</strong> started new task: Tabler UI design.\r\n                <div class=\"small text-muted\">1 hour ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/18.jpg)\"></span>\r\n              <div>\r\n                <strong>Rose</strong> deployed new version of NodeJS REST Api V3\r\n                <div class=\"small text-muted\">2 hours ago</div>\r\n              </div>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a href=\"#\" class=\"dropdown-item text-center text-muted-dark\">Mark all as read</a>\r\n          </div>\r\n        </div>\r\n        <!--Bell notification area end-->\r\n        <div class=\"dropdown\">\r\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\r\n            <span class=\"avatar\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/25.jpg)\"></span>\r\n            <span class=\"ml-2 d-none d-lg-block\">\r\n              <span class=\"text-default\">{{user_name}}</span>\r\n              <small class=\"text-muted d-block mt-1\">Member</small>\r\n            </span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-user\"></i> Profile\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-settings\"></i> Settings\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <span class=\"float-right\"><span class=\"badge badge-primary\">6</span></span>\r\n              <i class=\"dropdown-icon fe fe-mail\"></i> Inbox\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-send\"></i> Message\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\r\n            </a>\r\n            <a (click) = \"onSignOut()\" class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\r\n        <span class=\"header-toggler-icon\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarcomponent/navbar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
    }
    //
    NavbarComponent.prototype.ngOnInit = function () {
        this.user_name = sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname');
    };
    //
    NavbarComponent.prototype.onSignOut = function () {
        this.user_service.logout();
        this.router.navigate(['\home']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background:none !important;\r\n    border-bottom: none !important;\r\n}\r\n\r\nbody{\r\n    background-color: white !important;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n.avatar{\r\n    background-color: #2B9DFF !important;\r\n}\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\nnav a span{\r\n    background-color: #2B9DFF;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n.nav-padding{\r\n    padding: 0 5% 0 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsY29tcG9uZW50cy9uYXZiYXJob21lY29tcG9uZW50L25hdmJhcmhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWxjb21wb25lbnRzL25hdmJhcmhvbWVjb21wb25lbnQvbmF2YmFyaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5uYXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxubmF2IGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI5REZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5hdiBhIGltZ3tcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbm5hdiBhIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI5REZGO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc7XHJcbn1cclxuXHJcbi5uYXYtcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDAgNSUgMCA1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n    <div class=\"container-fluid nav-padding\">\r\n      <div class=\"d-flex\">\r\n        <a class=\"header-brand\" href=\"/\">\r\n          <nav>\r\n              <a href=\"#\">Concourse <span>Beta</span></a>      \r\n          </nav>\r\n        </a>\r\n        <div class=\"d-flex order-lg-2 ml-auto\">\r\n          \r\n          <div class=\"dropdown\">\r\n            <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\r\n              <span class=\"avatar\" style=\"background-image: url(/content/angular/assets/images/nav_icon.png)\"></span>\r\n              \r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n                <a class=\"dropdown-item\"  routerLink=\"/login\" href=\"#\">\r\n                  <i class=\"dropdown-icon fe fe-log-out\"></i> Login\r\n                </a>\r\n              \r\n              <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\r\n              </a>     \r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavbarHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarHomeComponent", function() { return NavbarHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarHomeComponent = /** @class */ (function () {
    function NavbarHomeComponent() {
    }
    NavbarHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-home',
            template: __webpack_require__(/*! ./navbarhome.component.html */ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.html"),
            styles: [__webpack_require__(/*! ./navbarhome.component.css */ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.css")]
        })
    ], NavbarHomeComponent);
    return NavbarHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n\r\n      <div class=\"col-lg\">\r\n        <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"#\" class=\"nav-link\"><i class=\"fe fe-home\"></i> Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-2 \">\r\n        <div class=\"btn-list float-sm-left ml-auto float-lg-right float-md-right\">\r\n          <a href=\"#\" class=\"btn btn-outline-primary\">New Discussion</a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-3 ml-auto\">\r\n        <form class=\"input-icon my-3 my-lg-0\">\r\n          <input type=\"search\" class=\"form-control header-search\" placeholder=\"Search&hellip;\" tabindex=\"1\">\r\n          <div class=\"input-icon-addon\">\r\n            <i class=\"fe fe-search\"></i>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SubNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavbarComponent", function() { return SubNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubNavbarComponent = /** @class */ (function () {
    function SubNavbarComponent() {
    }
    SubNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subnavbar',
            template: __webpack_require__(/*! ./subnavbar.component.html */ "./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.html")
        })
    ], SubNavbarComponent);
    return SubNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/homecomponent/home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/homecomponent/home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------global-----*/\r\n\r\n\r\n*{\r\n    margin:0;\r\n    padding:0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n}\r\n\r\n\r\nbody{\r\n    width: 100%;\r\n    background-color: white !important;\r\n}\r\n\r\n\r\n.nav-bar-attr{\r\n    position:absolute;\r\n    width:100%\r\n}\r\n\r\n\r\n.content-area-attr{\r\n    z-index: -1;\r\n}\r\n\r\n\r\nh1{\r\n    font-size:49px;\r\n    font-weight: 100;\r\n    color:#2B9DFF\r\n}\r\n\r\n\r\nh3{\r\n    font-size: 22px;\r\n\r\n}\r\n\r\n\r\np{\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n.btnOutline{\r\n    display:block;\r\n    text-decoration: none;\r\n    color: #2B9DFF;\r\n    border: 2px solid #2B9DFF;\r\n    border-radius: 6px;\r\n    width: 175px;\r\n    height: 53px;\r\n    line-height: 53px;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    transition:all 0.3s ease;\r\n    \r\n}\r\n\r\n\r\n.btnOutline:hover, .btnFilled:hover\r\n{\r\n    border-radius:48%;\r\n}\r\n\r\n\r\n.btnOutline:hover{\r\n    color:white;\r\n    background-color:#2B9DFF;\r\n}\r\n\r\n\r\n.btnFilled:hover{\r\n    color: #2B9DFF;\r\n    background: none;\r\n}\r\n\r\n\r\n.btnFilled{\r\n    display:block;\r\n    text-decoration: none;\r\n    color: white;\r\n    background-color:#2B9DFF;\r\n    border: 2px solid #2B9DFF;\r\n    border-radius: 6px;\r\n    width: 175px;\r\n    height: 53px;\r\n    line-height: 53px;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    transition:all 0.3s ease;\r\n}\r\n\r\n\r\n/*------nav-----*/\r\n\r\n\r\nnav {\r\n    padding: 50px 0 0 0;\r\n    text-align: right;\r\n}\r\n\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #202427;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\nnav a span{\r\n    background-color: #2B9DFF;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n\r\n.clear-left{\r\n    clear: left\r\n}\r\n\r\n\r\n/*------header-----*/\r\n\r\n\r\nheader{\r\n    height: 1000px;\r\n    min-height: 1000px;\r\n    padding: 0 5%;\r\n    background-image: url(/content/angular/assets/images/background_header.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: top right;\r\n    \r\n}\r\n\r\n\r\nheader h1{\r\n    width: 40%;\r\n    margin: 4em 0 0 0;\r\n    font-weight: 600;\r\n\r\n}\r\n\r\n\r\n/*------about-----*/\r\n\r\n\r\n.team{\r\n    margin-top: 10%;\r\n    text-align: center;\r\n    margin: 10em 0 3em 0;\r\n    padding: 0 10%;\r\n    background-image: url(/content/angular/assets/images/background_calltoaction.png);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.team h1{\r\n    font-weight: 600;\r\n    width: 75%;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n\r\n.members {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.person{\r\n    margin: 0 10% 0 10%;\r\n}\r\n\r\n\r\n.content-top-margin {\r\n    margin: 30px 0 0 0;\r\n}\r\n\r\n\r\n/*-----product info ----- */\r\n\r\n\r\n.about{\r\n    margin-top: 10%;\r\n    padding: 0 10%;\r\n    background-image: url(/content/angular/assets/images/background_about2.png);\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n    background-size: 80%;\r\n    height: 900px;\r\n    min-height:900px;\r\n}\r\n\r\n\r\n.about h1{\r\n    margin-bottom: 30px;\r\n    padding-top: 300px;\r\n    margin-left: 50%;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n/*-----calltoaction----*/\r\n\r\n\r\n.calltoaction{\r\n    text-align:center;\r\n    padding: 20em 5% 20em 5%;\r\n    background-image: url(/content/angular/assets/images/background_calltoaction.png);\r\n    background-repeat: no-repeat;\r\n    background-size: 40%;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.calltoaction h1, .calltoaction a{\r\n    display: inline-block;\r\n    margin: 0 60px;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.calltoaction h1{\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n/*------footer------*/\r\n\r\n\r\nfooter{\r\n    padding: 0 5%;\r\n    margin-bottom: 40px;\r\n    color: #2B9DFF;\r\n}\r\n\r\n\r\nfooter p, .footerpages{\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.footerpages{\r\n    float: right;\r\n}\r\n\r\n\r\n.footerpages a{\r\n    text-decoration: none;\r\n    font-weight: 200;\r\n    color: #2B9DFF;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n/*-----responsive-----*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7OztBQUdwQjtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOzs7QUFJQTtJQUNJLFdBQVc7SUFDWCxrQ0FBa0M7QUFDdEM7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUloQix3QkFBd0I7O0FBRTVCOzs7QUFHQTs7SUFFSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFJaEIsd0JBQXdCO0FBQzVCOzs7QUFFQSxpQkFBaUI7OztBQUNqQjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJO0FBQ0o7OztBQU1BLG9CQUFvQjs7O0FBQ3BCO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsOEJBQThCOztBQUVsQzs7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7OztBQUdBLG1CQUFtQjs7O0FBQ25CO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlGQUFpRjtJQUNqRiw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUEsMkJBQTJCOzs7QUFDM0I7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDJFQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7O0FBR0Esd0JBQXdCOzs7QUFDeEI7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlGQUFpRjtJQUNqRiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUlBLHFCQUFxQjs7O0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBR0EsdUJBQXVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tZ2xvYmFsLS0tLS0qL1xyXG5cclxuXHJcbip7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1iYXItYXR0cntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcblxyXG4uY29udGVudC1hcmVhLWF0dHJ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6NDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjojMkI5REZGXHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0bk91dGxpbmV7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMyQjlERkY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMkI5REZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmJ0bk91dGxpbmU6aG92ZXIsIC5idG5GaWxsZWQ6aG92ZXJcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czo0OCU7XHJcbn1cclxuXHJcbi5idG5PdXRsaW5lOmhvdmVye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyQjlERkY7XHJcbn1cclxuXHJcbi5idG5GaWxsZWQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzJCOURGRjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5idG5GaWxsZWR7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkI5REZGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJCOURGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qLS0tLS0tbmF2LS0tLS0qL1xyXG5uYXYge1xyXG4gICAgcGFkZGluZzogNTBweCAwIDAgMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzIwMjQyNztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbm5hdiBhOmZpcnN0LWNoaWxkIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5uYXYgYSBpbWd7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5uYXYgYSBzcGFue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCOURGRjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3O1xyXG59XHJcblxyXG4uY2xlYXItbGVmdHtcclxuICAgIGNsZWFyOiBsZWZ0XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tLWhlYWRlci0tLS0tKi9cclxuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb250ZW50L2FuZ3VsYXIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2hlYWRlci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgIFxyXG59XHJcblxyXG5oZWFkZXIgaDF7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiA0ZW0gMCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuXHJcbi8qLS0tLS0tYWJvdXQtLS0tLSovXHJcbi50ZWFte1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMGVtIDAgM2VtIDA7XHJcbiAgICBwYWRkaW5nOiAwIDEwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29udGVudC9hbmd1bGFyL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9jYWxsdG9hY3Rpb24ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZWFtIGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5tZW1iZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBlcnNvbntcclxuICAgIG1hcmdpbjogMCAxMCUgMCAxMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LXRvcC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG59XHJcblxyXG4vKi0tLS0tcHJvZHVjdCBpbmZvIC0tLS0tICovXHJcbi5hYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb250ZW50L2FuZ3VsYXIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2Fib3V0Mi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG4gICAgbWluLWhlaWdodDo5MDBweDtcclxufVxyXG5cclxuLmFib3V0IGgxe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLWNhbGx0b2FjdGlvbi0tLS0qL1xyXG4uY2FsbHRvYWN0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMGVtIDUlIDIwZW0gNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbnRlbnQvYW5ndWxhci9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfY2FsbHRvYWN0aW9uLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxsdG9hY3Rpb24gaDEsIC5jYWxsdG9hY3Rpb24gYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCA2MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNhbGx0b2FjdGlvbiBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyotLS0tLS1mb290ZXItLS0tLS0qL1xyXG5mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGNvbG9yOiAjMkI5REZGO1xyXG59XHJcblxyXG5mb290ZXIgcCwgLmZvb3RlcnBhZ2Vze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVycGFnZXN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVycGFnZXMgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBjb2xvcjogIzJCOURGRjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLXJlc3BvbnNpdmUtLS0tLSovIl19 */"

/***/ }),

/***/ "./src/app/components/homecomponent/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/homecomponent/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">  \r\n    <div class=\"page-main\">\r\n        <div class=\"nav-bar-attr\">\r\n            <app-navbar-home></app-navbar-home>\r\n        </div>\r\n    </div>\r\n\r\n  <div >\r\n    <header>\r\n        <nav>\r\n            \r\n            \r\n        </nav>\r\n        <h1>The incredibly easy, completely free Q&A platform. \r\n            Save time and help students learn using the power of community</h1>\r\n        <a routerLink=\"/register\" href=\"#\"class=\"btnOutline\">Sign Up</a>\r\n    </header>\r\n\r\n\r\n    <div class=\"team\">\r\n        <h1> Concourse works with you. This powerful technology powers your classroom and lectures.\r\n        </h1>\r\n\r\n        <div class=\"members\">\r\n            <div class=\"person\">\r\n                <img src=\"/content/angular/assets/images/background_chat.png\"/>\r\n                <h3 class = \"content-top-margin\">Discussions</h3>\r\n                <p>Chat like communication during and after lectures</p>\r\n            </div>\r\n            <div class=\"person\">\r\n                    <img src=\"/content/angular/assets/images/background_learn.png\"/>\r\n                    <h3 class=\"content-top-margin\">Host Course Materials</h3>\r\n                    <p> Improve and measure learning through coding excercises</p>\r\n            </div>      \r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"about\">\r\n        <h1>The most inituitive way to mangage your lecture's Q&A, and it's free! </h1>\r\n        <div class=\"icons\">\r\n            \r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"calltoaction\">\r\n        <h1> Sign Up Now</h1>\r\n        <a routerLink=\"/register\" href=\"#\" class=\"btnFilled\">Get Started</a>\r\n    </div>\r\n    \r\n    <footer>\r\n        <p>&copy; 2019 Concourse</p>\r\n        <div class=\"footerpages\">\r\n            <a href=\"#\">Home</a>\r\n            <a href=\"#\">Resources</a>\r\n            <a href=\"#\">Terms</a>\r\n            <a href=\"#\">Privacy</a>\r\n        </div>\r\n    </footer>\r\n    \r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homecomponent/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/homecomponent/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/homecomponent/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/homecomponent/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: NavbarComponent, NavbarHomeComponent, HomeComponent, DashboardComponent, SubNavbarComponent, FooterComponent, DiscussionBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generalcomponents_navbarcomponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalcomponents/navbarcomponent/navbar.component */ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return _generalcomponents_navbarcomponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"]; });

/* harmony import */ var _generalcomponents_navbarhomecomponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalcomponents/navbarhomecomponent/navbarhome.component */ "./src/app/components/generalcomponents/navbarhomecomponent/navbarhome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarHomeComponent", function() { return _generalcomponents_navbarhomecomponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__["NavbarHomeComponent"]; });

/* harmony import */ var _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homecomponent/home.component */ "./src/app/components/homecomponent/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]; });

/* harmony import */ var _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardcomponent/dashboard.component */ "./src/app/components/dashboardcomponent/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]; });

/* harmony import */ var _generalcomponents_subnavbarcomponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalcomponents/subnavbarcomponent/subnavbar.component */ "./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubNavbarComponent", function() { return _generalcomponents_subnavbarcomponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_4__["SubNavbarComponent"]; });

/* harmony import */ var _generalcomponents_footercomponent_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generalcomponents/footercomponent/footer.component */ "./src/app/components/generalcomponents/footercomponent/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _generalcomponents_footercomponent_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]; });

/* harmony import */ var _discussionboardcomponent_discussionboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussionboardcomponent/discussionboard.component */ "./src/app/components/discussionboardcomponent/discussionboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscussionBoardComponent", function() { return _discussionboardcomponent_discussionboard_component__WEBPACK_IMPORTED_MODULE_6__["DiscussionBoardComponent"]; });











/***/ }),

/***/ "./src/app/constants/constants.export.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/constants.export.ts ***!
  \***********************************************/
/*! exports provided: ERROR_PASSWORD_INVALID_MATCH, ERROR_EMAIL_NOT_VALID, ERROR_PASSWORD_NOT_VALID, ERROR_TERMS_AND_CONIDTIONS, ERROR_NAME_NOT_VALID, ERROR_GENERIC, ERROR_SERVER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PASSWORD_INVALID_MATCH", function() { return ERROR_PASSWORD_INVALID_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_EMAIL_NOT_VALID", function() { return ERROR_EMAIL_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PASSWORD_NOT_VALID", function() { return ERROR_PASSWORD_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TERMS_AND_CONIDTIONS", function() { return ERROR_TERMS_AND_CONIDTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_NAME_NOT_VALID", function() { return ERROR_NAME_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_GENERIC", function() { return ERROR_GENERIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_SERVER", function() { return ERROR_SERVER; });
var ERROR_PASSWORD_INVALID_MATCH = 'These passwords don\'t match. Try again?';
var ERROR_EMAIL_NOT_VALID = 'This email address is not valid.';
var ERROR_PASSWORD_NOT_VALID = 'This password does not meet the required length.';
var ERROR_TERMS_AND_CONIDTIONS = 'You must agree to the terms and conditions.';
var ERROR_NAME_NOT_VALID = 'This field cannot be empty.';
var ERROR_SERVER = 'A server error occured, please try again later.';
var ERROR_GENERIC = 'An error occured, please try agian later';



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ "./src/app/modules/authentication/components/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [_components_index__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _components_index__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]],
            exports: [_components_index__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _components_index__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/components/index.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/authentication/components/index.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logincomponent/login.component */ "./src/app/modules/authentication/components/logincomponent/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _logincomponent_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _registercomponent_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registercomponent/register.component */ "./src/app/modules/authentication/components/registercomponent/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _registercomponent_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]; });






/***/ }),

/***/ "./src/app/modules/authentication/components/logincomponent/login.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/authentication/components/logincomponent/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-single\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-login mx-auto\">\r\n          <div class=\"text-center mb-6\">\r\n            <img src=\"./demo/brand/tabler.svg\" class=\"h-6\" alt=\"\">\r\n          </div>\r\n\r\n\r\n          <form class=\"card\" action=\"javascript:void(0);\" method=\"post\">\r\n            <div class=\"card-body p-6\">\r\n              <div class=\"card-title\">Login to your account</div>\r\n\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Email address</label>\r\n                <input name=\"userEmail\" type=\"email\" class=\"form-control\" id=\"userEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" (input)=\"onUpdate($event)\" (keyup)=\"onUpdate($event)\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  Password\r\n                  <a href=\"./forgot-password.html\" class=\"float-right small\">I forgot password</a>\r\n                </label>\r\n                <input name=\"userPassword\" type=\"password\" class=\"form-control\" id=\"userPassword\" placeholder=\"Password\" (input)=\"onUpdate($event)\" (keyup)=\"onUpdate($event)\">\r\n                <div id=\"lbl-error\"class=\"invalid-feedback\">{{error_message}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" />\r\n                  <span class=\"custom-control-label\">Remember me</span>\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"{{css_loading}}\">\r\n                <div class=\"loader\"></div>\r\n                <div class=\"dimmer-content\">\r\n                  <div class=\"form-footer\" (click)=\"onLogin()\">\r\n                    <button id=\"btn-signin\" class=\"btn btn-primary btn-block\">Sign in</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center text-muted\">\r\n            Don't have account yet? <a routerLink=\"/register\">Sign up</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/authentication/components/logincomponent/login.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/authentication/components/logincomponent/login.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.user_email = '';
        this.error_message = '';
        this.user_password = '';
        this.css_loading = 'dimmer';
        this.valid_email = false;
        this.valid_password = false;
        this.valid_input = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAuthenticated()];
                    case 1:
                        _a.sent();
                        document.getElementById('userEmail').setAttribute('value', '');
                        document.getElementById('userPassword').setAttribute('value', '');
                        document.getElementById('btn-signin').setAttribute('disabled', '');
                        console.log('End ngOnInit.');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.css_loading = 'dimmer active';
                        if (!this.valid_input) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.user_service.login(this.user_email, this.user_password).subscribe(function (data) {
                                console.log('Response onLogin: ' + JSON.stringify(data));
                                document.getElementById('lbl-error').style.display = 'none';
                                _this.css_loading = 'dimmer';
                                _this.router.navigate(['/dashboard']);
                            }, function (error) {
                                console.log('Error onLogin: ' + JSON.stringify(error));
                                var error_des = (error['error'])['error_description'];
                                if (error_des) {
                                    _this.error_message = error_des;
                                }
                                else {
                                    _this.error_message = 'An error occurred. Please try again later.';
                                }
                                //
                                document.getElementById('lbl-error').style.display = 'block';
                                _this.css_loading = 'dimmer';
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('Hello from onLogin()');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onUpdate = function (event) {
        switch (event.target.name) {
            case 'userEmail':
                var user_email = event.target.value.trim();
                this.valid_email = validator__WEBPACK_IMPORTED_MODULE_3__["isEmail"](user_email);
                if (this.valid_email) {
                    this.user_email = user_email;
                }
                console.log('em:' + this.user_email + ' v: ' + this.valid_email);
                break;
            case 'userPassword':
                var user_password = event.target.value.trim();
                this.valid_password = validator__WEBPACK_IMPORTED_MODULE_3__["isLength"](user_password, { min: 8, max: undefined });
                if (this.valid_password) {
                    this.user_password = user_password;
                }
                console.log('pw:' + this.user_password + 'v: ' + this.valid_password);
                break;
            default:
                console.log('Switch shouldn\'t arrive here');
        }
        if (this.valid_email === true && this.valid_password === true) {
            this.valid_input = true;
            document.getElementById('btn-signin').removeAttribute('disabled');
        }
        else {
            this.valid_input = false;
            document.getElementById('btn-signin').setAttribute('disabled', '');
        }
    };
    LoginComponent.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.user_service.isAuth().toPromise())];
                    case 1:
                        res = _a.sent();
                        console.log('IsAuthenticated: ' + res);
                        if (res === true) {
                            this.router.navigateByUrl('/dashboard');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/components/logincomponent/login.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/components/registercomponent/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/authentication/components/registercomponent/register.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-single\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-login mx-auto\">\r\n          <div class=\"text-center mb-6\">\r\n            <img src=\"./demo/brand/tabler.svg\" class=\"h-6\" alt=\"\">\r\n          </div>\r\n          <form class=\"card\" action=\"javascript:void(0);\" method=\"post\">\r\n            <div class=\"card-body p-6\">\r\n              <div class=\"card-title\">Create new account</div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">First Name</label>\r\n                <input id = \"input-first-name\" type=\"input\" class=\"form-control\" placeholder=\"Enter first name\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\" >\r\n                <div id=\"lbl-error-first-name\" class=\"invalid-feedback\">{{error_firstname}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Last Name</label>\r\n                <input id = \"input-last-name\" type=\"input\" class=\"form-control\" placeholder=\"Enter last name\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\" >\r\n                <div id=\"lbl-error-last-name\" class=\"invalid-feedback\">{{error_lastname}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Email address</label>\r\n                <input id = \"input-email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\" >\r\n                <div id=\"lbl-error-email\" class=\"invalid-feedback\">{{error_email}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Password</label>\r\n                <input id=\"input-password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\">\r\n                <div id=\"lbl-error-password\" class=\"invalid-feedback\">{{error_password}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Confirm Password</label>\r\n                <input id=\"input-confirm-password\"type=\"password\" class=\"form-control\" placeholder=\"Password\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\">\r\n                <div id=\"lbl-error-confirm-password\" class=\"invalid-feedback\">{{error_confirm_password}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                  <input id = \"input-agree\" (change) = \"onUpdate($event)\" type=\"checkbox\" class=\"custom-control-input\" />\r\n                  <span class=\"custom-control-label\">Agree the <a href=\"terms.html\">terms and policy</a></span>\r\n                  <div id=\"lbl-error-policy\" class=\"invalid-feedback\">{{error_terms_policy}}</div>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-footer\">\r\n                  <div class=\"{{css_loading}}\">\r\n                      <div class=\"loader\"></div>\r\n                      <div class=\"dimmer-content\">\r\n                            <button id=\"btn-register\" type=\"submit\" class=\"btn btn-primary btn-block\" (click) = \"onRegister()\">Create new account</button>\r\n                      </div>\r\n                    </div>             \r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center text-muted\">\r\n            Already have account? <a routerLink=\"/login\">Sign in</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/authentication/components/registercomponent/register.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/authentication/components/registercomponent/register.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/constants.export */ "./src/app/constants/constants.export.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RegisterComponent = /** @class */ (function () {
    //
    function RegisterComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
        this.css_loading = 'dimmer';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAuthenticated()];
                    case 1:
                        _a.sent();
                        document.getElementById('input-email').setAttribute('value', '');
                        document.getElementById('input-password').setAttribute('value', '');
                        document.getElementById('input-confirm-password').setAttribute('value', '');
                        document.getElementById('input-first-name').setAttribute('value', '');
                        document.getElementById('input-last-name').setAttribute('value', '');
                        document.getElementById('input-agree').checked = false;
                        this.valid_input = false;
                        document.getElementById('btn-register').setAttribute('disabled', '');
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.onUpdate = function (event) {
        switch (event.target.id) {
            case 'input-first-name':
                var user_firstname = event.target.value;
                if (user_firstname === null || user_firstname === undefined) {
                    user_firstname = '';
                }
                user_firstname = user_firstname.trim();
                if (user_firstname.length === 0) {
                    this.error_firstname = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('lbl-error-first-name').style.display = 'block';
                    this.valid_firstname = false;
                }
                else {
                    this.error_firstname = '';
                    this.valid_firstname = true;
                    document.getElementById('lbl-error-first-name').style.display = 'none';
                }
                this.user_firstname = user_firstname;
                break;
            case 'input-last-name':
                var user_lastname = event.target.value;
                if (user_lastname === null || user_lastname === undefined) {
                    user_lastname = '';
                }
                user_lastname = user_lastname.trim();
                if (user_lastname.length === 0) {
                    this.error_lastname = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_NAME_NOT_VALID"];
                    document.getElementById('lbl-error-last-name').style.display = 'block';
                    this.valid_lastname = false;
                }
                else {
                    this.error_lastname = '';
                    this.valid_lastname = true;
                    document.getElementById('lbl-error-last-name').style.display = 'none';
                }
                this.user_lastname = user_lastname;
                break;
            case 'input-email':
                var user_email = event.target.value;
                if (user_email === null || user_email === undefined) {
                    user_email = '';
                }
                //
                this.valid_email = validator__WEBPACK_IMPORTED_MODULE_3__["isEmail"](user_email);
                if (!this.valid_email) {
                    this.error_email = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_EMAIL_NOT_VALID"];
                    document.getElementById('lbl-error-email').style.display = 'block';
                }
                else {
                    this.error_email = '';
                    document.getElementById('lbl-error-email').style.display = 'none';
                }
                //
                this.user_email = user_email;
                console.log('user_email: ' + this.user_email + ' v: ' + this.valid_email);
                break;
            case 'input-password':
                var user_password = event.target.value;
                if (user_password === null || user_password === undefined) {
                    user_password = '';
                }
                //
                this.valid_password = validator__WEBPACK_IMPORTED_MODULE_3__["isLength"](user_password, { min: 8, max: undefined });
                this.user_password = user_password;
                //
                if (!this.valid_password) {
                    this.error_password = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_PASSWORD_NOT_VALID"];
                    document.getElementById('lbl-error-password').style.display = 'block';
                }
                else {
                    this.error_password = '';
                    document.getElementById('lbl-error-password').style.display = 'none';
                }
                //
                console.log('user_password: ' + this.user_password + ' v: ' + this.valid_password);
                break;
            case 'input-confirm-password':
                var user_confirm_password = event.target.value;
                if (user_confirm_password === null || user_confirm_password === undefined || user_confirm_password.trim().length === 0) {
                    break;
                }
                if (user_confirm_password === this.user_password) {
                    this.valid_confirm_password = true;
                    this.error_confirm_password = '';
                    document.getElementById('lbl-error-confirm-password').style.display = 'none';
                }
                else {
                    this.valid_confirm_password = false;
                    this.error_confirm_password = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_PASSWORD_INVALID_MATCH"];
                    document.getElementById('lbl-error-confirm-password').style.display = 'block';
                }
                this.user_confirm_password = user_confirm_password;
                console.log('user_confirm_password: ' + this.valid_confirm_password + ' v: ' + this.valid_confirm_password);
                break;
            case 'input-agree':
                var terms_policy_checked = document.getElementById('input-agree').checked;
                if (terms_policy_checked === true) {
                    this.terms_policy_checked = true;
                    this.error_terms_policy = '';
                    document.getElementById('lbl-error-policy').style.display = 'none';
                }
                else {
                    this.terms_policy_checked = false;
                    this.error_terms_policy = _constants_constants_export__WEBPACK_IMPORTED_MODULE_4__["ERROR_TERMS_AND_CONIDTIONS"];
                    document.getElementById('lbl-error-policy').style.display = 'block';
                }
                break;
            default:
                console.log('event for target not supported');
        }
        if (this.valid_firstname && this.valid_lastname && this.valid_email
            && this.valid_password && this.valid_confirm_password && this.terms_policy_checked) {
            this.valid_input = true;
            document.getElementById('btn-register').removeAttribute('disabled');
        }
        else {
            this.valid_input = false;
            document.getElementById('btn-register').setAttribute('disabled', '');
        }
    };
    RegisterComponent.prototype.onRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registration_success;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.css_loading = 'dimmer active';
                        registration_success = false;
                        if (!(this.valid_input === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (this.user_service.register(this.user_firstname, this.user_lastname, this.user_email, this.user_password, this.user_confirm_password)).subscribe(function (data) {
                                registration_success = true;
                                console.log('Register: Success!');
                                // Log the user after registration completes
                                _this.user_service.login(_this.user_email, _this.user_password).subscribe(function () {
                                    _this.css_loading = 'dimmer';
                                    _this.router.navigate(['/dashboard']);
                                }, function (err) {
                                    _this.css_loading = 'dimmer';
                                    _this.router.navigate(['/home']);
                                });
                            }, function (err) {
                                _this.css_loading = 'dimmer';
                                var err_des = (err['error'])['Message'];
                                if (err_des) {
                                    _this.error_terms_policy = err_des;
                                }
                                else {
                                    _this.error_terms_policy = 'An error occurred. Please try again later.';
                                }
                                document.getElementById('lbl-error-policy').style.display = 'block';
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.css_loading = 'dimmer';
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (this.user_service.isAuth().toPromise())];
                    case 1:
                        res = _a.sent();
                        console.log('IsAuthenticated: ' + res);
                        if (res === true) {
                            this.router.navigate(['/dashboard']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/components/registercomponent/register.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/errors/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/errors/components/index.ts ***!
  \****************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagenotfoundcomponent_pagenotfound_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfoundcomponent/pagenotfound.component */ "./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _pagenotfoundcomponent_pagenotfound_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]; });





/***/ }),

/***/ "./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"page-content\">\r\n      <div class=\"container text-center\">\r\n        <div class=\"display-1 text-muted mb-5\"><i class=\"si si-exclamation\"></i> 400</div>\r\n        <h1 class=\"h2 mb-3\">Oops.. You just found an error page..</h1>\r\n        <p class=\"h4 text-muted font-weight-normal mb-7\">We are sorry but your request contains bad syntax and cannot be fulfilled&hellip;</p>\r\n        <a class=\"btn btn-primary\" href=\"javascript:history.back()\">\r\n          <i class=\"fe fe-arrow-left mr-2\"></i>Go back\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/modules/errors/components/pagenotfoundcomponent/pagenotfound.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/errors/errors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/errors/errors.module.ts ***!
  \*************************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index */ "./src/app/modules/errors/components/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [_components_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
            exports: [_components_index__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/modules/index.ts":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: AuthenticationModule, ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_0__["AuthenticationModule"]; });

/* harmony import */ var _errors_errors_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/errors.module */ "./src/app/modules/errors/errors.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return _errors_errors_module__WEBPACK_IMPORTED_MODULE_1__["ErrorsModule"]; });






/***/ }),

/***/ "./src/app/routes/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/index */ "./src/app/components/index.ts");
/* harmony import */ var _modules_authentication_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/authentication/components/index */ "./src/app/modules/authentication/components/index.ts");
/* harmony import */ var _modules_errors_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/errors/components/index */ "./src/app/modules/errors/components/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/index */ "./src/app/routes/guards/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var app_routes = [
    { path: 'home', component: _components_index__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'dashboard', component: _components_index__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'register', component: _modules_authentication_components_index__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _modules_authentication_components_index__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'discussion/:id', component: _components_index__WEBPACK_IMPORTED_MODULE_1__["DiscussionBoardComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'error', component: _modules_errors_components_index__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _modules_errors_components_index__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/guards/auth/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/guards/auth/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user_service, router) {
        this.user_service = user_service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //
        return this.user_service.isAuth().toPromise().then(function (response) {
            if (response === true) {
                console.log('Hello from AuthGuard: true');
                return true;
            }
            else {
                console.log('Hello from AuthGuard: false');
                _this.router.navigate(['/login']);
                return false;
            }
        }).catch(function (error) {
            console.log('Hello from AuthGuard: catch(false)');
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/routes/guards/index.ts":
/*!****************************************!*\
  !*** ./src/app/routes/guards/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/routes/guards/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/routes/index.ts":
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/routes/app-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]; });





/***/ }),

/***/ "./src/app/services/dashboardservice/dashboard.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/dashboardservice/dashboard.service.ts ***!
  \****************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService_1 = DashboardService;
    DashboardService.prototype.retrieveGroups = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        return this.http.get(DashboardService_1.BASE_URL + '/api/dashboard', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DashboardService.prototype.createGroup = function (_title, _description, _groupcode) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('title', _title);
        params_opt = params_opt.set('description', _description);
        params_opt = params_opt.set('groupcode', _groupcode);
        //
        return this.http.post(DashboardService_1.BASE_URL + '/api/dashboard/creategroup', params_opt, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DashboardService.prototype.joinGroup = function (_groupid, _groupcode) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('groupid', _groupid);
        params_opt = params_opt.set('groupcode', _groupcode);
        return this.http.post(DashboardService_1.BASE_URL + '/api/dashboard/joingroup', params_opt, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DashboardService.prototype.deleteGroup = function (_itemID) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionboardid', _itemID);
        return this.http.post(DashboardService_1.BASE_URL + '/api/dashboard/deletegroup', params_opt, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DashboardService.prototype.editGroup = function (_newtitle, _newdescription, _newgroupcode, _itemID) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('title', _newtitle);
        params_opt = params_opt.set('description', _newdescription);
        params_opt = params_opt.set('groupcode', _newgroupcode);
        params_opt = params_opt.set('discussionboardid', _itemID);
        return this.http.post(DashboardService_1.BASE_URL + '/api/dashboard/updategroup', params_opt, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DashboardService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Server Error');
    };
    var DashboardService_1;
    DashboardService.BASE_URL = document.getElementById('baseurl-asp').innerHTML;
    DashboardService = DashboardService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/discussionboardservice/discussionboard.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/discussionboardservice/discussionboard.service.ts ***!
  \****************************************************************************/
/*! exports provided: DiscussionBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionBoardService", function() { return DiscussionBoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscussionBoardService = /** @class */ (function () {
    function DiscussionBoardService(http) {
        this.http = http;
    }
    DiscussionBoardService_1 = DiscussionBoardService;
    DiscussionBoardService.prototype.retrievePosts = function (discussionboard_id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('DiscussionBoardID', '' + discussionboard_id);
        return this.http.get(DiscussionBoardService_1.BASE_URL + '/api/dashboard/posts', { headers: httpHeaders, params: params_opt })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.retrieveComments = function (discussionboard_id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('DiscussionBoardID', '' + discussionboard_id);
        return this.http.get(DiscussionBoardService_1.BASE_URL + '/api/dashboard/comments', { headers: httpHeaders, params: params_opt })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.createPost = function (discussionboard_id, subject, content, content_delta) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('subject', subject);
        params_opt = params_opt.set('content', content);
        params_opt = params_opt.set('contentdelta', JSON.stringify(content_delta));
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/createpost', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.updatePost = function (discussionboard_id, post_id, new_subject, new_content, new_content_delta) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('postid', post_id);
        params_opt = params_opt.set('subject', new_subject);
        params_opt = params_opt.set('content', new_content);
        params_opt = params_opt.set('contentdelta', JSON.stringify(new_content_delta));
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/updatepost', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.updateComment = function (discussionboard_id, comment_id, content, content_delta) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('commentid', comment_id);
        params_opt = params_opt.set('content', content);
        params_opt = params_opt.set('contentdelta', JSON.stringify(content_delta));
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/updatecomment', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.deletePost = function (discussionboard_id, post_id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('postid', post_id);
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/deletepost', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.deleteComment = function (discussionboard_id, comment_id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('commentid', comment_id);
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/deletecomment', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.createComment = function (discussionboard_id, post_id, content, content_delta) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + window.sessionStorage.getItem('access_token'));
        httpHeaders = httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        var params_opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params_opt = params_opt.set('discussionBoardid', '' + discussionboard_id);
        params_opt = params_opt.set('postid', post_id);
        params_opt = params_opt.set('content', content);
        params_opt = params_opt.set('contentdelta', JSON.stringify(content_delta));
        return this.http.post(DiscussionBoardService_1.BASE_URL + '/api/dashboard/createcomment', params_opt, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + JSON.stringify(response));
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    DiscussionBoardService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Server Error');
    };
    var DiscussionBoardService_1;
    DiscussionBoardService.BASE_URL = document.getElementById('baseurl-asp').innerHTML;
    DiscussionBoardService = DiscussionBoardService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DiscussionBoardService);
    return DiscussionBoardService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: UserService, DashboardService, DiscussionBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userservice_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userservice/user.service */ "./src/app/services/userservice/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _userservice_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _dashboardservice_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardservice/dashboard.service */ "./src/app/services/dashboardservice/dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboardservice_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]; });

/* harmony import */ var _discussionboardservice_discussionboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discussionboardservice/discussionboard.service */ "./src/app/services/discussionboardservice/discussionboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscussionBoardService", function() { return _discussionboardservice_discussionboard_service__WEBPACK_IMPORTED_MODULE_2__["DiscussionBoardService"]; });







/***/ }),

/***/ "./src/app/services/userservice/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/userservice/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService_1 = UserService;
    UserService.prototype.getRequestVerificationToken = function () {
        var token_node = document.getElementsByName('__RequestVerificationToken')[0];
        if (token_node === null || token_node === undefined) {
            return null;
        }
        var token = token_node.getAttribute('value');
        return token;
    };
    UserService.prototype.isAuth = function () {
        var token;
        token = window.sessionStorage.getItem('access_token');
        if (token === undefined || token === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('access_token')
            })
        };
        var auth_check = this.http.get(UserService_1.BASE_URL + '/api/account/userinfo', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 3) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return null;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('isAuth method inside User.Service class: ' + JSON.stringify(response));
            if (sessionStorage.getItem('email') === undefined) {
                return false;
            }
            var response_email = response['Email'];
            var first_name = response['FirstName'];
            var last_name = response['LastName'];
            sessionStorage.setItem('firstname', first_name);
            sessionStorage.setItem('lastname', last_name);
            var test_email = sessionStorage.getItem('email').trim();
            console.log('isAuth method inside User.Service class: test_email: ' + test_email + ' Respone email: ' +
                response_email + 'FirstName: ' + first_name + ' LastName: ' + last_name);
            if (response['Email'] === sessionStorage.getItem('email').trim()) {
                return true;
            }
            else {
                console.log('isAuth method inside User.Service class: false');
                return false;
            }
        }));
        return auth_check;
    };
    UserService.prototype.register = function (_firstname, _lastname, _email, _password, _confirmpassword) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('firstname', _firstname);
        params = params.set('lastname', _lastname);
        params = params.set('email', _email);
        params = params.set('password', _password);
        params = params.set('confirmpassword', _confirmpassword);
        console.log('Inside Register');
        return this.http.post(UserService_1.BASE_URL + '/api/account/register', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 2) {
                    console.log('Inside Register: ' + index);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Register Success');
            console.log(response);
            return response;
        }));
    };
    UserService.prototype.login = function (_username, _password) {
        var _this = this;
        //
        var request_verification_token = this.getRequestVerificationToken();
        if (request_verification_token === null) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        console.log(UserService_1.BASE_URL);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('username', _username);
        params = params.set('password', _password);
        params = params.set('__RequestVerificationToken', request_verification_token);
        params = params.set('grant_type', 'password');
        var body = {
            grant_type: 'password',
            username: _username,
            passowrd: _password
        };
        console.log('Params: ' + params.toString());
        var test = params.toString();
        return this.http.post(UserService_1.BASE_URL + '/token', params.toString())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, index) {
                if (index === 1) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            console.log('Status:' + response['access_token']);
            window.sessionStorage.setItem('access_token', response['access_token']);
            window.sessionStorage.setItem('email', response['userName']);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    UserService.prototype.logout = function () {
        window.sessionStorage.removeItem('access_token');
        window.sessionStorage.removeItem('email');
    };
    UserService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Server Error');
    };
    var UserService_1;
    UserService.ACCESS_TOKEN_KEY = 'ACCESS TOKEN';
    UserService.BASE_URL = document.getElementById('baseurl-asp').innerHTML;
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Karl\source\repos\MyConcourse\MyConcourse\FrontendClient\Ang6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map