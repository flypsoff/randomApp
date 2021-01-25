import React, { useRef, useState } from 'react'
import AccountChange from '../../../commons/AccountChange/AccountChange'
import styles from '../Fields/Def.module.css'

const Password = (props) => {
    const oldPassword = useRef('')
    const newPassword = useRef('')

    const [errorMessage, setErrorMessage] = useState([])


    const clearState = () => {
        oldPassword.current.value = ''
        newPassword.current.value = ''
        setErrorMessage('')
    }

    const handleClick = async () => {
        const res = await props.onChangePasswordField('password', newPassword.current.value, oldPassword.current.value)
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
                password
            </div>
            <AccountChange act='Change password' clearState={clearState} buttonName='Change'>
                <label>Enter new password</label>
                <div className={styles.form}>
                    <input type='password' placeholder='new password' ref={newPassword} />
                </div>
                <label>Enter current password:</label>
                <div className={styles.form}>
                    <input type='password' placeholder='current password' ref={oldPassword} />
                </div>
                <ul style={{color: 'darkred'}}>
                {errorMessage && errorMessage.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={handleClick} disabled={props.isLoading}>Submit</button>
            </AccountChange>
        </>
    )
}

export default Password