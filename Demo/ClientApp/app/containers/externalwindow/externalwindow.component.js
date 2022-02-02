"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalWindowComponent = void 0;
var core_1 = require("@angular/core");
var ExternalWindowComponent = /** @class */ (function () {
    function ExternalWindowComponent() {
        this.htmlcode = "\n<!-- your.component.html -->\n<button (click)=\"openPdf()\" style=\"background-color: greenyellow; font-weight: bold; font-style: italic; height: 50px;\">Open PDF in new tab and start print preview</button>\n<ng2-pdfjs-viewer #externalPdfViewer [externalWindow]=\"true\" [startPrint]=true></ng2-pdfjs-viewer>\n";
        this.tscode = "\n<!-- your.component.ts -->\n@ViewChild('externalPdfViewer') public externalPdfViewer;\npublic openPdf() {\n    console.log(\"opening pdf in new tab!\");\n    this.externalPdfViewer.pdfSrc = \"gre_research_validity_data.pdf\";\n    this.externalPdfViewer.refresh();\n}\n";
    }
    ExternalWindowComponent.prototype.openPdf = function () {
        console.log("opening pdf in new tab!");
        this.externalPdfViewer.pdfSrc = "gre_research_validity_data.pdf";
        this.externalPdfViewer.refresh();
    };
    __decorate([
        core_1.ViewChild('externalPdfViewer')
    ], ExternalWindowComponent.prototype, "externalPdfViewer", void 0);
    ExternalWindowComponent = __decorate([
        core_1.Component({
            selector: 'app-externalwindow',
            templateUrl: './externalwindow.component.html'
        })
    ], ExternalWindowComponent);
    return ExternalWindowComponent;
}());
exports.ExternalWindowComponent = ExternalWindowComponent;
