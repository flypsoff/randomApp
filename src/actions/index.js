import * as types from './../constants'
import { getItemAPI } from './../api/api'

export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: types.ADD_TODO, title})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})
export const deleteAllTodo = () => ({type: types.DELETE_ALL_TODO})


//thunk

