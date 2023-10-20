import { NextFunction, Request, Response } from "express";
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
declare const globalErrorHandleMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export { globalErrorHandleMiddleware };
//# sourceMappingURL=global-error-handle-middleware.d.ts.map