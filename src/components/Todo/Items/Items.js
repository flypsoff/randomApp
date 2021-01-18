import React from 'react'
import styles from './Items.module.css'

const Items = ({todos, isAuth, onDeleteTodo, handleCheckbox}) => {

    const handleClick = (id) => {
        onDeleteTodo(id)
    }

    return (
        <div>
            {isAuth && todos && todos.map((item) => (
                <div className={styles.itemsContainer} 
                    key={item.id}>
                    <input type='checkbox' onChange={(e) => handleCheckbox(e.target.checked, item.id)} checked={item.completed}/>
                    <span className={item.completed ? styles.isCompleted : styles.isNotCompleted}>
                        {item.title}
                    </span>
                    <button onClick={() => handleClick(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Items