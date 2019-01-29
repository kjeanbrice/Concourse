"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService_1 = UserService;
    UserService.prototype.isAuth = function () {
        var token;
        token = window.sessionStorage.getItem("access_token");
        if (token === undefined || token === null) {
            return rxjs_1.of(false);
        }
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem("access_token")
            })
        };
        var auth_check = this.http.get(UserService_1.BASE_URL + '/api/account/userinfo', httpOptions).pipe(operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delay(5000), operators_1.concatMap(function (error, index) {
                if (index === 3) {
                    return rxjs_1.throwError(error);
                }
                return null;
            }));
        }), operators_1.map(function (response) {
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
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var params = new http_1.HttpParams();
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
            .pipe(operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.delay(5000), operators_1.concatMap(function (error, index) {
                if (index === 3) {
                    return rxjs_1.throwError(error);
                }
                return rxjs_1.of(null);
            }));
        }), operators_1.map(function (response) {
            console.log("Status:" + response["access_token"]);
            window.sessionStorage.setItem("access_token", response["access_token"]);
            window.sessionStorage.setItem("email", response["userName"]);
            return response;
        }), operators_1.catchError(function (err) { console.log(err.status); return _this.errorHandler(err); }));
    };
    UserService.prototype.errorHandler = function (err) {
        if (err) {
            return rxjs_1.throwError(err);
        }
        return rxjs_1.throwError('Server Error');
    };
    var UserService_1;
    UserService.ACCESS_TOKEN_KEY = "ACCESS TOKEN";
    UserService.BASE_URL = document.getElementById("baseurl-asp").innerHTML;
    UserService = UserService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map