import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "./constant"

export const addToCompare = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_COMPARE,
        data: data,
        payload:data,
    }
}

export const removeToCompare = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_COMPARE,
        data: data,
        payload:data,
    }
}