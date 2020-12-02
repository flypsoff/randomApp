import React from 'react'
import { connect } from 'react-redux'
import { addTodo, todoValue } from './../../../actions'
import styles from './AddItem.module.css'

const AddItem = (props) => {

    const onChangeValue = (arg) => {
        props.onChangeValue(arg)
    }

    const handleTodoClick = () => {
        props.onAddTodo(props.todoValue)
        onChangeValue('')
    }

    return (
        <div className={styles.addItemContainer}>
            <textarea maxLength="200" onChange={(e) => onChangeValue(e.target.value)} value={props.todoValue} />
            <br />
            <button onClick={handleTodoClick}>Send</button>
        </div>
    )
}

export default connect(
    state => ({
        todoValue: state.todoValue
    }),
    dispatch => ({
        onChangeValue: currentValue => dispatch(todoValue(currentValue)),
        onAddTodo: text => dispatch(addTodo(text))
    })
)(AddItem)