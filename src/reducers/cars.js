import {
    GET_CARS,
    GET_BRANDS,
    SET_FILTER,
    RESET_FILTER
} from '../constants'

let initialState = {
    cars: [],
    brands: [],
    filter: {
        brand: '',
        bodyType: '',
        carClass: '',
        fromYear: '',
        toYear: '',
        fromPrice: '',
        toPrice: ''
    }
}

const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case GET_BRANDS:
            return {
                ...state,
                brands: action.payload
            }
        case RESET_FILTER:
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}

export default cars