import { Add_To_Cart } from "../contant"
import { Remove_To_Cart } from "../contant"
export const addToCart = (data) => {
    return {
        type: Add_To_Cart,
        data: data
    }
}
export const removeToCart = (data) => {
    return {
        type: Remove_To_Cart,
    }
}