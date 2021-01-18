import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = ({ isAuth }) => {
    return (
        <ul className={styles.navItems}>
            <NavLink to='/'>
                <li>Home</li>
            </NavLink>
            <NavLink to='/shop'>
                <li>Shop</li>
            </NavLink>
            <NavLink to='/todos'>
                <li>Todo</li>
            </NavLink>
            {
                isAuth 
                ? <NavLink to='/account'><li>My account</li></NavLink> 
                : <NavLink to='/login'><li>My account</li></NavLink> 
            }

        </ul>
    )
}

export default Navbar