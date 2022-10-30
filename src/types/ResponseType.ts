import ErrorResponseType from "./ErrorResponseType"


export interface ResponseType<T> {
    success: boolean,
    data?: {
        items: T[]
        limit?: number
        offset?: number
        totalPage: number
        item: T
        total: number
    },
    error?: ErrorResponseType
}