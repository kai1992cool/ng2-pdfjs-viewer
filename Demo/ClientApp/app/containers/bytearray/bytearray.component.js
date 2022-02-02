"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteArrayComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ByteArrayComponent = /** @class */ (function () {
    function ByteArrayComponent(http) {
        var _this = this;
        this.http = http;
        this.htmlcode = "\n<!-- your.component.html -->\n<div style=\"height: 600px\">\n    <ng2-pdfjs-viewer #pdfViewer></ng2-pdfjs-viewer>\n</div>\n";
        this.tscode = "\n<!-- your.component.ts -->\n @ViewChild('pdfViewer') public pdfViewer;\n\nconstructor(private http: HttpClient) {\n    let url = \"api/document/getmypdf\";\n    this.downloadFile(url).subscribe(\n        (res) => {\n            this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array\n            this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf\n        }\n    );\n}\n\nprivate downloadFile(url: string): any {\n    return this.http.get(url, { responseType: 'blob' })\n        .pipe(\n            map((result: any) => {\n                return result;\n            })\n        );\n}\n";
        this.cscode = "\n[HttpGet]\n[Route(\"GetMyPdf\")]\npublic IActionResult GetMyPdf()\n{\n    var pdfPath = Path.Combine(Directory.GetCurrentDirectory(), \"wwwroot/assets/pdfjs/web/gre_research_validity_data.pdf\");\n    byte[] bytes = System.IO.File.ReadAllBytes(pdfPath);\n    return File(bytes, \"application/pdf\");\n}";
        var url = "api/document/getmypdf";
        this.downloadFile(url).subscribe(function (res) {
            _this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
            _this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf
        });
    }
    ByteArrayComponent.prototype.downloadFile = function (url) {
        return this.http.get(url, { responseType: 'blob' })
            .pipe(operators_1.map(function (result) {
            return result;
        }));
    };
    __decorate([
        core_1.ViewChild('pdfViewer')
    ], ByteArrayComponent.prototype, "pdfViewer", void 0);
    ByteArrayComponent = __decorate([
        core_1.Component({
            selector: 'app-bytearray',
            templateUrl: './bytearray.component.html'
        })
    ], ByteArrayComponent);
    return ByteArrayComponent;
}());
exports.ByteArrayComponent = ByteArrayComponent;
