import React from 'react'
import AddItem from './AddItem/AddItem'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = (props) => {
    return (
        <div className={styles.todoContainer}>
            <AddItem />
            <Items />
        </div>
    )
}

export default Todo