import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <ul className={styles.navItems}>
            <NavLink to='/'>
                <li>Home</li>
            </NavLink>
            <NavLink to='/todo'>
                <li>Todo</li>
            </NavLink>
            <NavLink to='/shop'>
                <li>Shop</li>
            </NavLink>
            <NavLink to='/other'>
                <li>Other</li>
            </NavLink>
        </ul>
    )
}

export default Navbar