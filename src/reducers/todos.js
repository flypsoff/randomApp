import * as types from './../constants'

let initialTodosState = {
    currentTodoValue: '',
    todos: [],
    deletedTodos: []
}

const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case types.SET_DELETED_TODOS:
        case types.DELETE_DELETED_TODO:
            return {
                ...state,
                deletedTodos: action.payload
            }
        case types.CHANGE_COMPLETE:
        case types.DELETE_TODO:
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