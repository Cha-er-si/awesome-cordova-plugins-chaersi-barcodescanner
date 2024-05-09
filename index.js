var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    ChaersiBarcodeScannerOriginal.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    ChaersiBarcodeScannerOriginal.prototype.startCameraScan = function () { return cordova(this, "startCameraScan", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hhZXJzaS1iYXJjb2RlLXNjYW5uZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDOztJQWtDSSx5Q0FBMEI7Ozs7SUFFbkUsMENBQVUsYUFBQyxJQUFZO0lBS3ZCLCtDQUFlOzs7Ozs7OztnQ0E1RGpCO0VBcUQyQywwQkFBMEI7U0FBeEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFBsdWdpbixcclxuICBDb3Jkb3ZhLFxyXG4gIENvcmRvdmFQcm9wZXJ0eSxcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcclxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDaGFlcnNpIEJhcmNvZGUgU2Nhbm5lclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2hhZXJzaUJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NoYWVyc2ktYmFyY29kZS1zY2FubmVyJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjaGFlcnNpQmFyY29kZVNjYW5uZXI6IENoYWVyc2lCYXJjb2RlU2Nhbm5lcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmNoYWVyc2lCYXJjb2RlU2Nhbm5lci5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2hhZXJzaUJhcmNvZGVTY2FubmVyJyxcclxuICBwbHVnaW46ICdjaGFlcnNpLWNvcmRvdmEtYmFyY29kZXNjYW5uZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdDaGFlcnNpQmFyY29kZVNjYW5uZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYWVyc2lCYXJjb2RlU2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgY29vbE1ldGhvZChhcmcxOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0Q2FtZXJhU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=