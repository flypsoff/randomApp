import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setTodosThunk, currentTodo, addTodoThunk, deleteTodoThunk, changeCompleteThunk } from '../actions/todos'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'
import Todo from '../components/Todo/Todo'

const TodoContainer = (props) => {
    useEffect(() => {
        if (props.isAuth) {
            props.onSetTodos()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])

    const handleCheckbox = (checked, id) => {
        props.onChangeComplete(checked, id)
    }

    if (!props.isAuth) {
        return (
            <LogginWarn>
                Sorry, but if you want use todo you need to login!
            </LogginWarn>
        )
    }

    return (
        <Todo {...props} handleCheckbox={handleCheckbox}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    todos: state.todos.todos,
    todoValue: state.todos.currentTodoValue
})

const mapDispatchToProps = (dispatch) => ({
    onCurrentTodo: (todo) => dispatch(currentTodo(todo)),
    onSetTodos: () => dispatch(setTodosThunk()),
    onAddTodo: (todo) => dispatch(addTodoThunk(todo)),
    onDeleteTodo: (id) => dispatch(deleteTodoThunk(id)),
    onChangeComplete: (checked, id) => dispatch(changeCompleteThunk(checked, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)