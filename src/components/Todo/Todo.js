import React from 'react'
import AddItem from './AddItem/AddItem'
import Cases from './Cases/Cases'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = ({todos, onCurrentTodo, todoValue, isAuth, onAddCurrentTodo, onAddCompletedTodo}) => {  
    return (
        <div className={styles.todoContainer}>
            <Cases />
            <AddItem
                todoValue={todoValue}
                onCurrentTodo={onCurrentTodo}
                isAuth={isAuth}
                onAddCurrentTodo={onAddCurrentTodo}
            />
            <Items todos={todos} isAuth={isAuth} onAddCompletedTodo={onAddCompletedTodo}/>
        </div>
    )
}

export default Todo