'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var ChaersiBarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(ChaersiBarcodeScanner, _super);
    function ChaersiBarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaersiBarcodeScanner.prototype.startCameraScan = function () { return core.cordova(this, "startCameraScan", {}, arguments); };
    ChaersiBarcodeScanner.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChaersiBarcodeScanner, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ChaersiBarcodeScanner.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChaersiBarcodeScanner });
    ChaersiBarcodeScanner.pluginName = "ChaersiBarcodeScanner";
    ChaersiBarcodeScanner.plugin = "chaersi-cordova-plugin-barcodescanner";
    ChaersiBarcodeScanner.pluginRef = "chaersi.cordova.plugin.barcodescanner";
    ChaersiBarcodeScanner.repo = "";
    ChaersiBarcodeScanner.install = "";
    ChaersiBarcodeScanner.installVariables = [];
    ChaersiBarcodeScanner.platforms = ["Android"];
    ChaersiBarcodeScanner = tslib.__decorate([], ChaersiBarcodeScanner);
    return ChaersiBarcodeScanner;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChaersiBarcodeScanner, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCameraScan: [] } });

exports.ChaersiBarcodeScanner = ChaersiBarcodeScanner;
