import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cases.module.css'


const Cases = (props) => {
    return (
        <div className={styles.casesContainer}>
            <NavLink to={`/todos/deleted`}>
                <button>To deleted</button>
            </NavLink>
        </div>
    )
}

export default Cases