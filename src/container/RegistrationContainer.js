import { useState } from 'react'
import { reset } from 'redux-form'

import { registrationAPI } from '../api/authAPI'
import Registration from '../components/auth/Registration/Registration'

const RegistrationContainer = (props) => {

    const [errorMessage, setErrorMessage] = useState([])

    const handleRegistration = async (value, dispatch) => {
        try {
            const result = await registrationAPI(value)
            const message = result.data.message
            alert(message)
            dispatch(reset('registration'))
        } catch (error) {
            const errors = error.response.data.errors.errors
            setErrorMessage(errors.map(item => item.msg))
        }
    }

    return (
        <Registration onSubmit={handleRegistration} errorMessage={errorMessage}/>
    )
}

export default RegistrationContainer