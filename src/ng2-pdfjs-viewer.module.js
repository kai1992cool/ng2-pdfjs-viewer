"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfJsViewerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_pdfjs_viewer_component_1 = require("./ng2-pdfjs-viewer.component");
var PdfJsViewerModule = /** @class */ (function () {
    function PdfJsViewerModule() {
    }
    PdfJsViewerModule_1 = PdfJsViewerModule;
    var PdfJsViewerModule_1;
    PdfJsViewerModule = PdfJsViewerModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ng2_pdfjs_viewer_component_1.PdfJsViewerComponent],
            exports: [PdfJsViewerModule_1]
        })
    ], PdfJsViewerModule);
    return PdfJsViewerModule;
}());
exports.PdfJsViewerModule = PdfJsViewerModule;
