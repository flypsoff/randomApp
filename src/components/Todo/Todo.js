import React from 'react'
import AddItem from './AddItem/AddItem'
import Items from './Items/Items'
import styles from './Todo.module.css'

const Todo = ({todos, currentTodo, todoValue, addTodo, isAuth}) => {  
    return (
        <div className={styles.todoContainer}>
            <AddItem
                todoValue={todoValue}
                currentTodo={currentTodo}
                addTodo={addTodo}
            />
            <Items todos={todos} isAuth={isAuth}/>
        </div>
    )
}

export default Todo