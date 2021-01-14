import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cases.module.css'


const Cases = (props) => {
    return (
        <div className={styles.casesContainer}>
            <NavLink to={`/todos/completed`}>
                <button>To completed</button>
            </NavLink>
            <button >Complete all</button>
        </div>
    )
}

export default Cases