"use strict";
/*
 * -- LinkService --        [Temporary]
 * @MarkPieszak
 *
 * Similar to Meta service but made to handle <link> creation for SEO purposes
 * Soon there will be an overall HeadService within Angular that handles Meta/Link everything
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkService = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document, platform_id) {
        this.rendererFactory = rendererFactory;
        this.document = document;
        this.platform_id = platform_id;
        this.isServer = common_1.isPlatformServer(this.platform_id);
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    // updateTag(tag: LinkDefinition, selector?: string) {
    //     if (!tag) return null;
    //     selector = selector || this._parseSelector(tag);
    //     const meta = this.getTag(selector);
    //     if (meta) {
    //         return this._setMetaElementAttributes(tag, meta);
    //     }
    //     return this._getOrCreateElement(tag, true);
    // }
    // getTag(attrSelector: string): HTMLMetaElement {
    //     if (!attrSelector) return null;
    //     return this._dom.querySelector(this._doc, `meta[${attrSelector}]`);
    // }
    LinkService.prototype._parseSelector = function (tag) {
        // Possibly re-work this
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    LinkService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(2, core_1.Inject(core_1.PLATFORM_ID))
    ], LinkService);
    return LinkService;
}());
exports.LinkService = LinkService;
