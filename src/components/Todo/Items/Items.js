import React from 'react'
import { connect } from 'react-redux'
import styles from './Items.module.css'
import { todoChecked } from './../../../actions'


const Items = (props) => {

    const handleTodoChangeCheckbox = (key) => {
        props.onTodoChecked(key)
    }

    return (
        <div>
            {props.todos.map((item, index) => (
                <div className={styles.itemsContainer} 
                    key={item.id}>
                    <span style={item.completed ? {textDecoration:'line-through'}: {textDecoration:'none'}}>
                        {item.text}
                    </span>
                    <input type='checkbox' onClick={() => handleTodoChangeCheckbox(item.id)}/>
                </div>
            ))}
        </div>
    )
}

export default connect(
    state => ({
        todos: state.todos
    }),
    dispatch => ({
        onTodoChecked: (idItem) => {dispatch(todoChecked(idItem))}
    })
)(Items)