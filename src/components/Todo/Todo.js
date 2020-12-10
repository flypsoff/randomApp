import React from 'react'
import AddItem from './AddItem/AddItem'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = (props) => {
    return (
        <div className={styles.todoContainer}>
            <AddItem
                onChangeCurrentTodoValue={props.onChangeCurrentTodoValue}
                onAddTodo={props.onAddTodo}
                currentTodoValue={props.currentTodoValue}
                onDeleteAllTodo={props.onDeleteAllTodo}
            />
            <Items todos={props.todos} onTodoChecked={props.onTodoChecked} onDeleteTodo={props.onDeleteTodo}/>
        </div>
    )
}

export default Todo