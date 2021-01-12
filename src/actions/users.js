import {
    SET_USER,
    LOGOUT
} from './../constants'

import {
    authorizationAPI,
    loginAPI
} from './../api/api'

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const setUserThunk = (user) => async dispatch => {
    try {
        const result = await loginAPI(user)
        dispatch(setUser(result.data.user))
        localStorage.setItem('token', result.data.token)
    } catch (error) {
        return (error.response.data.message)
    }
}

export const logout = () => ({ type: LOGOUT })

export const authorization = () => async dispatch => {
    try {
        const response = await authorizationAPI()
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } catch (e) {
        console.log(e.response.data.message)
        localStorage.removeItem('token')
    }
}
