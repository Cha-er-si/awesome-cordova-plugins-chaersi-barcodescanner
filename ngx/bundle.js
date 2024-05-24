'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var ChaersiBarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(ChaersiBarcodeScanner, _super);
    function ChaersiBarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaersiBarcodeScanner.prototype.startCameraScan = function () { return core.cordova(this, "startCameraScan", {}, arguments); };
    ChaersiBarcodeScanner.prototype.isCameraReady = function () { return core.cordova(this, "isCameraReady", {}, arguments); };
    ChaersiBarcodeScanner.prototype.cameraUnbind = function () { return core.cordova(this, "cameraUnbind", {}, arguments); };
    ChaersiBarcodeScanner.pluginName = "ChaersiBarcodeScanner";
    ChaersiBarcodeScanner.plugin = "chaersi-cordova-barcodescanner";
    ChaersiBarcodeScanner.pluginRef = "ChaersiBarcodeScanner";
    ChaersiBarcodeScanner.repo = "";
    ChaersiBarcodeScanner.install = "";
    ChaersiBarcodeScanner.installVariables = [];
    ChaersiBarcodeScanner.platforms = ["Android"];
    ChaersiBarcodeScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return ChaersiBarcodeScanner;
}(core.AwesomeCordovaNativePlugin));

exports.ChaersiBarcodeScanner = ChaersiBarcodeScanner;
