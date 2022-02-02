"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userService) {
        this.userService = userService;
        this.userUpdate = new core_1.EventEmitter();
        this.userForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(),
            name: new forms_1.FormControl()
        });
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm.valueChanges
            .pipe(operators_1.debounceTime(400), operators_1.distinctUntilChanged())
            .subscribe(function (user) { return (_this.user = user); });
    };
    UserDetailComponent.prototype.ngOnChanges = function (changes) {
        this.userForm.patchValue(this.user);
    };
    UserDetailComponent.prototype.updateUser = function () {
        this.userService.updateUser(this.userForm.value).subscribe(function (result) {
            console.log('Put user result: ', result);
        }, function (error) {
            console.log("There was an issue. " + error._body + ".");
        });
        this.userUpdate.emit(this.user);
    };
    __decorate([
        core_1.Input()
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output()
    ], UserDetailComponent.prototype, "userUpdate", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-user-detail',
            styleUrls: ['./user-detail.component.scss'],
            templateUrl: './user-detail.component.html'
        })
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
