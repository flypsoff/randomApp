import React from "react"
import styles from './Login.module.css'

import { InputRender } from '../../commons/FormsControl/FormsControl';
import { reduxForm, Field } from 'redux-form'
import { Link } from "react-router-dom";

const Login = ({ handleSubmit, errorMessage, submitting}) => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <div>Login</div>
                <form onSubmit={handleSubmit}>
                    <Field name='email' component={InputRender} type='text' placeholder='email' />
                    <Field name='password' component={InputRender} type='password' placeholder='password' />
                    <button disabled={submitting}>Login</button>
                </form>
                <p style={{color: 'darkred'}}>{errorMessage ? errorMessage : ''}</p>
            </div>
            <div>
                <h3>
                    If you don't have an account you can register now!
                </h3>
                <Link to={'/registration'}>Registration</Link>
            </div>
        </div>

    )
}

export default reduxForm({ form: 'login' })(Login)