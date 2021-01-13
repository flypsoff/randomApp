import * as types from './../constants'
import * as api from './../api/todosAPI'

export const setCurrentTodos = (current) => ({type: types.SET_CURRENT_TODOS, current})
export const setCompletedTodos = (completed) => ({type: types.SET_COMPLETED_TODOS, completed})

export const currentTodo = (todo) => ({type: types.CURRENT_TODO, todo})

export const addCurrentTodo = (todo) => ({type: types.ADD_CURRENT_TODO, todo})
export const addCurrentTodoThunk = (currentTodo) => async dispatch => {
    try {
        const res = await api.addCurrentTodosAPI(currentTodo)
        const todo = res.data.todo
        dispatch(addCurrentTodo(todo))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const addCompletedTodos = (deleted, newCurrentTodos) => ({type: types.ADD_COMPLETED_TODO, deleted, newCurrentTodos})
export const addCompletedTodoThunk = (id) => async dispatch => {
    try {
        const res = await api.addCompletedTodosAPI(id)
        dispatch(addCompletedTodos(res.data.deleted, res.data.newCurrentTodos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const setCurrentTodosThunk = () => async dispatch => {
    try {
        const res = await api.getCurrentTodosAPI()
        dispatch(setCurrentTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const setCompletedTodosThunk = () => async dispatch => {
    try {
        const res = await api.getCompletedTodosAPI()
        dispatch(setCompletedTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteAllTodos = () => ({type: types.DELETE_ALL_TODOS})

export const deleteCompletedTodos = (newCompletedTodos) => ({type: types.DELETE_COMPLETED_TODO, newCompletedTodos})
export const deleteCompletedTodosThunk = (id) => async dispatch => {
    try {
        const res = await api.deleteCompletedTodosAPI(id)
        dispatch(deleteCompletedTodos(res.data.newCompleted))
    } catch (e) {
        console.log(e.response.data.message)
    }
}