import { ErrorCode } from "./error-codes";
/**
 * this is a response error format class
 * it is used to send a proper response to the client
 * @param errors array of errors
 * @param errorCode specific error code of the error
 * @example
 * const errorResponse = new ResponseErrorFormat([{ message: "error message" }], ErrorCode.INTERNAL_SERVER_ERROR);
 */
declare class ResponseErrorFormat {
    errors: {
        message: string;
        field?: string;
    }[];
    errorCode: ErrorCode;
    constructor(errors: {
        message: string;
        field?: string;
    }[], errorCode: ErrorCode);
}
export { ResponseErrorFormat };
//# sourceMappingURL=response-error-format.d.ts.map