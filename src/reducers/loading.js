import {
    START_LOADING,
    END_LOADING
} from '../constants'

let initialState = {
    isLoading: false
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case END_LOADING: 
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default loading