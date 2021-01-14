import * as types from './../constants'

let initialTodosState = {
    currentTodoValue: '',
    todos: []
}

const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case types.DELETE_COMPLETED_TODO: 
        case types.COMPLETE_TODO:
        case types.SET_TODOS:
        case types.ADD_TODO: 
            return {
                ...state,
                todos: action.payload
            }
        case types.CURRENT_TODO_VALUE:
            return {
                ...state,
                currentTodoValue: action.payload
            }
        case types.LOGOUT_TODOS:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}

export default todos