"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// ----> Import PdfJsViewerModule here
var ng2_pdfjs_viewer_1 = require("ng2-pdfjs-viewer");
var toolbar_1 = require("@angular/material/toolbar");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var inline_component_1 = require("./inline/inline.component");
var big_component_1 = require("./big/big.component");
var dynamic_component_1 = require("./dynamic/dynamic.component");
var grid_list_1 = require("@angular/material/grid-list");
var table_1 = require("@angular/material/table");
var MATERIAL_IMPORTS = [
    animations_1.BrowserAnimationsModule,
    toolbar_1.MatToolbarModule,
    button_1.MatButtonModule
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                inline_component_1.InlineComponent,
                big_component_1.BigComponent,
                dynamic_component_1.DynamicComponent
            ],
            imports: __spreadArrays([
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ], MATERIAL_IMPORTS, [
                // ----> Import PdfJsViewerModule here
                ng2_pdfjs_viewer_1.PdfJsViewerModule,
                grid_list_1.MatGridListModule,
                table_1.MatTableModule,
            ]),
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
