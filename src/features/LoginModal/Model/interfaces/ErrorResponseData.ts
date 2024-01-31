export interface ErrorResponseData {
    message: string; // string | string[] on backend
    error: string;
    statusCode: number;
}

export type LoginByUsernameError = ErrorResponseData['message'];
