import React, { useRef } from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../../../actions/cars'


const Navbar = ({ isAuth }) => {

    const dispatch = useDispatch()
    const filterRef = useRef(useSelector(state => state.cars.filter))
    
    const handleClick = () => {
        dispatch(resetFilter(filterRef.current))
    }

    return (
        <ul className={styles.navItems}>
            <NavLink to='/'>
                <li>Home</li>
            </NavLink>
            <NavLink to='/cars' onClick={handleClick}>
                <li>Cars</li>
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