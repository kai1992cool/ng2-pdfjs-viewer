"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.openPdf = function () {
        console.log('opening pdf in new tab!');
        this.externalPdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
        this.externalPdfViewer.refresh();
    };
    AppComponent.prototype.changePdf = function () {
        console.log('Changing pdf viewer url!');
        this.embeddedPdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
        this.embeddedPdfViewer.refresh();
    };
    __decorate([
        core_1.ViewChild('externalPdfViewer', { static: true })
    ], AppComponent.prototype, "externalPdfViewer", void 0);
    __decorate([
        core_1.ViewChild('embeddedPdfViewer', { static: true })
    ], AppComponent.prototype, "embeddedPdfViewer", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
