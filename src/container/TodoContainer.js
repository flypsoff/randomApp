import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setTodosThunk, currentTodo, addTodoThunk, completeTodoThunk } from '../actions/todos'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'
import Todo from '../components/Todo/Todo'

const TodoContainer = (props) => {

    useEffect(() => {
        if (props.isAuth) {
            props.onSetTodos()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])


    if (!props.isAuth) {
        return (
            <LogginWarn>
                Sorry, but if you want use todo you need to login!
            </LogginWarn>
        )
    }

    return (
        <Todo {...props} />
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
    onCompleteTodo: (id) => dispatch(completeTodoThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)