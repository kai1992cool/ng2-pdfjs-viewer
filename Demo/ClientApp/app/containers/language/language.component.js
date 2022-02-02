"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageComponent = void 0;
var core_1 = require("@angular/core");
var LanguageComponent = /** @class */ (function () {
    function LanguageComponent() {
        this.htmlcode = "\n<!-- your.component.html -->\n<ng2-pdfjs-viewer pdfSrc=\"gre_research_validity_data.pdf\" locale=\"de-AT\"></ng2-pdfjs-viewer>\n";
    }
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'app-language',
            templateUrl: './language.component.html'
        })
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
