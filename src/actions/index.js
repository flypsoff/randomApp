import * as types from './../constants'

export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (text) => ({type: types.ADD_TODO, text})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})