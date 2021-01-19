import {
    GET_CARS,
    GET_BRANDS
} from '../constants'

let initialState = {
    cars: [],
    brands: []
}

const shop = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default shop