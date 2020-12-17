import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getItemAPI = (path) => {
    return instance.get(path)
}

export const postContactUsAPI = (path, name, email, title, message) => {
    return instance.post(path, {name, email, title, message})
}