import React from 'react'
import { connect } from 'react-redux'
import styles from './History.module.css'

const History = (props) => {
    return (
        <div className={styles.mainHistoryContainer}>
            {props.deletedTodos.map(item => (
                <div key={item.id} className={styles.historyContainer}>
                    <span className={styles.textSpan}>{item.text}</span>
                    <span className={styles.dateSpan}></span>
                </div>
            ))}
        </div>
    )
}

export default connect(
    state => ({
        deletedTodos: state.todos.deletedTodos
    }),
    dispatch => ({

    })
)(History)