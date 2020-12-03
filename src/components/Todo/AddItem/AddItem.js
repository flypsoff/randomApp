import React from 'react'
import styles from './AddItem.module.css'
import { NavLink } from 'react-router-dom'

const AddItem = ({onChangeCurrentTodoValue, onAddTodo, currentTodoValue}) => {

    const handleTodoClick = () => {
        if(currentTodoValue.trim() !== '') {
            onAddTodo(currentTodoValue)
        }
        onChangeCurrentTodoValue('')
    }
    
    return (
        <div className={styles.addItemContainer}>
            <NavLink to={`/todo/history`}>
                <button>To history!</button>
            </NavLink>
            <br />
            <textarea maxLength="200" onChange={(e) => onChangeCurrentTodoValue(e.target.value)} value={currentTodoValue} />
            <br />
            <button onClick={handleTodoClick}>Send</button>
        </div>
    )
}

export default AddItem