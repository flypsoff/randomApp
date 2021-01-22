import React from 'react'
import AddItem from './AddItem/AddItem'
import Cases from './Cases/Cases'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = ({ todos, todoValue, isAuth, onCurrentTodo, onAddTodo, onDeleteTodo, handleCheckbox }) => {
    return (
        <div>
            <div className={styles.todoContainer}>
                <Cases />
                <AddItem
                    todoValue={todoValue}
                    onCurrentTodo={onCurrentTodo}
                    isAuth={isAuth}
                    onAddTodo={onAddTodo}
                />
                   <Items
                    todos={todos}
                    isAuth={isAuth}
                    onDeleteTodo={onDeleteTodo}
                    handleCheckbox={handleCheckbox}
                />
            </div>
        </div>
    )
}

export default Todo