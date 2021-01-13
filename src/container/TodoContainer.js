import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setCurrentTodosThunk, currentTodo, addCurrentTodoThunk, addCompletedTodoThunk } from '../actions/todos'
import Todo from '../components/Todo/Todo'

const TodoContainer = (props) => {

    useEffect(() => {
        if(props.isAuth) {
           props.onSetCurrentTodos()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])

    return (
        <Todo {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    todos: state.todos.currentTodos,
    todoValue: state.todos.currentTodoValue
})

const mapDispatchToProps = (dispatch) => ({
    onCurrentTodo: (todo) => dispatch(currentTodo(todo)),
    onSetCurrentTodos: () => dispatch(setCurrentTodosThunk()),
    onAddCurrentTodo: (todo) => dispatch(addCurrentTodoThunk(todo)),
    onAddCompletedTodo: (id) => dispatch(addCompletedTodoThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)