import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentTodosThunk, currentTodo, addTodo } from '../actions/todos'
import Todo from '../components/Todo/Todo'

const TodoContainer = (props) => {

    useEffect(() => {
        if(props.isAuth) {
           props.setCurrentTodos(props.email)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth, props.email])

    return (
        <Todo {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    email: state.user.currentUser.email,
    todos: state.todos.currentTodos,
    todoValue: state.todos.currentTodoValue
})

const mapDispatchToProps = (dispatch) => ({
    currentTodo: (todo) => dispatch(currentTodo(todo)),
    addTodo: (todo) => dispatch(addTodo(todo)),
    setCurrentTodos: (email) => dispatch(setCurrentTodosThunk(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)