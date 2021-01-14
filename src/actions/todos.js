import * as types from './../constants'
import * as api from './../api/todosAPI'

export const logoutTodos = () => ({type: types.LOGOUT_TODOS})

export const setTodos = (payload) => ({type: types.SET_TODOS, payload})
export const setTodosThunk = () => async dispatch => {
    try {
        const res = await api.getCurrentTodosAPI()
        dispatch(setTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const currentTodo = (payload) => ({type: types.CURRENT_TODO_VALUE, payload})

export const addTodo = (payload) => ({type: types.ADD_TODO, payload})
export const addTodoThunk = (currentTodo) => async dispatch => {
    try {
        const res = await api.addTodosAPI(currentTodo)
        dispatch(addTodo(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const completeTodos = (payload) => ({type: types.COMPLETE_TODO, payload})
export const completeTodoThunk = (id) => async dispatch => {
    try {
        const res = await api.addCompletedTodosAPI(id)
        dispatch(completeTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const setCompletedTodosThunk = () => async dispatch => {
    try {
        const res = await api.getCompletedTodosAPI()
        dispatch(setTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteCompletedTodos = (payload) => ({type: types.DELETE_COMPLETED_TODO, payload})
export const deleteCompletedTodosThunk = (id) => async dispatch => {
    try {
        const res = await api.deleteCompletedTodosAPI(id)
        dispatch(deleteCompletedTodos(res.data.deletedTodos))
    } catch (e) {
        // console.log(e.response.data.message)
    }
}