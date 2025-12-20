
export class ApiResponse<T> {
    status: 'success' | 'error';
    message: string;
    data?: T;

    constructor(status: 'success' | 'error', message: string, data?: T) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static fromJson<T>(json: any, dataFactory?: (json: any) => T): ApiResponse<T> {
        return new ApiResponse<T>(
            json.status,
            json.message,
            json.data && dataFactory ? dataFactory(json.data) : json.data
        );
    }

    toJson(): any {
        return {
            status: this.status,
            message: this.message,
            data: this.data
        };
    }
}
