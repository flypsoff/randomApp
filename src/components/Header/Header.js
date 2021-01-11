import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

const Header = ({isAuth}) => {
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <Navbar isAuth={isAuth}/>
        </div>
    )
}

export default Header