//// [tests/cases/conformance/scanner/ecmascript5/scannerClass2.ts] ////

//// [scannerClass2.ts]
    export class LoggerAdapter implements ILogger {
        constructor (public logger: ILogger) { 
            this._information = this.logger.information();
        }
    }

//// [scannerClass2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerAdapter = void 0;
class LoggerAdapter {
    logger;
    constructor(logger) {
        this.logger = logger;
        this._information = this.logger.information();
    }
}
exports.LoggerAdapter = LoggerAdapter;
