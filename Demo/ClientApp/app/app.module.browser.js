"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.getRequest = exports.getOriginUrl = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var tokens_1 = require("@nguniversal/aspnetcore-engine/tokens");
var preboot_1 = require("preboot");
var app_component_1 = require("./app.component");
var app_module_1 = require("./app.module");
function getOriginUrl() {
    return window.location.origin;
}
exports.getOriginUrl = getOriginUrl;
function getRequest() {
    // the Request object only lives on the server
    return { cookie: document.cookie };
}
exports.getRequest = getRequest;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                preboot_1.PrebootModule.withConfig({ appRoot: 'app-root' }),
                animations_1.BrowserAnimationsModule,
                // Our Common AppModule
                app_module_1.AppModuleShared
            ],
            providers: [
                {
                    // We need this for our Http calls since they'll be using an ORIGIN_URL provided in main.server
                    // (Also remember the Server requires Absolute URLs)
                    provide: tokens_1.ORIGIN_URL,
                    useFactory: getOriginUrl
                },
                {
                    // The server provides these in main.server
                    provide: tokens_1.REQUEST,
                    useFactory: getRequest
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
