import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setCompletedTodosThunk, deleteCompletedTodosThunk } from '../actions/todos'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'
import Completed from '../components/Todo/Completed/Completed'

const CompletedContainer = (props) => {

    useEffect(() => {
        if (props.isAuth) {
            props.onSetCompletedTodos()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])

    if (!props.isAuth) {
        return (
            <LogginWarn>
                Sorry, but if you want see completed todos you need to login!
            </LogginWarn>
        )
    }

    return (
        <Completed {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    todos: state.todos.todos,
})

const mapDispatchToProps = (dispatch) => ({
    onSetCompletedTodos: () => dispatch(setCompletedTodosThunk()),
    onDeleteCompletedTodos: (id) => dispatch(deleteCompletedTodosThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedContainer)