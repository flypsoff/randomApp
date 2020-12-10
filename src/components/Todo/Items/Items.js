import React from 'react'
import styles from './Items.module.css'

const Items = (props) => {
    const handleTodoChangeCheckbox = (key) => {
        props.onTodoChecked(key)
    }

    return (
        <div>
            {props.todos.map((item) => (
                <div className={styles.itemsContainer} 
                    key={item.id}>
                    <span style={item.completed ? {textDecoration:'line-through'} : {textDecoration:'none'}}>
                        {item.title}
                    </span>
                    <input type='checkbox' checked={item.completed} onChange={() => handleTodoChangeCheckbox(item.id)}/>
                    <button onClick={() => props.onDeleteTodo(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Items