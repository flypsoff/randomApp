import {
    CNANGE_FIELD,
    ADD_POST
} from './../constants'

import {
    changeAPI,
    changeEmailAPI,
    changePasswordAPI,
    deleteAccountAPI
} from './../api/accountAPI'

import {
    startLoading,
    endLoading
} from './loading'
import { logout } from './users'

export const changeField = (payload, field) => ({ type: CNANGE_FIELD, payload, field })
export const changeFieldThunk = (field, state) => async dispatch => {
    try {
        dispatch(startLoading())
        const res = await changeAPI(field, state)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    } finally {
        dispatch(endLoading())
    }
}

export const changeEmailThunk = (field, email, pass) => async dispatch => {
    try {
        dispatch(startLoading())
        const res = await changeEmailAPI(email, pass)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    } finally {
        dispatch(endLoading())
    }
}

export const changePasswordThunk = (field, newPassword, oldPassword) => async dispatch => {
    try {
        dispatch(startLoading())
        const res = await changePasswordAPI(newPassword, oldPassword)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    } finally {
        dispatch(endLoading())
    }
}

export const deleteAccountThunk = () => async (dispatch) => {
    try {
        const res = await deleteAccountAPI()
        dispatch(logout())
        return { message: res.data.message }
    } catch (e) {
        console.log(e.response.data.message)
    }

}

export const addPost = (payload) => ({ type: ADD_POST, payload})