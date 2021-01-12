import {
    SET_CURRENT_TODOS,
    CURRENT_TODO,
    ADD_TODO,
    SET_COMPLETED_TODOS,
    DELETE_ALL_TODOS
} from './../constants'

import {
    getCurrentTodosAPI,
    getCompletedTodosAPI
} from './../api/todosAPI'

export const setCurrentTodos = (current) => ({type: SET_CURRENT_TODOS, current})
export const setCompletedTodos = (completed) => ({type: SET_COMPLETED_TODOS, completed})

export const currentTodo = (todo) => ({type: CURRENT_TODO, todo})
export const addTodo = (todo) => ({type: ADD_TODO, todo})

export const setCurrentTodosThunk = (email) => async dispatch => {
    try {
        const res = await getCurrentTodosAPI(email)
        dispatch(setCurrentTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const setCompletedTodosThunk = (email) => async dispatch => {
    try {
        const res = await getCompletedTodosAPI(email)
        dispatch(setCompletedTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteAllTodos = () => ({type: DELETE_ALL_TODOS})