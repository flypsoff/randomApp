import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginWarn.module.css'

const LogginWarn = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.warnContainer}>
                <h3>You need login</h3>
            </div>
            <div>
                <p>
                    {children} <br /> Press <b><Link to='/login'>login</Link></b> if you wanna go to login page.
                </p>
                <p>
                    If you don't have an accout you can register, it's free :) <br />
                    Press <b><Link to='/registration'>registration</Link></b> if you wanna go to registration page.
                </p>
            </div>
        </div>
    )
}

export default LogginWarn