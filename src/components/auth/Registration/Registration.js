import React from "react";
import styles from './Registration.module.css'

import { InputRender } from '../../commons/FormsControl/FormsControl';
import { reduxForm, Field } from 'redux-form'
import { Link } from "react-router-dom";

const Registration = ({ handleSubmit, errorMessage}) => {
    return (
        <div className={styles.mainConatiner}>
            <div>
                <div>Registration</div>
                <form onSubmit={handleSubmit}>
                    <Field name='email' component={InputRender} type='text' placeholder='email' />
                    <Field name='password' component={InputRender} type='password' placeholder='password' />
                    <Field name='name' component={InputRender} type='text' placeholder='name' />
                    <Field name='age' component={InputRender} type='text' placeholder='age' />
                    <Field name='country' component={InputRender} type='text' placeholder='country' />
                    <button>Registration</button>
                </form>
                <ul style={{color: 'darkred'}}>
                    {
                        !(errorMessage.length > 0) ? ''
                        : errorMessage.map((item, index) => <li key={`${item}_${index}`}>{item}</li>)
                    }
                </ul>
            </div>
            <div>
                <h3>
                    If you have an account you can log in!
                </h3>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
    )
}

export default reduxForm({ form: 'registration' })(Registration)