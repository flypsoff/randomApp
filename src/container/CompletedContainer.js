import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCompletedTodosThunk } from '../actions/todos'
import Completed from '../components/Todo/Completed/Completed'


const CompletedContainer = (props) => {

    useEffect(() => {
        if(props.isAuth) {
            props.setCompletedTodos(props.email)
         }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth, props.email])

    return (
        <Completed {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    email: state.user.currentUser.email,
    todos: state.todos.completedTodos,
})

const mapDispatchToProps = (dispatch) => ({
    setCompletedTodos: (email) => dispatch(setCompletedTodosThunk(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedContainer)