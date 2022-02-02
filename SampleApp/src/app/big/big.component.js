"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigComponent = void 0;
var core_1 = require("@angular/core");
var BigComponent = /** @class */ (function () {
    function BigComponent() {
    }
    BigComponent.prototype.ngOnInit = function () {
    };
    BigComponent.prototype.testBeforePrint = function () {
        console.log('testBeforePrint() successfully called');
        console.log(this.bigPdfViewer.page);
        this.bigPdfViewer.page = 3;
        console.log(this.bigPdfViewer.page);
    };
    BigComponent.prototype.testAfterPrint = function () {
        console.log('testAfterPrint() successfully called');
    };
    BigComponent.prototype.testPagesLoaded = function (count) {
        console.log('testPagesLoaded() successfully called. Total pages # : ' + count);
    };
    BigComponent.prototype.testPageChange = function (pageNumber) {
        console.log('testPageChange() successfully called. Current page # : ' + pageNumber);
    };
    __decorate([
        core_1.ViewChild('bigPdfViewer', { static: true })
    ], BigComponent.prototype, "bigPdfViewer", void 0);
    BigComponent = __decorate([
        core_1.Component({
            selector: 'app-big',
            templateUrl: './big.component.html',
            styleUrls: ['./big.component.scss']
        })
    ], BigComponent);
    return BigComponent;
}());
exports.BigComponent = BigComponent;
