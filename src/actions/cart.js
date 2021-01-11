import {
    ADD_TO_SHOPPING_CART,
    DELETE_WITH_SHOPPING_CART
} from './../constants'


export const addToShoppingCart = (shoppingCart) => ({type: ADD_TO_SHOPPING_CART, shoppingCart})
export const deleteWithShoppingCart = (carID) => ({type: DELETE_WITH_SHOPPING_CART, carID})