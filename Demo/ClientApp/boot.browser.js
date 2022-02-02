"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills/browser.polyfills");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_browser_1 = require("./app/app.module.browser");
// // Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(function () {
        modulePromise.then(function (appModule) { return appModule.destroy(); });
    });
}
else {
    core_1.enableProdMode();
}
var modulePromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_browser_1.AppModule);
