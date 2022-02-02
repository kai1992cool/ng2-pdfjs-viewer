"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoDownloadComponent = void 0;
var core_1 = require("@angular/core");
var AutoDownloadComponent = /** @class */ (function () {
    function AutoDownloadComponent() {
        this.htmlcode = "\n<!-- your.component.html -->\n<ng2-pdfjs-viewer pdfSrc=\"gre_research_validity_data.pdf\" [startDownload]=\"true\"></ng2-pdfjs-viewer>\n";
    }
    AutoDownloadComponent = __decorate([
        core_1.Component({
            selector: 'app-autodownload',
            templateUrl: './autodownload.component.html'
        })
    ], AutoDownloadComponent);
    return AutoDownloadComponent;
}());
exports.AutoDownloadComponent = AutoDownloadComponent;
