import { nanoid } from 'nanoid'
import {
    ADD_TODO,
    CHANGE_TODO_CHECKBOX,
    CHANGE_CURRENT_TODO_VALUE,
    DELETE_TODO,
    DELETE_ALL_TODO
} from './../constants'

let initialTodosState = {
    currentTodoValue: '',
    currentTodos: [
        { title: 'Hello Kitty', completed: false, id: 10002 },
        { title: 'Welcome to the party', completed: false, id: 10001 }
    ],
    deletedTodos: [
        { title: 'My name is deleted object', completed: false, id: 10000 }
    ]
}

const todos = (state = initialTodosState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let lastId = nanoid(5)

            return ({
                ...state,
                currentTodos: [
                    {
                        title: action.title,
                        completed: false,
                        id: lastId
                    },
                    ...state.currentTodos
                ]
            })
            
        case CHANGE_TODO_CHECKBOX:
            let newState = state.currentTodos.map(item => {
                if (item.id === action.idItem) {
                    item.completed = !item.completed
                }
                return item
            })
            return ({
                ...state,
                currentTodos: [
                    ...newState
                ]
            })
        case CHANGE_CURRENT_TODO_VALUE:
            return ({
                ...state,
                currentTodoValue: action.currentValue
            })
        case DELETE_TODO:
            let [ deletedTodo ] = state.currentTodos.filter(item => item.id === action.key)
            return ({
                ...state,
                currentTodos: [...state.currentTodos.filter(item => item.id !== deletedTodo.id)],
                deletedTodos: [
                    deletedTodo,
                    ...state.deletedTodos
                ]
            })
        case DELETE_ALL_TODO: 
            return ({
                ...state, 
                currentTodos: [],
                deletedTodos: [
                    ...state.currentTodos,
                    ...state.deletedTodos
                ]
            })
        default:
            return state
    }
}

export default todos