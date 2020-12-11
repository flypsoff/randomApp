import * as types from './../constants'
import axios from 'axios'

export const changeCurrentTodoValue = (currentValue) => ({type: types.CHANGE_CURRENT_TODO_VALUE, currentValue})
export const addTodo = (title) => ({type: types.ADD_TODO, title})
export const todoChecked = (idItem) => ({type: types.CHANGE_TODO_CHECKBOX, idItem})
export const deleteTodo = (key) => ({type: types.DELETE_TODO, key})
export const deleteAllTodo = () => ({type: types.DELETE_ALL_TODO})

export const getItems = (page, limit) => (dispatch) => {
        dispatch(getItemsStarted())

    axios
        .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
        .then(data => data.data)
        .then(result => dispatch(getItemsSuccess(result)))
        .catch(err => dispatch(getItemsError(err)))
}

export const getItemsStarted = () => ({type: types.GET_ITEMS_STARTED})
export const getItemsSuccess = (payload) => ({type: types.GET_ITEMS_SUCCESS, payload})
export const getItemsError = (error) => ({type: types.GET_ITEMS_ERROR, error})

