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

export const deleteTodos = (payload) => ({type: types.DELETE_TODO, payload})
export const deleteTodoThunk = (id) => async dispatch => {
    try {
        const res = await api.addDeleteTodosAPI(id)
        dispatch(deleteTodos(res.data.todos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}
export const setDeletedTodos = (payload) => ({type: types.SET_DELETED_TODOS, payload})
export const setDeletedTodosThunk = () => async dispatch => {
    try {
        const res = await api.getDeletedTodosAPI()
        dispatch(setDeletedTodos(res.data.deletedTodos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const deleteDeletedTodos = (payload) => ({type: types.DELETE_DELETED_TODO, payload})
export const deleteDeletedTodosThunk = (id) => async dispatch => {
    try {
        const res = await api.deleteDeletedTodosAPI(id)
        dispatch(deleteDeletedTodos(res.data.deletedTodos))
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export const changeComplete = (payload) => ({type: types.CHANGE_COMPLETE, payload})
export const changeCompleteThunk = (checked, id) => async dispatch => {
    try {
        const res = await api.changeCompleteTodosAPI(checked, id)
        dispatch(changeComplete(res.data.todos))
    } catch (error) {
        
    }
}