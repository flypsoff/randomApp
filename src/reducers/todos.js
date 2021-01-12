import { nanoid } from 'nanoid'
import {
    SET_CURRENT_TODOS,
    CURRENT_TODO,
    ADD_TODO,
    SET_COMPLETED_TODOS,
    DELETE_ALL_TODOS
} from './../constants'

let initialTodosState = {
    currentTodoValue: '',
    currentTodos: [],
    completedTodos: []
}

const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let lastId = nanoid(5)
            return {
                ...state,
                currentTodos: [
                    {
                        title: action.todo,
                        completed: false,
                        id: lastId
                    },
                    ...state.currentTodos
                ]
            }
        case CURRENT_TODO:
            return {
                ...state,
                currentTodoValue: action.todo
            }
        case SET_CURRENT_TODOS:
            return {
                ...state,
                currentTodos: [...action.current]
            }
        case SET_COMPLETED_TODOS:
            return {
                ...state,
                completedTodos: [...action.completed]
            }
        case DELETE_ALL_TODOS: 
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