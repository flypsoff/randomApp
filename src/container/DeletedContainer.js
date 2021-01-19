import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setDeletedTodosThunk, deleteDeletedTodosThunk } from '../actions/todos'
import LogginWarn from '../components/commons/LoginWarn/LoginWarn'
import Deleted from '../components/Todo/Deleted/Deleted'

const CompletedContainer = (props) => {

    useEffect(() => {
        if (props.isAuth) {
            props.onSetDeletedTodos()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])

    if (!props.isAuth) {
        return (
            <LogginWarn>
                Sorry, but if you want to see deleted todos you need to login!
            </LogginWarn>
        )
    }

    return (
        <Deleted {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    deletedTodos: state.todos.deletedTodos
})

const mapDispatchToProps = (dispatch) => ({
    onSetDeletedTodos: () => dispatch(setDeletedTodosThunk()),
    onDeleteDeletedTodos: (id) => dispatch(deleteDeletedTodosThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedContainer)