import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/account'
})

export const changeAPI = (field, state) => {
    return api.patch(`/${field}`, {state}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
}

export const changeEmailAPI = (email, pass) => {
    return api.patch('/email', {email, pass}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
}

export const changePasswordAPI = (newPassword, oldPassword) => {
    return api.patch('/password', {newPassword, oldPassword}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
}