import React from 'react'
import styles from './AddItem.module.css'

const AddItem = ({ onCurrentTodo, todoValue, onAddCurrentTodo }) => {

    const handleClick = () => {
        try {
            if (todoValue.trim() !== '') {
                onAddCurrentTodo(todoValue)
            }
            onCurrentTodo('')
        } catch (error) {
            console.log(error.response.data.message);
        }

    }

    return (
        <div className={styles.addItemContainer}>
            <textarea maxLength="200" value={todoValue} onChange={(e) => onCurrentTodo(e.target.value)} />
            <br />
            <button onClick={handleClick}>Send</button>
        </div >
    )
}

export default AddItem