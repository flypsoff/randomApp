import {
    SET_USER,
    LOGOUT,
    CNANGE_FIELD,
    ADD_POST
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
        case ADD_POST:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    posts: [
                        action.payload,
                        ...state.currentUser.posts
                    ]
                }
            }
        default:
            return state
    }
}

export default user