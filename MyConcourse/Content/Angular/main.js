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
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index */ "./src/app/components/index.ts");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/index */ "./src/app/routes/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _routes_guards_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/guards/index */ "./src/app/routes/guards/index.ts");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/index */ "./src/app/modules/index.ts");
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
                _components_index__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _routes_index__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_8__["AuthenticationModule"],
                _modules_index__WEBPACK_IMPORTED_MODULE_8__["ErrorsModule"]
            ],
            providers: [
                _services_index__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _routes_guards_index__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboardcomponent/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboardcomponent/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"page\">\r\n  <div class=\"page-main\">\r\n    <!--Navigation bar-->\r\n    <app-navbar></app-navbar>\r\n    <!--Options area-->\r\n    <app-subnavbar></app-subnavbar>\r\n\r\n\r\n    <div class=\"my-3 my-mid-5\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-status bg-blue\"></div>\r\n              <div class=\"card-header\">\r\n                <h3 class=\"card-title\">This is a standard card</h3>\r\n                <div class=\"card-options\">\r\n                  <a href=\"#\" class=\"card-options-collapse\" data-toggle=\"card-collapse\"><i class=\"fe fe-chevron-up\"></i></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-mid-1 col-xl-1 offset-11\">\r\n                      <div class=\"item-action dropdown\">\r\n                        <a href=\"javascript:void(0)\" data-toggle=\"dropdown\" class=\"icon\"><i class=\"fe fe-more-horizontal\"></i></a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-arrow-right-circle\"></i> Enter </a>\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-edit-2\"></i> Edit  </a>\r\n                          <div class=\"dropdown-divider\"></div>\r\n                          <a href=\"javascript:void(0)\" class=\"dropdown-item\"><i class=\"dropdown-icon fe fe-trash-2\"></i> Delete</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer-nav></app-footer-nav>\r\n</div>\r\n"

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
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboardcomponent/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background:none !important;\r\n    border-bottom: none !important;\r\n}\r\n\r\nbody{\r\n    background-color: white !important;\r\n}\r\n\r\nnav {\r\n    text-align: right;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #495057;\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n.avatar{\r\n    background-color: #2B9DFF !important;\r\n}\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\nnav a span{\r\n    background-color: #2B9DFF;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n.nav-padding{\r\n    padding: 0 5% 0 5%;\r\n}"

/***/ }),

/***/ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n    <div class=\"container-fluid nav-padding\">\r\n      <div class=\"d-flex\">\r\n        <a class=\"header-brand\" href=\"/\">\r\n          <nav>\r\n              <a href=\"#\">Concourse <span>Free</span></a>      \r\n          </nav>\r\n        </a>\r\n        <div class=\"d-flex order-lg-2 ml-auto\">\r\n          \r\n          <div class=\"dropdown\">\r\n            <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\r\n              <span class=\"avatar\" style=\"background-image: url(/content/angular/assets/images/nav_icon.png)\"></span>\r\n              \r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n                <a class=\"dropdown-item\"  routerLink=\"/login\" href=\"#\">\r\n                  <i class=\"dropdown-icon fe fe-log-out\"></i> Login\r\n                </a>\r\n              \r\n              <a class=\"dropdown-item\" href=\"#\">\r\n                <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\r\n              </a>     \r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.ts ***!
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
            template: __webpack_require__(/*! ./navbarhome.component.html */ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.html"),
            styles: [__webpack_require__(/*! ./navbarhome.component.css */ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.css")]
        })
    ], NavbarHomeComponent);
    return NavbarHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/generalcomponents/footercomponent/footer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/footercomponent/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center flex-row-reverse\">\r\n      <div class=\"col-auto ml-lg-auto\">\r\n\r\n      </div>\r\n      <div class=\"col-12 col-lg-auto mt-3 mt-lg-0 text-center\">\r\n        Copyright © 2018 <a href=\".\">Concourse</a>. Theme by <a href=\"https://codecalm.net\" target=\"_blank\">codecalm.net</a> All rights reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

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

/***/ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/generalcomponents/navbarcomponent/navbar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header py-4\">\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      <a class=\"header-brand\" href=\"/\">\r\n        <img src=\"https://tabler.github.io/tabler/demo/brand/tabler.svg\" class=\"header-brand-img\" alt=\"tabler logo\">\r\n      </a>\r\n      <div class=\"d-flex order-lg-2 ml-auto\">\r\n        <div class=\"nav-item d-none d-md-flex\">\r\n         \r\n        </div>\r\n        <!--Bell notification area-->\r\n        <div class=\"dropdown d-none d-md-flex\">\r\n          <a class=\"nav-link icon\" data-toggle=\"dropdown\">\r\n            <i class=\"fe fe-bell\"></i>\r\n            <span class=\"nav-unread\"></span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/male/41.jpg)\"></span>\r\n              <div>\r\n                <strong>Nathan</strong> pushed new commit: Fix page load performance issue.\r\n                <div class=\"small text-muted\">10 minutes ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)\"></span>\r\n              <div>\r\n                <strong>Alice</strong> started new task: Tabler UI design.\r\n                <div class=\"small text-muted\">1 hour ago</div>\r\n              </div>\r\n            </a>\r\n            <a href=\"#\" class=\"dropdown-item d-flex\">\r\n              <span class=\"avatar mr-3 align-self-center\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/18.jpg)\"></span>\r\n              <div>\r\n                <strong>Rose</strong> deployed new version of NodeJS REST Api V3\r\n                <div class=\"small text-muted\">2 hours ago</div>\r\n              </div>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a href=\"#\" class=\"dropdown-item text-center text-muted-dark\">Mark all as read</a>\r\n          </div>\r\n        </div>\r\n        <!--Bell notification area end-->\r\n        <div class=\"dropdown\">\r\n          <a href=\"#\" class=\"nav-link pr-0 leading-none\" data-toggle=\"dropdown\">\r\n            <span class=\"avatar\" style=\"background-image: url(https://tabler.github.io/tabler/demo/faces/female/25.jpg)\"></span>\r\n            <span class=\"ml-2 d-none d-lg-block\">\r\n              <span class=\"text-default\">Jane Pearson</span>\r\n              <small class=\"text-muted d-block mt-1\">Administrator</small>\r\n            </span>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-user\"></i> Profile\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-settings\"></i> Settings\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <span class=\"float-right\"><span class=\"badge badge-primary\">6</span></span>\r\n              <i class=\"dropdown-icon fe fe-mail\"></i> Inbox\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-send\"></i> Message\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-help-circle\"></i> Need help?\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"#\">\r\n              <i class=\"dropdown-icon fe fe-log-out\"></i> Sign out\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a href=\"#\" class=\"header-toggler d-lg-none ml-3 ml-lg-0\" data-toggle=\"collapse\" data-target=\"#headerMenuCollapse\">\r\n        <span class=\"header-toggler-icon\"></span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
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

module.exports = "/*------global-----*/\r\n\r\n\r\n*{\r\n    margin:0;\r\n    padding:0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n}\r\n\r\n\r\nbody{\r\n    width: 100%;\r\n    background-color: white !important;\r\n}\r\n\r\n\r\n.nav-bar-attr{\r\n    position:absolute;\r\n    width:100%\r\n}\r\n\r\n\r\n.content-area-attr{\r\n    z-index: -1;\r\n}\r\n\r\n\r\nh1{\r\n    font-size:49px;\r\n    font-weight: 100;\r\n    color:#2B9DFF\r\n}\r\n\r\n\r\nh3{\r\n    font-size: 22px;\r\n\r\n}\r\n\r\n\r\np{\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n.btnOutline{\r\n    display:block;\r\n    text-decoration: none;\r\n    color: #2B9DFF;\r\n    border: 2px solid #2B9DFF;\r\n    border-radius: 6px;\r\n    width: 175px;\r\n    height: 53px;\r\n    line-height: 53px;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    transition:all 0.3s ease;\r\n    \r\n}\r\n\r\n\r\n.btnOutline:hover, .btnFilled:hover\r\n{\r\n    border-radius:48%;\r\n}\r\n\r\n\r\n.btnOutline:hover{\r\n    color:white;\r\n    background-color:#2B9DFF;\r\n}\r\n\r\n\r\n.btnFilled:hover{\r\n    color: #2B9DFF;\r\n    background: none;\r\n}\r\n\r\n\r\n.btnFilled{\r\n    display:block;\r\n    text-decoration: none;\r\n    color: white;\r\n    background-color:#2B9DFF;\r\n    border: 2px solid #2B9DFF;\r\n    border-radius: 6px;\r\n    width: 175px;\r\n    height: 53px;\r\n    line-height: 53px;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    transition:all 0.3s ease;\r\n}\r\n\r\n\r\n/*------nav-----*/\r\n\r\n\r\nnav {\r\n    padding: 50px 0 0 0;\r\n    text-align: right;\r\n}\r\n\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    color: #202427;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\nnav a:first-child {\r\n    float: left;\r\n}\r\n\r\n\r\nnav a img{\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\nnav a span{\r\n    background-color: #2B9DFF;\r\n    padding: 5px 15px;\r\n    border-radius: 1000px;\r\n    font-weight: 100;\r\n    color: white;\r\n    margin-left: 7;\r\n}\r\n\r\n\r\n.clear-left{\r\n    clear: left\r\n}\r\n\r\n\r\n/*------header-----*/\r\n\r\n\r\nheader{\r\n    height: 1000px;\r\n    min-height: 1000px;\r\n    padding: 0 5%;\r\n    background-image: url(/content/angular/assets/images/background_header.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: top right;\r\n    \r\n}\r\n\r\n\r\nheader h1{\r\n    width: 40%;\r\n    margin: 4em 0 0 0;\r\n    font-weight: 600;\r\n\r\n}\r\n\r\n\r\n/*------about-----*/\r\n\r\n\r\n.team{\r\n    margin-top: 10%;\r\n    text-align: center;\r\n    margin: 10em 0 3em 0;\r\n    padding: 0 10%;\r\n    background-image: url(/content/angular/assets/images/background_calltoaction.png);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.team h1{\r\n    font-weight: 600;\r\n    width: 75%;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n\r\n.members {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.person{\r\n    margin: 0 10% 0 10%;\r\n}\r\n\r\n\r\n.content-top-margin {\r\n    margin: 30px 0 0 0;\r\n}\r\n\r\n\r\n/*-----product info ----- */\r\n\r\n\r\n.about{\r\n    margin-top: 10%;\r\n    padding: 0 10%;\r\n    background-image: url(/content/angular/assets/images/background_about2.png);\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n    background-size: 80%;\r\n    height: 900px;\r\n    min-height:900px;\r\n}\r\n\r\n\r\n.about h1{\r\n    margin-bottom: 30px;\r\n    padding-top: 300px;\r\n    margin-left: 50%;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n/*-----calltoaction----*/\r\n\r\n\r\n.calltoaction{\r\n    text-align:center;\r\n    padding: 20em 5% 20em 5%;\r\n    background-image: url(/content/angular/assets/images/background_calltoaction.png);\r\n    background-repeat: no-repeat;\r\n    background-size: 40%;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.calltoaction h1, .calltoaction a{\r\n    display: inline-block;\r\n    margin: 0 60px;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.calltoaction h1{\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n/*------footer------*/\r\n\r\n\r\nfooter{\r\n    padding: 0 5%;\r\n    margin-bottom: 40px;\r\n    color: #2B9DFF;\r\n}\r\n\r\n\r\nfooter p, .footerpages{\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.footerpages{\r\n    float: right;\r\n}\r\n\r\n\r\n.footerpages a{\r\n    text-decoration: none;\r\n    font-weight: 200;\r\n    color: #2B9DFF;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n/*-----responsive-----*/"

/***/ }),

/***/ "./src/app/components/homecomponent/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/homecomponent/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">  \r\n    <div class=\"page-main\">\r\n        <div class=\"nav-bar-attr\">\r\n            <app-navbar-home></app-navbar-home>\r\n        </div>\r\n    </div>\r\n\r\n  <div >\r\n    <header>\r\n        <nav>\r\n            \r\n            \r\n        </nav>\r\n        <h1>The incredibly easy, completely free Q&A platform. \r\n            Save time and help students learn using the power of community</h1>\r\n        <a routerLink=\"/register\" href=\"#\"class=\"btnOutline\">Sign Up</a>\r\n    </header>\r\n\r\n\r\n    <div class=\"team\">\r\n        <h1> Concourse works with you. This powerful technology powers your classroom and lectures.\r\n        </h1>\r\n\r\n        <div class=\"members\">\r\n            <div class=\"person\">\r\n                <img src=\"/content/angular/assets/images/background_chat.png\"/>\r\n                <h3 class = \"content-top-margin\">Discussions</h3>\r\n                <p>Chat like communication during and after lectures</p>\r\n            </div>\r\n            <div class=\"person\">\r\n                    <img src=\"/content/angular/assets/images/background_learn.png\"/>\r\n                    <h3 class=\"content-top-margin\">Host Course Materials</h3>\r\n                    <p> Improve and measure learning</p>\r\n            </div>      \r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"about\">\r\n        <h1>The most inituitive way to mangage your lecture's Q&A and it's free! </h1>\r\n        <div class=\"icons\">\r\n            \r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"calltoaction\">\r\n        <h1> Sign Up Now</h1>\r\n        <a routerLink=\"/register\" href=\"#\" class=\"btnFilled\">Get Started</a>\r\n    </div>\r\n    \r\n    <footer>\r\n        <p>&copy; 2019 Concourse</p>\r\n        <div class=\"footerpages\">\r\n            <a href=\"#\">Home</a>\r\n            <a href=\"#\">Resources</a>\r\n            <a href=\"#\">Terms</a>\r\n            <a href=\"#\">Privacy</a>\r\n        </div>\r\n    </footer>\r\n    \r\n    </div>\r\n</div>\r\n\r\n"

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
/*! exports provided: NavbarComponent, NavbarHomeComponent, HomeComponent, DashboardComponent, SubNavbarComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generalcomponents_navbarcomponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalcomponents/navbarcomponent/navbar.component */ "./src/app/components/generalcomponents/navbarcomponent/navbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return _generalcomponents_navbarcomponent_navbar_component__WEBPACK_IMPORTED_MODULE_0__["NavbarComponent"]; });

/* harmony import */ var _generalComponents_navbarhomecomponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalComponents/navbarhomecomponent/navbarhome.component */ "./src/app/components/generalComponents/navbarhomecomponent/navbarhome.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarHomeComponent", function() { return _generalComponents_navbarhomecomponent_navbarhome_component__WEBPACK_IMPORTED_MODULE_1__["NavbarHomeComponent"]; });

/* harmony import */ var _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homecomponent/home.component */ "./src/app/components/homecomponent/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _homecomponent_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]; });

/* harmony import */ var _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardcomponent/dashboard.component */ "./src/app/components/dashboardcomponent/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboardcomponent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]; });

/* harmony import */ var _generalcomponents_subnavbarcomponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalcomponents/subnavbarcomponent/subnavbar.component */ "./src/app/components/generalcomponents/subnavbarcomponent/subnavbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubNavbarComponent", function() { return _generalcomponents_subnavbarcomponent_subnavbar_component__WEBPACK_IMPORTED_MODULE_4__["SubNavbarComponent"]; });

/* harmony import */ var _generalcomponents_footercomponent_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generalcomponents/footercomponent/footer.component */ "./src/app/components/generalcomponents/footercomponent/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _generalcomponents_footercomponent_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]; });










/***/ }),

/***/ "./src/app/constants/constants.export.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/constants.export.ts ***!
  \***********************************************/
/*! exports provided: ERROR_PASSWORD_INVALID_MATCH, ERROR_EMAIL_NOT_VALID, ERROR_PASSWORD_NOT_VALID, ERROR_TERMS_AND_CONIDTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PASSWORD_INVALID_MATCH", function() { return ERROR_PASSWORD_INVALID_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_EMAIL_NOT_VALID", function() { return ERROR_EMAIL_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_PASSWORD_NOT_VALID", function() { return ERROR_PASSWORD_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TERMS_AND_CONIDTIONS", function() { return ERROR_TERMS_AND_CONIDTIONS; });
var ERROR_PASSWORD_INVALID_MATCH = 'These passwords don\'t match. Try again?';
var ERROR_EMAIL_NOT_VALID = 'This email address is not valid.';
var ERROR_PASSWORD_NOT_VALID = 'This password does not meet the required length.';
var ERROR_TERMS_AND_CONIDTIONS = 'You must agree to the terms and conditions.';



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
        var _this = this;
        this.css_loading = 'dimmer active';
        if (this.valid_input) {
            this.user_service.login(this.user_email, this.user_password).subscribe(function (data) {
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
            });
        }
        console.log('Hello from onLogin()');
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
                            this.router.navigate(['/dashboard']);
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

module.exports = "<div class=\"page\">\r\n  <div class=\"page-single\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-login mx-auto\">\r\n          <div class=\"text-center mb-6\">\r\n            <img src=\"./demo/brand/tabler.svg\" class=\"h-6\" alt=\"\">\r\n          </div>\r\n          <form class=\"card\" action=\"javascript:void(0);\" method=\"post\">\r\n            <div class=\"card-body p-6\">\r\n              <div class=\"card-title\">Create new account</div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Email address</label>\r\n                <input id = \"input-email\" type=\"email\" class=\"form-control\" placeholder=\"Enter email\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\" >\r\n                <div id=\"lbl-error-email\" class=\"invalid-feedback\">{{error_email}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Password</label>\r\n                <input id=\"input-password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\">\r\n                <div id=\"lbl-error-password\" class=\"invalid-feedback\">{{error_password}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">Confirm Password</label>\r\n                <input id=\"input-confirm-password\"type=\"password\" class=\"form-control\" placeholder=\"Password\" (input) = \"onUpdate($event)\" (keyup) = \"onUpdate($event)\">\r\n                <div id=\"lbl-error-confirm-password\" class=\"invalid-feedback\">{{error_confirm_password}}</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                  <input id = \"input-agree\" (change) = \"onUpdate($event)\" type=\"checkbox\" class=\"custom-control-input\" />\r\n                  <span class=\"custom-control-label\">Agree the <a href=\"terms.html\">terms and policy</a></span>\r\n                  <div id=\"lbl-error-policy\" class=\"invalid-feedback\">{{error_terms_policy}}</div>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-footer\">\r\n                <button id=\"btn-register\" type=\"submit\" class=\"btn btn-primary btn-block\">Create new account</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center text-muted\">\r\n            Already have account? <a routerLink=\"/login\">Sign in</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
                //
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
        if (this.valid_email && this.valid_password && this.valid_confirm_password && this.terms_policy_checked) {
            this.valid_input = true;
            document.getElementById('btn-register').removeAttribute('disabled');
        }
        else {
            this.valid_input = false;
            document.getElementById('btn-register').setAttribute('disabled', '');
        }
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

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userservice_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userservice/user.service */ "./src/app/services/userservice/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _userservice_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });





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
            var test_email = sessionStorage.getItem('email').trim();
            console.log('isAuth method inside User.Service class: test_email: ' + test_email + ' Respone email: ' + response_email);
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
    UserService.prototype.register = function (_email, _password, _confirmpassword) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
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