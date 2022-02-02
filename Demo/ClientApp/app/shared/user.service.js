"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var core_1 = require("@angular/core");
var tokens_1 = require("@nguniversal/aspnetcore-engine/tokens");
var UserService = /** @class */ (function () {
    function UserService(http, injector) {
        this.http = http;
        this.injector = injector;
        this.baseUrl = this.injector.get(tokens_1.ORIGIN_URL);
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + "/api/users");
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get(this.baseUrl + "/api/users/" + user.id);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete(this.baseUrl + "/api/users/" + user.id);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + "/api/users/" + user.id, user);
    };
    UserService.prototype.addUser = function (newUserName) {
        return this.http.post(this.baseUrl + "/api/users", {
            name: newUserName
        });
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
