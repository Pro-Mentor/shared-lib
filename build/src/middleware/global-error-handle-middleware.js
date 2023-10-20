"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandleMiddleware = void 0;
const custom_error_1 = require("../errors/custom-error");
const error_codes_1 = require("../errors/error-codes");
/**
 * this is a global exception handler middleware
 * it will catch all the errors thrown by the application
 * and send a proper response to the client
 * @param err error object
 * @param req request object
 * @param res response object
 * @param next next function
 * @returns if headers are already sent, it will call next function. Otherwise, it will send a proper response to the client
 * @example
 * app.use(globalErrorHandleMiddleware);
 */
const globalErrorHandleMiddleware = (err, req, res, next) => {
    if (res.headersSent) {
        console.debug("Headers already sent, skipping global error handler");
        return next(err);
    }
    let errorResponse;
    // if the error is an instance of CustomError, it means that it is a known error
    // so we can send a proper response to the client
    if (err instanceof custom_error_1.CustomError) {
        console.debug("Error caught in global error handler: ", err);
        errorResponse = { errors: err.serializeErrors(), errorCode: err.errorCode };
        return res.status(err.statusCode).json(errorResponse);
    }
    errorResponse = {
        errors: [{ message: err.message || "Something went wrong" }],
        errorCode: error_codes_1.ErrorCode.INTERNAL_SERVER_ERROR,
    };
    console.error("Error caught in global error handler: ", errorResponse);
    return res.status(500).json(errorResponse);
};
exports.globalErrorHandleMiddleware = globalErrorHandleMiddleware;
