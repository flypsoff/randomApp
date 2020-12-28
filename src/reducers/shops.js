import {
    GET_BRANDS,
    GET_CARS,
    SHOP_LOADING_START,
    SHOP_LOADING_FINISH,
    GET_CURRENT_CAR,
    ADD_TO_SHOPPING_CART
} from '../constants'

let initialShopState = {
    brands: [],
    cars: [],
    currentCar: {},
    loading: false,
    shoppingCart: [],
    shoppingCartId : []
}

const shops = (state = initialShopState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case GET_BRANDS:
            return {
                ...state,
                brands: action.brands
            }
        case SHOP_LOADING_START:
            return {
                ...state,
                currentCar: {},
                loading: true
            }
        case SHOP_LOADING_FINISH:
            return {
                ...state,
                loading: false
            }
        case GET_CURRENT_CAR:
            return {
                ...state,
                currentCar: { ...action.currentCar }
            }
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: [
                    action.shoppingCart,
                    ...state.shoppingCart
                ],
                shoppingCartId: [
                    action.shoppingCart.carID,
                    ...state.shoppingCartId
                ]
            }
        default:
            return state
    }
}

export default shops