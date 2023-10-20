import { NextFunction, Request, Response } from "express";
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
declare const unhandledRouteMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export { unhandledRouteMiddleware };
//# sourceMappingURL=unhandled-route-middleware.d.ts.map