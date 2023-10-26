/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from "express";

import {UnauthorizeAccessException} from "../errors/custom_exceptions/unauthorize-access-exception";

/**
 * this is middleware to check the user is authorized or not
 * it will check the currentUser property of the request object
 * @param req the request object
 * @param res the response object
 * @param next the next function
 * @returns the next function if the request is authorized
 * @throws UnauthorizeAccessException if the authorization header is not defined
 */
const requireAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser || !req.currentUser.active) {
        return next(new UnauthorizeAccessException());
    }

    next();
};

export {
    requireAuthMiddleware
};
