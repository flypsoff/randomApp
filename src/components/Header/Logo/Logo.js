import React from 'react'
import { useSelector } from 'react-redux';
import styles from './Logo.module.css'

const Logo = (props) => {
    const name = useSelector(state => state.user.currentUser.name) 
    
    return (
        <div className={styles.logoContainer}> 
            <span className={styles.logo}><b>Logo</b></span>
            <br />
            {
              name ? <small className={styles.logedIn}>Welcome {name}</small>
                : <small>Welcome Guest</small>
            }
            
        </div>
    )
}

export default Logo