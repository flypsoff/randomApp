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

export const getCompletedTodosAPI = () => {
    return api.get('/completed', {
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

export const addCompletedTodosAPI = (id) => {
    return api.patch('/completed', {id}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}

export const deleteCompletedTodosAPI = (id) => {
    return api.patch('/completed/delete', {id}, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}