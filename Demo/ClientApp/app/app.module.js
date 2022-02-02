"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModuleShared = exports.createTranslateLoader = exports.hljsLanguages = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var tokens_1 = require("@nguniversal/aspnetcore-engine/tokens");
var common_2 = require("@nguniversal/common");
// i18n support
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var user_detail_component_1 = require("./components/user-detail/user-detail.component");
var ngx_bootstrap_component_1 = require("./containers/ngx-bootstrap-demo/ngx-bootstrap.component");
var not_found_component_1 = require("./containers/not-found/not-found.component");
var users_component_1 = require("./containers/users/users.component");
var link_service_1 = require("./shared/link.service");
var user_service_1 = require("./shared/user.service");
var ngx_highlightjs_1 = require("ngx-highlightjs");
var xml_1 = require("highlight.js/lib/languages/xml");
var scss_1 = require("highlight.js/lib/languages/scss");
var typescript_1 = require("highlight.js/lib/languages/typescript");
var javascript_1 = require("highlight.js/lib/languages/javascript");
var ng2_pdfjs_viewer_1 = require("ng2-pdfjs-viewer");
var home_component_1 = require("./containers/home/home.component");
var externalwindow_component_1 = require("./containers/externalwindow/externalwindow.component");
var autodownload_component_1 = require("./containers/autodownload/autodownload.component");
var language_component_1 = require("./containers/language/language.component");
var bytearray_component_1 = require("./containers/bytearray/bytearray.component");
var showhide_component_1 = require("./containers/showhide/showhide.component");
var events_component_1 = require("./containers/events/events.component");
function hljsLanguages() {
    return [
        { name: 'typescript', func: typescript_1.default },
        { name: 'javascript', func: javascript_1.default },
        { name: 'scss', func: scss_1.default },
        { name: 'xml', func: xml_1.default }
    ];
}
exports.hljsLanguages = hljsLanguages;
function createTranslateLoader(http, baseHref) {
    // Temporary Azure hack
    if (baseHref === null && typeof window !== 'undefined') {
        baseHref = window.location.origin;
    }
    // i18n files are in `wwwroot/assets/`
    return new http_loader_1.TranslateHttpLoader(http, baseHref + "/assets/i18n/", '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navmenu_component_1.NavMenuComponent,
                externalwindow_component_1.ExternalWindowComponent,
                autodownload_component_1.AutoDownloadComponent,
                language_component_1.LanguageComponent,
                bytearray_component_1.ByteArrayComponent,
                showhide_component_1.ShowHideComponent,
                events_component_1.EventsComponent,
                users_component_1.UsersComponent,
                user_detail_component_1.UserDetailComponent,
                home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent,
                ngx_bootstrap_component_1.NgxBootstrapComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'my-app-id' // make sure this matches with your Server NgModule
                }),
                http_1.HttpClientModule,
                common_2.TransferHttpCacheModule,
                platform_browser_1.BrowserTransferStateModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.AccordionModule.forRoot(),
                ngx_highlightjs_1.HighlightModule.forRoot({
                    languages: hljsLanguages
                }),
                ng2_pdfjs_viewer_1.PdfJsViewerModule,
                // i18n support
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient, [tokens_1.ORIGIN_URL]]
                    }
                }),
                // App Routing
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        component: home_component_1.HomeComponent,
                        // *** SEO Magic ***
                        // We're using "data" in our Routes to pass in our <title> <meta> <link> tag information
                        // Note: This is only happening for ROOT level Routes, you'd have to add some additional logic if you wanted this for Child level routing
                        // When you change Routes it will automatically append these to your document for you on the Server-side
                        //  - check out app.component.ts to see how it's doing this
                        data: {
                            title: 'Homepage',
                            meta: [
                                {
                                    name: 'description',
                                    content: 'This is an example Description Meta tag!'
                                }
                            ],
                            links: [
                                { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
                                {
                                    rel: 'alternate',
                                    hreflang: 'es',
                                    href: 'http://es.example.com/'
                                }
                            ]
                        }
                    },
                    {
                        path: 'externalwindow',
                        component: externalwindow_component_1.ExternalWindowComponent
                    },
                    {
                        path: 'autodownload',
                        component: autodownload_component_1.AutoDownloadComponent
                    },
                    {
                        path: 'language',
                        component: language_component_1.LanguageComponent
                    },
                    {
                        path: 'bytearray',
                        component: bytearray_component_1.ByteArrayComponent
                    },
                    {
                        path: 'showhide',
                        component: showhide_component_1.ShowHideComponent
                    },
                    {
                        path: 'events',
                        component: events_component_1.EventsComponent
                    },
                ], {
                    // Router options
                    useHash: false,
                    preloadingStrategy: router_1.PreloadAllModules,
                    initialNavigation: 'enabled'
                })
            ],
            providers: [link_service_1.LinkService, user_service_1.UserService, core_2.TranslateModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModuleShared);
    return AppModuleShared;
}());
exports.AppModuleShared = AppModuleShared;
