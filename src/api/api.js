import axios from 'axios'

const localAPI = axios.create({
    baseURL: 'http://localhost:3333/api/'
})

export const getDetailAPI = (path) => {
    return localAPI.get(path)
}

export const getCarAPI = (id) => {
    return localAPI.get(`car/${id}`)
}

const authAPI = axios.create({
    baseURL: 'http://localhost:3333/auth/'
})

export const registrationAPI = (body) => {
    return authAPI.post('registration', body)
}

export const loginAPI = (body) => {
    return authAPI.post('login', body)
}

export const authorizationAPI = () => {
    return authAPI.get('authorization', {
        headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
}