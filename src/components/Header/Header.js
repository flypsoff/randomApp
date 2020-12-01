import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header