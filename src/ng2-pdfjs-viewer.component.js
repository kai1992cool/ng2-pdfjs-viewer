"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfJsViewerComponent = void 0;
var core_1 = require("@angular/core");
var PdfJsViewerComponent = /** @class */ (function () {
    function PdfJsViewerComponent() {
        this.onBeforePrint = new core_1.EventEmitter();
        this.onAfterPrint = new core_1.EventEmitter();
        this.onDocumentLoad = new core_1.EventEmitter();
        this.onPageChange = new core_1.EventEmitter();
        this.externalWindow = false;
        this.showSpinner = true;
        this.openFile = true;
        this.download = true;
        this.viewBookmark = true;
        this.print = true;
        this.fullScreen = true;
        //@Input() public showFullScreen: boolean;
        this.find = true;
        this.useOnlyCssZoom = false;
        this.errorOverride = false;
        this.errorAppend = true;
        this.diagnosticLogs = true;
    }
    Object.defineProperty(PdfJsViewerComponent.prototype, "page", {
        get: function () {
            if (this.PDFViewerApplication) {
                return this.PDFViewerApplication.page;
            }
            else {
                if (this.diagnosticLogs)
                    console.warn("Document is not loaded yet!!!. Try to retrieve page# after full load.");
            }
        },
        set: function (_page) {
            this._page = _page;
            if (this.PDFViewerApplication) {
                this.PDFViewerApplication.page = this._page;
            }
            else {
                if (this.diagnosticLogs)
                    console.warn("Document is not loaded yet!!!. Try to set page# after full load. Ignore this warning if you are not setting page# using '.' notation. (E.g. pdfViewer.page = 5;)");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfJsViewerComponent.prototype, "pdfSrc", {
        get: function () {
            return this._src;
        },
        set: function (_src) {
            this._src = _src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfJsViewerComponent.prototype, "PDFViewerApplicationOptions", {
        get: function () {
            var pdfViewerOptions = null;
            if (this.externalWindow) {
                if (this.viewerTab) {
                    pdfViewerOptions = this.viewerTab.PDFViewerApplicationOptions;
                }
            }
            else {
                if (this.iframe.nativeElement.contentWindow) {
                    pdfViewerOptions = this.iframe.nativeElement.contentWindow.PDFViewerApplicationOptions;
                }
            }
            return pdfViewerOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PdfJsViewerComponent.prototype, "PDFViewerApplication", {
        get: function () {
            var pdfViewer = null;
            if (this.externalWindow) {
                if (this.viewerTab) {
                    pdfViewer = this.viewerTab.PDFViewerApplication;
                }
            }
            else {
                if (this.iframe.nativeElement.contentWindow) {
                    pdfViewer = this.iframe.nativeElement.contentWindow.PDFViewerApplication;
                }
            }
            return pdfViewer;
        },
        enumerable: false,
        configurable: true
    });
    PdfJsViewerComponent.prototype.receiveMessage = function (viewerEvent) {
        if (viewerEvent.data && viewerEvent.data.viewerId && viewerEvent.data.event) {
            var viewerId = viewerEvent.data.viewerId;
            var event_1 = viewerEvent.data.event;
            var param = viewerEvent.data.param;
            if (this.viewerId == viewerId) {
                if (this.onBeforePrint && event_1 == "beforePrint") {
                    this.onBeforePrint.emit();
                }
                else if (this.onAfterPrint && event_1 == "afterPrint") {
                    this.onAfterPrint.emit();
                }
                else if (this.onDocumentLoad && event_1 == "pagesLoaded") {
                    this.onDocumentLoad.emit(param);
                }
                else if (this.onPageChange && event_1 == "pageChange") {
                    this.onPageChange.emit(param);
                }
            }
        }
    };
    PdfJsViewerComponent.prototype.ngOnInit = function () {
        window.addEventListener("message", this.receiveMessage.bind(this), false);
        if (!this.externalWindow) { // Load pdf for embedded views
            this.loadPdf();
        }
    };
    PdfJsViewerComponent.prototype.refresh = function () {
        this.loadPdf();
    };
    PdfJsViewerComponent.prototype.loadPdf = function () {
        if (!this._src) {
            return;
        }
        // console.log(`Tab is - ${this.viewerTab}`);
        // if (this.viewerTab) {
        //   console.log(`Status of window - ${this.viewerTab.closed}`);
        // }
        if (this.externalWindow && (typeof this.viewerTab === 'undefined' || this.viewerTab.closed)) {
            this.viewerTab = window.open('', '_blank', this.externalWindowOptions || '');
            if (this.viewerTab == null) {
                if (this.diagnosticLogs)
                    console.error("ng2-pdfjs-viewer: For 'externalWindow = true'. i.e opening in new tab to work, pop-ups should be enabled.");
                return;
            }
            if (this.showSpinner) {
                this.viewerTab.document.write("\n          <style>\n          .loader {\n            position: fixed;\n            left: 40%;\n            top: 40%;\n            border: 16px solid #f3f3f3;\n            border-radius: 50%;\n            border-top: 16px solid #3498db;\n            width: 120px;\n            height: 120px;\n            animation: spin 2s linear infinite;\n          }\n          @keyframes spin {\n            0% {\n              transform: rotate(0deg);\n            }\n            100% {\n              transform: rotate(360deg);\n            }\n          }\n          </style>\n          <div class=\"loader\"></div>\n        ");
            }
        }
        var fileUrl;
        //if (typeof this.src === "string") {
        //  fileUrl = this.src;
        //}
        if (this._src instanceof Blob) {
            fileUrl = encodeURIComponent(URL.createObjectURL(this._src));
        }
        else if (this._src instanceof Uint8Array) {
            var blob = new Blob([this._src], { type: "application/pdf" });
            fileUrl = encodeURIComponent(URL.createObjectURL(blob));
        }
        else {
            fileUrl = this._src;
        }
        var viewerUrl;
        if (this.viewerFolder) {
            viewerUrl = this.viewerFolder + "/web/viewer.html";
        }
        else {
            viewerUrl = "assets/pdfjs/web/viewer.html";
        }
        viewerUrl += "?file=" + fileUrl;
        if (typeof this.viewerId !== 'undefined') {
            viewerUrl += "&viewerId=" + this.viewerId;
        }
        if (typeof this.onBeforePrint !== 'undefined') {
            viewerUrl += "&beforePrint=true";
        }
        if (typeof this.onAfterPrint !== 'undefined') {
            viewerUrl += "&afterPrint=true";
        }
        if (typeof this.onDocumentLoad !== 'undefined') {
            viewerUrl += "&pagesLoaded=true";
        }
        if (typeof this.onPageChange !== 'undefined') {
            viewerUrl += "&pageChange=true";
        }
        if (this.downloadFileName) {
            if (!this.downloadFileName.endsWith(".pdf")) {
                this.downloadFileName += ".pdf";
            }
            viewerUrl += "&fileName=" + this.downloadFileName;
        }
        if (typeof this.openFile !== 'undefined') {
            viewerUrl += "&openFile=" + this.openFile;
        }
        if (typeof this.download !== 'undefined') {
            viewerUrl += "&download=" + this.download;
        }
        if (this.startDownload) {
            viewerUrl += "&startDownload=" + this.startDownload;
        }
        if (typeof this.viewBookmark !== 'undefined') {
            viewerUrl += "&viewBookmark=" + this.viewBookmark;
        }
        if (typeof this.print !== 'undefined') {
            viewerUrl += "&print=" + this.print;
        }
        if (this.startPrint) {
            viewerUrl += "&startPrint=" + this.startPrint;
        }
        if (typeof this.fullScreen !== 'undefined') {
            viewerUrl += "&fullScreen=" + this.fullScreen;
        }
        // if (this.showFullScreen) {
        //   viewerUrl += `&showFullScreen=${this.showFullScreen}`;
        // }
        if (typeof this.find !== 'undefined') {
            viewerUrl += "&find=" + this.find;
        }
        if (this.lastPage) {
            viewerUrl += "&lastpage=" + this.lastPage;
        }
        if (this.rotatecw) {
            viewerUrl += "&rotatecw=" + this.rotatecw;
        }
        if (this.rotateccw) {
            viewerUrl += "&rotateccw=" + this.rotateccw;
        }
        if (this.cursor) {
            viewerUrl += "&cursor=" + this.cursor;
        }
        if (this.scroll) {
            viewerUrl += "&scroll=" + this.scroll;
        }
        if (this.spread) {
            viewerUrl += "&spread=" + this.spread;
        }
        if (this.locale) {
            viewerUrl += "&locale=" + this.locale;
        }
        if (this.useOnlyCssZoom) {
            viewerUrl += "&useOnlyCssZoom=" + this.useOnlyCssZoom;
        }
        if (this._page || this.zoom || this.nameddest || this.pagemode)
            viewerUrl += "#";
        if (this._page) {
            viewerUrl += "&page=" + this._page;
        }
        if (this.zoom) {
            viewerUrl += "&zoom=" + this.zoom;
        }
        if (this.nameddest) {
            viewerUrl += "&nameddest=" + this.nameddest;
        }
        if (this.pagemode) {
            viewerUrl += "&pagemode=" + this.pagemode;
        }
        if (this.errorOverride || this.errorAppend) {
            viewerUrl += "&errorMessage=" + this.errorMessage;
            if (this.errorOverride) {
                viewerUrl += "&errorOverride=" + this.errorOverride;
            }
            if (this.errorAppend) {
                viewerUrl += "&errorAppend=" + this.errorAppend;
            }
        }
        if (this.externalWindow) {
            this.viewerTab.location.href = viewerUrl;
        }
        else {
            this.iframe.nativeElement.src = viewerUrl;
        }
        // console.log(`
        //   pdfSrc = ${this.pdfSrc}
        //   fileUrl = ${fileUrl}
        //   externalWindow = ${this.externalWindow}
        //   downloadFileName = ${this.downloadFileName}
        //   viewerFolder = ${this.viewerFolder}
        //   openFile = ${this.openFile}
        //   download = ${this.download}
        //   startDownload = ${this.startDownload}
        //   viewBookmark = ${this.viewBookmark}
        //   print = ${this.print}
        //   startPrint = ${this.startPrint}
        //   fullScreen = ${this.fullScreen}
        //   find = ${this.find}
        //   lastPage = ${this.lastPage}
        //   rotatecw = ${this.rotatecw}
        //   rotateccw = ${this.rotateccw}
        //   cursor = ${this.cursor}
        //   scrollMode = ${this.scroll}
        //   spread = ${this.spread}
        //   page = ${this.page}
        //   zoom = ${this.zoom}
        //   nameddest = ${this.nameddest}
        //   pagemode = ${this.pagemode}
        //   pagemode = ${this.errorOverride}
        //   pagemode = ${this.errorAppend}
        //   pagemode = ${this.errorMessage}
        // `);
    };
    __decorate([
        core_1.ViewChild('iframe', { static: true })
    ], PdfJsViewerComponent.prototype, "iframe", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "viewerId", void 0);
    __decorate([
        core_1.Output()
    ], PdfJsViewerComponent.prototype, "onBeforePrint", void 0);
    __decorate([
        core_1.Output()
    ], PdfJsViewerComponent.prototype, "onAfterPrint", void 0);
    __decorate([
        core_1.Output()
    ], PdfJsViewerComponent.prototype, "onDocumentLoad", void 0);
    __decorate([
        core_1.Output()
    ], PdfJsViewerComponent.prototype, "onPageChange", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "viewerFolder", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "externalWindow", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "showSpinner", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "downloadFileName", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "openFile", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "download", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "startDownload", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "viewBookmark", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "print", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "startPrint", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "fullScreen", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "find", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "zoom", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "nameddest", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "pagemode", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "lastPage", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "rotatecw", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "rotateccw", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "cursor", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "spread", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "locale", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "useOnlyCssZoom", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "errorOverride", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "errorAppend", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "errorMessage", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "diagnosticLogs", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "externalWindowOptions", void 0);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "page", null);
    __decorate([
        core_1.Input()
    ], PdfJsViewerComponent.prototype, "pdfSrc", null);
    PdfJsViewerComponent = __decorate([
        core_1.Component({
            selector: 'ng2-pdfjs-viewer',
            template: "<iframe title=\"ng2-pdfjs-viewer\" [hidden]=\"externalWindow || (!externalWindow && !pdfSrc)\" #iframe width=\"100%\" height=\"100%\"></iframe>"
        })
    ], PdfJsViewerComponent);
    return PdfJsViewerComponent;
}());
exports.PdfJsViewerComponent = PdfJsViewerComponent;
