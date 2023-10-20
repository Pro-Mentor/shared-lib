"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/**
 * this is a custom error class
 * it is used to create custom errors
 * @abstract statusCode Http status code of the error
 * @abstract errorCode specific error code of the error
 * @abstract serializeErrors method to serialize the error
 * @extends Error
 * @example
 * class CustomError extends Error {
 *    statusCode = 400;
 *    errorCode = ErrorCode.BAD_REQUEST;
 *    constructor(message: string) {
 *      super(message);
 *      Object.setPrototypeOf(this, CustomError.prototype);
 *    }
 *    serializeErrors() {
 *      return [{ message: this.message }];
 *    }
 * }
 */
class CustomError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.CustomError = CustomError;
