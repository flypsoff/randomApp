import { useState } from 'react';
import { connect } from 'react-redux'

import Login from '../components/auth/Login/Login'
import { setUserThunk } from "../actions/users"

const LoginContainer = (props) => {

    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async (value) => {
        const response = await props.onSetUser(value)
        if(response) {
            setErrorMessage(response)
        }
    }
      
    return (
        <Login onSubmit={handleSubmit} errorMessage={errorMessage}/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSetUser: (user) => dispatch(setUserThunk(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer)