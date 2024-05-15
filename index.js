var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var ChaersiBarcodeScannerOriginal = /** @class */ (function (_super) {
    __extends(ChaersiBarcodeScannerOriginal, _super);
    function ChaersiBarcodeScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaersiBarcodeScannerOriginal.prototype.startCameraScan = function () { return cordova(this, "startCameraScan", {}, arguments); };
    ChaersiBarcodeScannerOriginal.prototype.isCameraReady = function () { return cordova(this, "isCameraReady", {}, arguments); };
    ChaersiBarcodeScannerOriginal.pluginName = "ChaersiBarcodeScanner";
    ChaersiBarcodeScannerOriginal.plugin = "chaersi-cordova-barcodescanner";
    ChaersiBarcodeScannerOriginal.pluginRef = "ChaersiBarcodeScanner";
    ChaersiBarcodeScannerOriginal.repo = "";
    ChaersiBarcodeScannerOriginal.install = "";
    ChaersiBarcodeScannerOriginal.installVariables = [];
    ChaersiBarcodeScannerOriginal.platforms = ["Android"];
    return ChaersiBarcodeScannerOriginal;
}(AwesomeCordovaNativePlugin));
var ChaersiBarcodeScanner = new ChaersiBarcodeScannerOriginal();
export { ChaersiBarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hhZXJzaS1iYXJjb2RlLXNjYW5uZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBT04sTUFBTSwrQkFBK0IsQ0FBQzs7SUFrQ0kseUNBQTBCOzs7O0lBRW5FLCtDQUFlO0lBSWYsNkNBQWE7Ozs7Ozs7O2dDQTNEZjtFQXFEMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBDaGFlcnNpIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2hhZXJzaUJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NoYWVyc2ktYmFyY29kZS1zY2FubmVyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjaGFlcnNpQmFyY29kZVNjYW5uZXI6IENoYWVyc2lCYXJjb2RlU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2hhZXJzaUJhcmNvZGVTY2FubmVyLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2hhZXJzaUJhcmNvZGVTY2FubmVyJyxcbiAgcGx1Z2luOiAnY2hhZXJzaS1jb3Jkb3ZhLWJhcmNvZGVzY2FubmVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0NoYWVyc2lCYXJjb2RlU2Nhbm5lcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYWVyc2lCYXJjb2RlU2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBzdGFydENhbWVyYVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoKVxuICBpc0NhbWVyYVJlYWR5KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=