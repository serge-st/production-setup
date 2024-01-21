export interface ErrorResponseData {
    message: string | string[];
    error: string;
    statusCode: number;
}

export type LoginByUsernameError = ErrorResponseData['message'];
