import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var ChaersiBarcodeScanner = /** @class */ (function (_super) {
    __extends(ChaersiBarcodeScanner, _super);
    function ChaersiBarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaersiBarcodeScanner.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    ChaersiBarcodeScanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChaersiBarcodeScanner, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    ChaersiBarcodeScanner.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChaersiBarcodeScanner });
    ChaersiBarcodeScanner.pluginName = "ChaersiBarcodeScanner";
    ChaersiBarcodeScanner.plugin = "chaersi-cordova-barcodescanner";
    ChaersiBarcodeScanner.pluginRef = "ChaersiBarcodeScanner";
    ChaersiBarcodeScanner.repo = "";
    ChaersiBarcodeScanner.install = "";
    ChaersiBarcodeScanner.installVariables = [];
    ChaersiBarcodeScanner.platforms = ["Android"];
    ChaersiBarcodeScanner = __decorate([], ChaersiBarcodeScanner);
    return ChaersiBarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { ChaersiBarcodeScanner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChaersiBarcodeScanner, decorators: [{
            type: Injectable
        }], propDecorators: { coolMethod: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hhZXJzaS1iYXJjb2RlLXNjYW5uZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7OztJQWtDSSx5Q0FBMEI7Ozs7SUFFbkUsMENBQVUsYUFBQyxJQUFZO3VIQUZaLHFCQUFxQjsySEFBckIscUJBQXFCOzs7Ozs7OztJQUFyQixxQkFBcUIsa0JBQXJCLHFCQUFxQjtnQ0FyRGxDO0VBcUQyQywwQkFBMEI7U0FBeEQscUJBQXFCOzRGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVU7OEJBR1QsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcclxuICpcclxuICogVE9ETzpcclxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XHJcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcclxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xyXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxyXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQbHVnaW4sXHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQ2hhZXJzaSBCYXJjb2RlIFNjYW5uZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENoYWVyc2lCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jaGFlcnNpLWJhcmNvZGUtc2Nhbm5lcic7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhZXJzaUJhcmNvZGVTY2FubmVyOiBDaGFlcnNpQmFyY29kZVNjYW5uZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5jaGFlcnNpQmFyY29kZVNjYW5uZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NoYWVyc2lCYXJjb2RlU2Nhbm5lcicsXHJcbiAgcGx1Z2luOiAnY2hhZXJzaS1jb3Jkb3ZhLWJhcmNvZGVzY2FubmVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnQ2hhZXJzaUJhcmNvZGVTY2FubmVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGFlcnNpQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvb2xNZXRob2QoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19