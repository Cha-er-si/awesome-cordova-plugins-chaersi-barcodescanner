import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Chaersi Barcode Scanner
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ChaersiBarcodeScanner } from '@awesome-cordova-plugins/chaersi-barcode-scanner';
 *
 *
 * constructor(private chaersiBarcodeScanner: ChaersiBarcodeScanner) { }
 *
 * ...
 *
 *
 * this.chaersiBarcodeScanner.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ChaersiBarcodeScanner extends AwesomeCordovaNativePlugin {
    startCameraScan(): Promise<any>;
    isCameraReady(): Promise<string>;
}
