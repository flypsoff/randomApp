import {
    GET_BRANDS,
    GET_CARS,
    SHOP_LOADING_START,
    SHOP_LOADING_FINISH,
    GET_CURRENT_CAR,
    GET_CURRENT_CAR_ERROR
} from '../constants'

let initialShopState = {
    brands: [],
    cars: [],
    currentCar: {},
    currentCarError: {
        title: '',
        message: ''
    },
    loading: false
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
                currentCar: {...action.currentCar},
                currentCarError: {title: '', message: ''}
            }
        case GET_CURRENT_CAR_ERROR:
            return {
                ...state,
                currentCarError: action.error
            }
        default:
            return state
    }
}
 
export default shops