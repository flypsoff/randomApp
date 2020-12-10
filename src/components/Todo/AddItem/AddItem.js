import React from 'react'
import styles from './AddItem.module.css'
import { NavLink } from 'react-router-dom'

const AddItem = ({onChangeCurrentTodoValue, onAddTodo, currentTodoValue, onDeleteAllTodo}) => {

    const handleTodoClick = () => {
        if(currentTodoValue.trim() !== '') {
            onAddTodo(currentTodoValue)
        }
        onChangeCurrentTodoValue('')
    }
    
    return (
        <div className={styles.addItemContainer}>
            <div className={styles.history}>
                <NavLink to={`/todo/history`}>
                    <button>To history!</button>
                </NavLink>
                <button onClick={() => onDeleteAllTodo()}>Delete all</button>
            </div>
            <br />
            <textarea maxLength="200" onChange={(e) => onChangeCurrentTodoValue(e.target.value)} value={currentTodoValue} />
            <br />
            <button onClick={handleTodoClick}>Send</button>
        </div>
    )
}

export default AddItem