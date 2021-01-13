import * as types from './../constants'

let initialTodosState = {
    currentTodoValue: '',
    currentTodos: [],
    completedTodos: []
}

const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case types.DELETE_COMPLETED_TODO: 
            return {
                ...state,
                completedTodos: [
                    ...action.newCompletedTodos
                ]
            }
        case types.ADD_COMPLETED_TODO:
            return {
                ...state,
                currentTodos: [
                    ...action.newCurrentTodos
                ]
            }
        case types.ADD_CURRENT_TODO: 
            return {
                ...state,
                currentTodos: [
                    action.todo,
                    ...state.currentTodos
                ]
            }
        case types.CURRENT_TODO:
            return {
                ...state,
                currentTodoValue: action.todo
            }
        case types.SET_CURRENT_TODOS:
            return {
                ...state,
                currentTodos: [...action.current]
            }
        case types.SET_COMPLETED_TODOS:
            return {
                ...state,
                completedTodos: [...action.completed]
            }
        case types.DELETE_ALL_TODOS: 
            return {
                ...state,
                currentTodos: [],
                completedTodos: []
            }
        default:
            return state
    }
}

export default todos