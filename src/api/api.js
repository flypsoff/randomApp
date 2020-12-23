import axios from 'axios'

const jsonAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getItemAPI = (path) => {
    return jsonAPI.get(path)
}

export const postContactUsAPI = (path, name, email, title, message) => {
    return jsonAPI.post(path, {name, email, title, message})
}


const localAPI = axios.create({
    baseURL: 'http://localhost:3333/api/'
})

export const getCarsAPI = (path) => {
    return localAPI.get(path)
}
