import React from 'react'
import styles from './Completed.module.css'

const Completed = ({todos, isAuth, onDeleteCompletedTodos}) => {
    const handleClick = (id) => {
        onDeleteCompletedTodos(id)
    }

    return (
        <div className={styles.mainCompletedContainer}>
            {isAuth && todos && todos.map(item => (
                <div key={item.id} className={styles.completedContainer}>
                    <span className={styles.textSpan}>{item.title}</span>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Completed