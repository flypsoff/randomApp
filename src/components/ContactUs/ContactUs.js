import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { InputRender, TextareaRender } from '../commons/FormsControl/FormsControl';
import { required, maxLengthCreator, invalidEmail } from './../../utils/validators'
import styles from './ContactUs.module.css'

const maxLength20 = maxLengthCreator(20);
const maxLength50 = maxLengthCreator(50);
const maxLength500 = maxLengthCreator(500);

const ContactUs = (props) => {
    return (
        <div className={styles.mainForm}>
            <div className={styles.message}>
                <h1>If you have a question just send it to us :)</h1>
            </div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name='name'
                    component={InputRender}
                    type='text'
                    validate={[required, maxLength20]}
                    label='Name'
                />
                <Field
                    name='e-mail'
                    component={InputRender}
                    type='email'
                    validate={[required, maxLength50, invalidEmail]}
                    label='E-mail'
                />
                <Field
                    name='title'
                    component={InputRender}
                    type='text'
                    validate={[required, maxLength50]}
                    label='Title'
                />
                <Field
                    name='message'
                    component={TextareaRender}
                    validate={[required, maxLength500]}
                    label='Message'
                />
                <div>
                    <button type='submit' disabled={props.submitting || props.pristine}>
                        Send
                    </button>
                    <button type='button' disabled={props.submitting || props.pristine} onClick={() => props.handleReset(props.reset)}>
                        Clear all field
                    </button>
                </div>
            </form>
            <h3>
                {props.state
                ? `Your message was registred by id ${props.state}. We'll response on your email.` 
                : ''}
            </h3>
        </div>
    )
}


export default reduxForm({ form: 'contactUs' })(ContactUs)