import axios from 'axios'
import { nanoid } from 'nanoid'

const api = axios.create({
    baseURL: 'http://localhost:3333/todos'
})

export const getCurrentTodosAPI = () => {
    return api.get('/current', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
}

export const getDeletedTodosAPI = () => {
    return api.get('/deleted', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
}

export const addTodosAPI = (currentTodo) => {
    let id = nanoid(5)
    const todo = {
        title: currentTodo,
        completed: false,
        id: id
    }
    return api.patch('/current', {todo}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}

export const addDeleteTodosAPI = (id) => {
    return api.patch('/delete', {id}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}

export const deleteDeletedTodosAPI = (id) => {
    return api.patch('/deleted/delete', {id}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}

export const changeCompleteTodosAPI = (checked, id) => {
    return api.patch('/current/change', {checked, id}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}