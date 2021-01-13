import React from 'react'
import styles from './Items.module.css'

const Items = ({todos, isAuth, onAddCompletedTodo}) => {

    const handleClick = (id) => {
        onAddCompletedTodo(id)
    }

    return (
        <div>
            {isAuth && todos && todos.map((item) => (
                <div className={styles.itemsContainer} 
                    key={item.id}>
                    <span style={item.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                        {item.title}
                    </span>
                    <button onClick={() => handleClick(item.id)}>Complete</button>
                </div>
            ))}
        </div>
    )
}

export default Items