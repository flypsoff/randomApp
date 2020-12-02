import {CHANGE_TODO_VALUE} from '../constants'

let initialState = ''

const todoValue = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TODO_VALUE: 
            return state = action.currentValue
        default :
            return state
    }
}

export default todoValue