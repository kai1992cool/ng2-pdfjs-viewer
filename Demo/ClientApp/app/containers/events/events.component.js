"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsComponent = void 0;
var core_1 = require("@angular/core");
var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        this.htmlcode = "\n<!-- your.component.html -->\n<ng2-pdfjs-viewer pdfSrc=\"gre_research_validity_data.pdf\" viewerId=\"MyUniqueID\" (onBeforePrint)=\"testBeforePrint()\" (onAfterPrint)=\"testAfterPrint()\" (onPagesLoaded)=\"testPagesLoaded($event)\">\n</ng2-pdfjs-viewer>\n";
        this.tscode = "\n<!-- your.component.ts -->\npublic testBeforePrint() {\n    console.log(\"testBeforePrint() successfully called\");\n}\n\npublic testAfterPrint() {\n    console.log(\"testAfterPrint() successfully called\");\n}\n\npublic testPagesLoaded(count: number) {\n    console.log(\"testPagesLoaded() successfully called. Total pages # : \" + count);\n}\n";
    }
    EventsComponent.prototype.testBeforePrint = function () {
        console.log("testBeforePrint() successfully called");
        alert("Before print event emitted!");
    };
    EventsComponent.prototype.testAfterPrint = function () {
        console.log("testAfterPrint() successfully called");
        alert("After print event emitted!");
    };
    EventsComponent.prototype.testPagesLoaded = function (count) {
        console.log("testPagesLoaded() successfully called. Total pages # : " + count);
        alert("Document is loaded!. Total pages : " + count);
    };
    EventsComponent.prototype.testPageChange = function (pageNumber) {
        console.log("testPageChange() successfully called. Current page # : " + pageNumber);
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'app-events',
            templateUrl: './events.component.html'
        })
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
