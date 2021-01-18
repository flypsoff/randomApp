import React from 'react'
import Email from './Email'
import Password from './Password'
import styles from './Security.module.css'

const Security = ({ email, onChangeEmailField, onChangePasswordField, handleLogout }) => {
    return (
        <div className={styles.userSecutiry}>
            <div className={styles.item}>
                <h3>Account security settings</h3>
            </div>
            <div className={styles.item}>
                <Email email={email} onChangeEmailField={onChangeEmailField} handleLogout={handleLogout}/>
            </div>
            <div className={styles.item}>
                <Password onChangePasswordField={onChangePasswordField} handleLogout={handleLogout}/>
            </div>
        </div>
    )
}

export default Security