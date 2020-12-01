import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <p className={styles.logoHeight}> 
            <span className={styles.logo}><b>Logo</b></span>
            <br />
            <small>Welcome Vlad</small>
        </p>
    )
}

export default Logo