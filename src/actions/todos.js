import {
    CHANGE_CURRENT_TODO_VALUE,
    ADD_TODO,
    CHANGE_TODO_CHECKBOX,
    DELETE_TODO,
    DELETE_ALL_TODO
} from './../constants'

export const changeCurrentTodoValue = (currentValue) => ({type:CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: ADD_TODO, title})
export const todoChecked = (idItem) => ({type:CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: DELETE_TODO, key})
export const deleteAllTodo = () => ({type: DELETE_ALL_TODO})
