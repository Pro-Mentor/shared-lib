"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unhandledRouteMiddleware = void 0;
const route_not_found_exception_1 = require("../errors/custom_exceptions/route-not-found-exception");
/**
 * this is a middleware to handle unhandled routes
 * it will throw a RouteNotFoundException
 * @param req request object
 * @param res response object
 * @param next next function
 * @returns throws a RouteNotFoundException
 * @example
 * app.use(unhandledRouteMiddleware);
 */
const unhandledRouteMiddleware = (req, res, next) => {
    return next(new route_not_found_exception_1.RouteNotFoundException());
};
exports.unhandledRouteMiddleware = unhandledRouteMiddleware;
