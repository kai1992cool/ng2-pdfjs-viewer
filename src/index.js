"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfJsViewerModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_pdfjs_viewer_component_1 = require("./ng2-pdfjs-viewer.component");
__exportStar(require("./ng2-pdfjs-viewer.component"), exports);
var PdfJsViewerModule = /** @class */ (function () {
    function PdfJsViewerModule() {
    }
    PdfJsViewerModule_1 = PdfJsViewerModule;
    PdfJsViewerModule.forRoot = function () {
        return {
            ngModule: PdfJsViewerModule_1
        };
    };
    var PdfJsViewerModule_1;
    PdfJsViewerModule = PdfJsViewerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                ng2_pdfjs_viewer_component_1.PdfJsViewerComponent
            ],
            exports: [
                ng2_pdfjs_viewer_component_1.PdfJsViewerComponent
            ]
        })
    ], PdfJsViewerModule);
    return PdfJsViewerModule;
}());
exports.PdfJsViewerModule = PdfJsViewerModule;
