"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var platform_server_1 = require("@angular/platform-server");
var preboot_1 = require("preboot");
var app_component_1 = require("./app.component");
var app_module_1 = require("./app.module");
var common_1 = require("@nguniversal/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                // Our Common AppModule
                app_module_1.AppModuleShared,
                platform_server_1.ServerModule,
                preboot_1.PrebootModule.withConfig({ appRoot: 'app-root' }),
                animations_1.NoopAnimationsModule,
                common_1.TransferHttpCacheModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
