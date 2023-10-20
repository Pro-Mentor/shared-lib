"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
/**
 * Error codes for the application.
 * These error codes are used to identify the error application specific type.
 * @enum {string}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ROUTE_NOT_FOUND"] = "ROUTE_NOT_FOUND";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
