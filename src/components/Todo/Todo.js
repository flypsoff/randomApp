import React from 'react'
import AddItem from './AddItem/AddItem'
import Cases from './Cases/Cases'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = ({ todos, onCurrentTodo, todoValue, isAuth, onAddTodo, onCompleteTodo }) => {
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
                <Items todos={todos} isAuth={isAuth} onCompleteTodo={onCompleteTodo} />
            </div>
        </div>
    )
}

export default Todo