/**
 * Error codes for the application.
 * These error codes are used to identify the error application specific type.
 * @enum {string}
 */
enum ErrorCode {
    ROUTE_NOT_FOUND = "ROUTE_NOT_FOUND",
    INVALID_URL = "INVALID_URL",

    UNAUTHORIZED_ACCESS = "UNAUTHORIZED_ACCESS",
    EMAIL_NOT_VERIFIED = "EMAIL_NOT_VERIFIED",

    STUDENT_ALREADY_EXISTS_IN_DB = "STUDENT_ALREADY_EXISTS_IN_DB",

    GROUP_NOT_FOUND = "GROUP_NOT_FOUND",

    AWS_SES_ERROR = "AWS_SES_ERROR",

    UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",

    /** axios error codes */
    ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS",
    ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE",
    ERR_BAD_OPTION = "ERR_BAD_OPTION",
    ERR_NETWORK = "ERR_NETWORK",
    ERR_DEPRECATED = "ERR_DEPRECATED",
    ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE",
    ERR_BAD_REQUEST = "ERR_BAD_REQUEST",
    ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT",
    ERR_INVALID_URL = "ERR_INVALID_URL",
    ERR_CANCELED = "ERR_CANCELED",
    ECONNABORTED = "ECONNABORTED",
    ETIMEDOUT = "ETIMEDOUT",
}

export {
    ErrorCode
};
