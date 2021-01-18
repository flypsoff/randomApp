import {
    SET_USER,
    LOGOUT,
    CNANGE_FIELD
} from '../constants'

let initialState = {
    currentUser: {},
    isAuth: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case CNANGE_FIELD:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    [action.field]: action.payload
                }
            }
        default:
            return state
    }
}

export default user