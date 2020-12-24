import {
    GET_BRANDS,
    GET_CARS,
} from '../constants'

let initialShopState = {
    brands: [],
    cars: [],
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
        default:
            return state
    }
}
 
export default shops