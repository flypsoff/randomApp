import React from 'react'
import styles from './Deleted.module.css'

const Deleted = ({deletedTodos, isAuth, onDeleteDeletedTodos}) => {
    const handleClick = (id) => {
        onDeleteDeletedTodos(id)
    }

    return (
        <div className={styles.mainDeletedContainer}>
            {isAuth && deletedTodos && deletedTodos.map(item => (
                <div key={item.id} className={styles.deletedContainer}>
                    <span className={styles.textSpan} style={item.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                        {item.title}
                    </span>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Deleted