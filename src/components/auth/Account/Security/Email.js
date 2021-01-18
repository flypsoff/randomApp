import React, { useRef, useState } from 'react'
import AccountChange from '../../../commons/AccountChange/AccountChange'
import styles from '../Fields/Def.module.css'

const Email = (props) => {
    const [email, setEmail] = useState('')

    const resPassword = useRef('')

    const [errorMessage, setErrorMessage] = useState([])

    const clearState = () => {
        setEmail('')
        resPassword.current.value = ''
        setErrorMessage('')
    }

    const handleClick = async () => {
        const res = await props.onChangeEmailField('email', email, resPassword.current.value)
        alert(res.message)
        if(res.errors) {
            setErrorMessage(res.errors)
        } else {    
            clearState()
            props.handleLogout()
        }
    }

    return (
        <>
            <div>
            email: {props.email}
            </div>
            <AccountChange change='field' clearState={clearState}>
                <label>Enter new email:</label>
                <div className={styles.form}>
                    <input type='text' placeholder='email'
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <label>Enter your password</label>
                <div className={styles.form}>
                    <input type='password' placeholder='password' ref={resPassword}/>
                </div>
                <ul style={{color: 'darkred'}}>
                {errorMessage && errorMessage.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={handleClick}>Submit</button>
            </AccountChange>
        </>
    )
}

export default Email