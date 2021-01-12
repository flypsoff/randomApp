import React from 'react'
import styles from './Completed.module.css'

const Completed = ({todos, isAuth}) => {
    return (
        <div className={styles.mainCompletedContainer}>
            {isAuth && todos && todos.map(item => (
                <div
                    key={item.id}
                    className={`${styles.completedContainer} 
                    ${item.completed ? styles.completedTodo : styles.nonCompletedTodo}`}>
                    <span className={styles.textSpan}>{item.title}</span>
                    <span className={styles.dateSpan}></span>
                </div>
            ))}
        </div>
    )
}

export default Completed