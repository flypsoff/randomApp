import * as types from './../constants'

export const todoValue = (currentValue) => ({type: types.CHANGE_TODO_VALUE, currentValue})
export const addTodo = (text) => ({type: types.ADD_TODO, text})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})