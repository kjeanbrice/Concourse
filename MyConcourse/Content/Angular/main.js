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

/***/ "./src/app/Components/DashboardComponent/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Components/DashboardComponent/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <!--Navigation bar-->\r\n    <navbar></navbar>\r\n    <!--Options area-->\r\n    <subnavbar></subnavbar>\r\n\r\n\r\n    <div class=\"my-3 my-mid-5\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-status bg-blue\"></div>\r\n              <div class=\"card-header\">\r\n                <h3 class=\"card-title\">This is a standard card</h3>\r\n                <div class=\"card-options\">\r\n                  <a href=\"#\" class=\"card-options-collapse\" data-toggle=\"card-collapse\"><i class=\"fe fe-chevron-up\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-mid-1 col-xl-1 offset-11\">\r\n                      <div class=\"item-action dropdown\">\r\n                        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i class=\"fe fe-more-horizontal\"></i></a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-arrow-right-circle\"></i> Enter </a>\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-edit-2\"></i> Edit  </a>\r\n                          <div class=\"dropdown-divider\"></div>\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-trash-2\"></i> Delete</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer-nav></footer-nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/DashboardComponent/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/DashboardComponent/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Components/DashboardComponent/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/GeneralComponents/FooterComponent/footer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/FooterComponent/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center flex-row-reverse\">\r\n      <div class=\"col-auto ml-lg-auto\">\r\n\r\n      </div>\r\n      <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\r\n        Copyright © 2018 <a href=\".\">Concourse</a>. Theme by <a href=\"https://codecalm.net\" target=\"_blank\">codecalm.net</a> All rights reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/Components/GeneralComponents/FooterComponent/footer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/FooterComponent/footer.component.ts ***!
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
            selector: 'footer-nav',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Components/GeneralComponents/FooterComponent/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      <a class=\"header-brand\" href=\"/\">\r\n        <img src=\"https://tabler.github.io/tabler/demo/brand/tabler.svg\" class=\"header-brand-img\" alt=\"tabler logo\">\r\n      </a>\r\n      <div class=\"d-flex order-lg-2 ml-auto\">\r\n        <div class=\"nav-item d-none d-md-flex\">\r\n         \r\n        </div>\r\n        <!--Bell notification area-->\r\n        <div class=\"dropdown d-none d-md-flex\">\r\n          <a class=\"nav-link icon\" data-toggle=\"dropdown\">\r\n            <i class=\"fe fe-bell\"></i>\r\n            <span class=\"nav-unread\"></span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/male/41.jpg)\"></span>\r\n              <div>\r\n                <strong>Nathan</strong> pushed new commit: Fix page load performance issue.\r\n                <div class=\"small text-muted\">10 minutes ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n              <div>\r\n                <strong>Alice</strong> started new task: Tabler UI design.\r\n                <div class=\"small text-muted\">1 hour ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/18.jpg)\"></span>\r\n              <div>\r\n                <strong>Rose</strong> deployed new version of NodeJS REST Api V3\r\n                <div class=\"small text-muted\">2 hours ago</div>\r\n              </div>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a href=\"#\" class=\"dropdown-item text-center text-muted-dark\">Mark all as read</a>\r\n          </div>\r\n        </div>\r\n        <!--Bell notification area end-->\r\n        <div class=\"dropdown\">\r\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\r\n            <span class=\"avatar\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/25.jpg)\"></span>\r\n            <span class=\"ml-2 d-none d-lg-block\">\r\n              <span class=\"text-default\">Jane Pearson</span>\r\n              <small class=\"text-muted d-block mt-1\">Administrator</small>\r\n            </span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-user\"></i> Profile\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-settings\"></i> Settings\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <span class=\"float-right\"><span class=\"badge badge-primary\">6</span></span>\r\n              <i class=\"dropdown-icon fe fe-mail\"></i> Inbox\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-send\"></i> Message\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\r\n        <span class=\"header-toggler-icon\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());

;


/***/ }),

/***/ "./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      <a class=\"header-brand\" href=\"/\">\r\n        <img src=\"https://tabler.github.io/tabler/demo/brand/tabler.svg\" class=\"header-brand-img\" alt=\"tabler logo\">\r\n      </a>\r\n      <div class=\"d-flex order-lg-2 ml-auto\">\r\n        <div class=\"nav-item d-md-flex\">\r\n          <a routerLink=\"/login\" class=\"btn btn-sm btn-outline-primary\">Login</a>\r\n        </div>\r\n       \r\n      </div>\r\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\r\n        <span class=\"header-toggler-icon\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.ts ***!
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
            selector: 'navbar-home',
            template: __webpack_require__(/*! ./navbarhome.component.html */ "./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.html")
        })
    ], NavbarHomeComponent);
    return NavbarHomeComponent;
}());

;


/***/ }),

/***/ "./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header collapse d-lg-flex p-0\" id=\"headerMenuCollapse\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n\r\n      <div class=\"col-lg\">\r\n        <ul class=\"nav nav-tabs border-0 flex-column flex-lg-row\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"#\" class=\"nav-link\"><i class=\"fe fe-home\"></i> Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-2 \">\r\n        <div class=\"btn-list float-sm-left ml-auto float-lg-right float-md-right\">\r\n          <a href=\"#\" class=\"btn btn-outline-primary\">New Discussion</a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-3 ml-auto\">\r\n        <form class=\"input-icon my-3 my-lg-0\">\r\n          <input type=\"search\" class=\"form-control header-search\" placeholder=\"Search&hellip;\" tabindex=\"1\">\r\n          <div class=\"input-icon-addon\">\r\n            <i class=\"fe fe-search\"></i>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.ts ***!
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
            selector: 'subnavbar',
            template: __webpack_require__(/*! ./subnavbar.component.html */ "./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.html")
        })
    ], SubNavbarComponent);
    return SubNavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/HomeComponent/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Components/HomeComponent/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <navbar-home></navbar-home>\r\n  </div>\r\n  <div class=\"my-3 my-md-5\">\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/HomeComponent/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Components/HomeComponent/home.component.ts ***!
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
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/HomeComponent/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/LoginComponent/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Components/LoginComponent/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-single\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-login mx-auto\">\r\n          <div class=\"text-center mb-6\">\r\n            <img src=\"./demo/brand/tabler.svg\" class=\"h-6\" alt=\"\">\r\n          </div>\r\n\r\n\r\n          <form class=\"card\" action=\"javascript:void(0);\" method=\"post\">\r\n            <div class=\"card-body p-6\">\r\n              <div class=\"card-title\">Login to your account</div>\r\n\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Email address</label>\r\n                <input name=\"userEmail\" type=\"email\" class=\"form-control\" id=\"userEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" (keyup)=\"onUpdate($event)\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  Password\r\n                  <a href=\"./forgot-password.html\" class=\"float-right small\">I forgot password</a>\r\n                </label>\r\n                <input name=\"userPassword\" type=\"password\" class=\"form-control\" id=\"userPassword\" placeholder=\"Password\" (keyup)=\"onUpdate($event)\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" />\r\n                  <span class=\"custom-control-label\">Remember me</span>\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"{{css_loading}}\">\r\n                <div class=\"loader\"></div>\r\n                <div class=\"dimmer-content\">\r\n                  <div class=\"form-footer\" (click)=\"onLogin()\">\r\n                    <button class=\"btn btn-primary btn-block\">Sign in</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center text-muted\">\r\n            Don't have account yet? <a routerLink=\"/register\">Sign up</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/LoginComponent/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/LoginComponent/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/index */ "./src/app/Services/index.ts");
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
        this.user_password = '';
        this.css_loading = 'dimmer';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isAuthenticated();
        console.log("End ngOnInit.");
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.css_loading = "dimmer active";
        this.user_service.login(this.user_email, this.user_password).subscribe(function (data) {
            console.log("Response onLogin: " + JSON.stringify(data));
            _this.css_loading = "dimmer";
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log("Error onLogin: " + JSON.stringify(error));
            _this.css_loading = "dimmer";
        });
        console.log("Hello from onLogin()");
    };
    LoginComponent.prototype.onUpdate = function (event) {
        switch (event.target.name) {
            case 'userEmail':
                var user_email = event.target.value.trim();
                this.user_email = user_email;
                console.log("em:" + this.user_email);
                break;
            case 'userPassword':
                var user_password = event.target.value.trim();
                this.user_password = user_password;
                console.log("pw:" + this.user_password);
                break;
            default:
                console.log("Switch shouldn't arrive here");
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
                        console.log("IsAuthenticated: " + res);
                        if (res === true) {
                            this.router.navigate(['/dashboard']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/LoginComponent/login.component.html")
        }),
        __metadata("design:paramtypes", [_Services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/RegisterComponent/register.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Components/RegisterComponent/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <div class=\"page-single\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-login mx-auto\">\r\n          <div class=\"text-center mb-6\">\r\n            <img src=\"./demo/brand/tabler.svg\" class=\"h-6\" alt=\"\">\r\n          </div>\r\n          <form class=\"card\" action=\"\" method=\"post\">\r\n            <div class=\"card-body p-6\">\r\n              <div class=\"card-title\">Create new account</div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Email address</label>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" />\r\n                  <span class=\"custom-control-label\">Agree the <a href=\"terms.html\">terms and policy</a></span>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-footer\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">Create new account</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center text-muted\">\r\n            Already have account? <a routerLink=\"/login\">Sign in</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/RegisterComponent/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Components/RegisterComponent/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Components/RegisterComponent/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Components/index.ts":
/*!*************************************!*\
  !*** ./src/app/Components/index.ts ***!
  \*************************************/
/*! exports provided: NavbarComponent, NavbarHomeComponent, HomeComponent, RegisterComponent, LoginComponent, DashboardComponent, SubNavbarComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralComponents_NavbarComponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralComponents/NavbarComponent/navbar.component */ "./src/app/Components/GeneralComponents/NavbarComponent/navbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return _GeneralComponents_NavbarComponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"]; });

/* harmony import */ var _GeneralComponents_NavbarHomeComponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralComponents/NavbarHomeComponent/navbarhome.component */ "./src/app/Components/GeneralComponents/NavbarHomeComponent/navbarhome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarHomeComponent", function() { return _GeneralComponents_NavbarHomeComponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__["NavbarHomeComponent"]; });

/* harmony import */ var _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent/home.component */ "./src/app/Components/HomeComponent/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]; });

/* harmony import */ var _RegisterComponent_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterComponent/register.component */ "./src/app/Components/RegisterComponent/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _RegisterComponent_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]; });

/* harmony import */ var _LoginComponent_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginComponent/login.component */ "./src/app/Components/LoginComponent/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _LoginComponent_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]; });

/* harmony import */ var _DashboardComponent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardComponent/dashboard.component */ "./src/app/Components/DashboardComponent/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _DashboardComponent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]; });

/* harmony import */ var _GeneralComponents_SubNavbarComponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeneralComponents/SubNavbarComponent/subnavbar.component */ "./src/app/Components/GeneralComponents/SubNavbarComponent/subnavbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubNavbarComponent", function() { return _GeneralComponents_SubNavbarComponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_6__["SubNavbarComponent"]; });

/* harmony import */ var _GeneralComponents_FooterComponent_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GeneralComponents/FooterComponent/footer.component */ "./src/app/Components/GeneralComponents/FooterComponent/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _GeneralComponents_FooterComponent_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]; });












/***/ }),

/***/ "./src/app/Guards/Auth/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/Guards/Auth/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/index */ "./src/app/Services/index.ts");
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
        return this.user_service.isAuth().toPromise().then(function (response) {
            if (response === true) {
                console.log("Hello from AuthGuard: true");
                return true;
            }
            else {
                console.log("Hello from AuthGuard: false");
                _this.router.navigate(['/login']);
                return false;
            }
        }).catch(function (error) {
            console.log("Hello from AuthGuard: catch(false)");
            _this.router.navigate(['/login']);
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/Guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth/auth.guard */ "./src/app/Guards/Auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _Auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/Routes/app.routing.ts":
/*!***************************************!*\
  !*** ./src/app/Routes/app.routing.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/index */ "./src/app/Components/index.ts");
/* harmony import */ var _Guards_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Guards/index */ "./src/app/Guards/index.ts");



var appRoutes = [
    { path: 'home', component: _Components_index__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'dashboard', component: _Components_index__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], canActivate: [_Guards_index__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'register', component: _Components_index__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'login', component: _Components_index__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', component: _Components_index__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/Services/UserService/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Services/UserService/user.service.ts ***!
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
    UserService.prototype.isAuth = function () {
        var token;
        token = window.sessionStorage.getItem("access_token");
        if (token === undefined || token === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem("access_token")
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
            console.log("isAuth method inside User.Service class: " + JSON.stringify(response));
            if (sessionStorage.getItem("email") === undefined) {
                return false;
            }
            var response_email = response["Email"];
            var test_email = sessionStorage.getItem("email").trim();
            console.log("isAuth method inside User.Service class: test_email: " + test_email + " Respone email: " + response_email);
            if (response["Email"] === sessionStorage.getItem("email").trim()) {
                return true;
            }
            else {
                console.log("isAuth method inside User.Service class: false");
                return false;
            }
        }));
        return auth_check;
    };
    UserService.prototype.login = function (_username, _password) {
        var _this = this;
        console.log(UserService_1.BASE_URL);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('username', _username);
        params = params.set('password', _password);
        params = params.set('grant_type', 'password');
        var body = {
            grant_type: "password",
            username: _username,
            passowrd: _password
        };
        console.log("Params: " + params.toString());
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
            console.log("Status:" + response["access_token"]);
            window.sessionStorage.setItem("access_token", response["access_token"]);
            window.sessionStorage.setItem("email", response["userName"]);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    UserService.prototype.errorHandler = function (err) {
        if (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Server Error');
    };
    var UserService_1;
    UserService.ACCESS_TOKEN_KEY = "ACCESS TOKEN";
    UserService.BASE_URL = document.getElementById("baseurl-asp").innerHTML;
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/Services/index.ts":
/*!***********************************!*\
  !*** ./src/app/Services/index.ts ***!
  \***********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserService_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserService/user.service */ "./src/app/Services/UserService/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _UserService_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });





/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _Components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/index */ "./src/app/Components/index.ts");
/* harmony import */ var _Routes_app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Routes/app.routing */ "./src/app/Routes/app.routing.ts");
/* harmony import */ var _Services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/index */ "./src/app/Services/index.ts");
/* harmony import */ var _Guards_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Guards/index */ "./src/app/Guards/index.ts");
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
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["NavbarHomeComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["SubNavbarComponent"],
                _Components_index__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _Routes_app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [
                _Services_index__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _Guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\Users\Karl\source\repos\MyConcourse\MyConcourse\Ang6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map