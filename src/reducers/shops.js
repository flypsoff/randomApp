import { GET_ITEMS_STARTED, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from '../constants'

let initialTodosState = {
    items: {
       data: [],
       loading: false,
       error: null
    }
   
}

const shops = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_ITEMS_STARTED:
            return {
                ...state,
                items: {
                    ...state.items,
                    loading: true
                }
            }
        case GET_ITEMS_SUCCESS: 
            return {
                ...state,
                items: {
                    ...state.items,
                    data: [
                        ...state.items.data,
                        ...action.payload
                    ],
                    loading: false
                }
            }
        case GET_ITEMS_ERROR: 
            return {
                ...state,
                items: {
                    ...state.items,
                    error: action.error,
                    loading: false
                }
            }
        default :
            return state
    }
}

export default shops