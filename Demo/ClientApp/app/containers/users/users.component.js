"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    // Use "constructor"s only for dependency injection
    function UsersComponent(userService) {
        this.userService = userService;
    }
    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (result) {
            console.log('HttpClient [GET] /api/users/allresult', result);
            _this.users = result;
        });
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.clearUser();
        this.userService.deleteUser(user).subscribe(function (result) {
            console.log('Delete user result: ', result);
            var position = _this.users.indexOf(user);
            _this.users.splice(position, 1);
        }, function (error) {
            console.log("There was an issue. " + error._body + ".");
        });
    };
    UsersComponent.prototype.onUserUpdate = function (user) {
        this.users[this.users.findIndex(function (u) { return u.id == user.id; })] = user;
    };
    UsersComponent.prototype.addUser = function (newUserName) {
        var _this = this;
        this.userService.addUser(newUserName).subscribe(function (result) {
            console.log('Post user result: ', result);
            _this.users.push(result);
            _this.selectedUser = result;
        }, function (error) {
            console.log("There was an issue. " + error._body + ".");
        });
    };
    UsersComponent.prototype.clearUser = function () {
        if (this.selectedUser) {
            this.selectedUser = null;
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss'],
            animations: [
                // Animation example
                // Triggered in the ngFor with [@flyInOut]
                animations_1.trigger('flyInOut', [
                    animations_1.state('in', animations_1.style({ transform: 'translateY(0)' })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateY(-100%)' }),
                        animations_1.animate(1000)
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(1000, animations_1.style({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
