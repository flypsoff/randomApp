import {
    GET_CARS_BRANDS,
    GET_CURRENT_BRAND,
} from '../constants'

let initialShopState = {
    brands: [],
    cars: [],
}

const shops = (state = initialShopState, action) => {
    switch (action.type) {
        case GET_CARS_BRANDS:
            return {
                brands: action.brands,
                cars: action.cars
            }
        case GET_CURRENT_BRAND:
            return {
                ...state,
                cars: action.cars
            }
        default:
            return state
    }
}
 
export default shops