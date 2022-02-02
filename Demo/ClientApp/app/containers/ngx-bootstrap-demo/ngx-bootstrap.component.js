"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgxBootstrapComponent = void 0;
var core_1 = require("@angular/core");
var NgxBootstrapComponent = /** @class */ (function () {
    // Use "constructor"s only for dependency injection
    function NgxBootstrapComponent() {
        this.oneAtATime = true;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false,
            open: false
        };
        this.groups = [
            {
                title: 'Angular is neato gang!',
                content: 'ASP.NET Core is too :)'
            },
            {
                title: 'Another One!',
                content: 'Some content going here'
            }
        ];
    }
    NgxBootstrapComponent.prototype.addItem = function () {
        this.items.push("Items " + (this.items.length + 1));
    };
    NgxBootstrapComponent = __decorate([
        core_1.Component({
            selector: 'app-bootstrap',
            templateUrl: './ngx-bootstrap.component.html'
        })
    ], NgxBootstrapComponent);
    return NgxBootstrapComponent;
}());
exports.NgxBootstrapComponent = NgxBootstrapComponent;
