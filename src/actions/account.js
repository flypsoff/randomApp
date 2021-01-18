import {
    CNANGE_FIELD
} from './../constants'

import {
    changeAPI,
    changeEmailAPI,
    changePasswordAPI
} from './../api/accountAPI'

export const changeField = (payload, field) => ({ type: CNANGE_FIELD, payload, field })
export const changeFieldThunk = (field, state) => async dispatch => {
    try {
        const res = await changeAPI(field, state)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    }
}

export const changeEmailThunk = (field, email, pass) => async dispatch => {
    try {
        const res = await changeEmailAPI(email, pass)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    }
}

export const changePasswordThunk = (field, newPassword, oldPassword) => async dispatch => {
    try {
        const res = await changePasswordAPI(newPassword, oldPassword)
        dispatch(changeField(res.data.value, field))
        return { message: 'Updated successfully'}
    } catch (e) {
        return {
            message: e.response.data.message, 
            errors: e.response.data.error
        }
    }
}
