import { CustomError } from "../custom-error";
import { ErrorCode } from "../error-codes";
/**
 * this is a custom error class for route not found exception
 * @extends CustomError
 */
declare class RouteNotFoundException extends CustomError {
    statusCode: number;
    errorCode: ErrorCode;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
export { RouteNotFoundException };
//# sourceMappingURL=route-not-found-exception.d.ts.map