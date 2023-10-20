"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteNotFoundException = void 0;
const custom_error_1 = require("../custom-error");
const error_codes_1 = require("../error-codes");
/**
 * this is a custom error class for route not found exception
 * @extends CustomError
 */
class RouteNotFoundException extends custom_error_1.CustomError {
    constructor() {
        super("Route not found");
        this.statusCode = 404;
        this.errorCode = error_codes_1.ErrorCode.ROUTE_NOT_FOUND;
        Object.setPrototypeOf(this, RouteNotFoundException.prototype);
    }
    // eslint-disable-next-line class-methods-use-this
    serializeErrors() {
        return [{ message: "Route not found" }];
    }
}
exports.RouteNotFoundException = RouteNotFoundException;
