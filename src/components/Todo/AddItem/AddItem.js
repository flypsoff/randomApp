import React from 'react'
import styles from './AddItem.module.css'
import { NavLink } from 'react-router-dom'

const AddItem = ({ currentTodo, todoValue, addTodo }) => {

    const handleClick = async () => {
        try {
            if (todoValue.trim() !== '') {
               addTodo(todoValue)
            }
            currentTodo('')
        } catch (error) {
            console.log(error.response.data.message);
        }

    }

    return (
        <div className={styles.addItemContainer}>
            <div className={styles.history}>
                <NavLink to={`/todo/completed`}>
                    <button>Completed</button>
                </NavLink>
                <button >Complete all</button>
            </div>
            <br />
            <textarea maxLength="200" value={todoValue} onChange={(e) => currentTodo(e.target.value)} />
            <br />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default AddItem