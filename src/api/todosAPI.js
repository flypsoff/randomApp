import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/todos'
})

export const getCurrentTodosAPI = (email) => {
    return api.post('/current', {email})
}

export const getCompletedTodosAPI = (email) => {
    return api.post('/completed', {email})
}