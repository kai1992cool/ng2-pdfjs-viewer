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
var router_1 = require("@angular/router");
var tokens_1 = require("@nguniversal/aspnetcore-engine/tokens");
var operators_1 = require("rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, title, meta, linkService, translate, injector) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.meta = meta;
        this.linkService = linkService;
        this.translate = translate;
        this.injector = injector;
        // This will go at the END of your title for example "Home - Angular Universal..." <-- after the dash (-)
        this.endPageTitle = 'Angular Universal and ASP.NET Core Starter';
        // If no Title is provided, we'll use a default one before the dash(-)
        this.defaultPageTitle = 'My App';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        this.request = this.injector.get(tokens_1.REQUEST);
        console.log("What's our REQUEST Object look like?");
        console.log("The Request object only really exists on the Server, but on the Browser we can at least see Cookies");
        console.log(this.request);
    }
    AppComponent.prototype.ngOnInit = function () {
        // Change "Title" on every navigationEnd event
        // Titles come from the data.title property on all Routes (see app.routes.ts)
        this._changeTitleOnNavigation();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // Subscription clean-up
        this.routerSub$.unsubscribe();
    };
    AppComponent.prototype._changeTitleOnNavigation = function () {
        var _this = this;
        this.routerSub$ = this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute; }), operators_1.map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), operators_1.filter(function (route) { return route.outlet === 'primary'; }), operators_1.mergeMap(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this._setMetaAndLinks(event);
        });
    };
    AppComponent.prototype._setMetaAndLinks = function (event) {
        // Set Title if available, otherwise leave the default Title
        var title = event['title']
            ? event['title'] + " - " + this.endPageTitle
            : this.defaultPageTitle + " - " + this.endPageTitle;
        this.title.setTitle(title);
        var metaData = event['meta'] || [];
        var linksData = event['links'] || [];
        for (var i = 0; i < metaData.length; i++) {
            this.meta.updateTag(metaData[i]);
        }
        for (var i = 0; i < linksData.length; i++) {
            this.linkService.addTag(linksData[i]);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
