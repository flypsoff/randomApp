import axios from 'axios'
import { nanoid } from 'nanoid'

const api = axios.create({
    baseURL: 'http://localhost:3333/todos',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export const getCurrentTodosAPI = () => {
    return api.get('/current')
}

export const getCompletedTodosAPI = () => {
    return api.get('/completed')
}

export const addCurrentTodosAPI = (currentTodo) => {
    let lastId = nanoid(5)
    const todo = {
        title: currentTodo,
        completed: false,
        id: lastId
    }
    return api.patch('/current/add', {todo})
}

export const addCompletedTodosAPI = (id) => {
    return api.patch('/completed/add', {id})
}

export const deleteCompletedTodosAPI = (id) => {
    return api.patch('/completed/delete', {id})
}