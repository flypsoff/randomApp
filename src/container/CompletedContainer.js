import { useEffect } from 'react'
import { connect } from 'react-redux'

import { setCompletedTodosThunk, deleteCompletedTodosThunk } from '../actions/todos'
import Completed from '../components/Todo/Completed/Completed'

const CompletedContainer = (props) => {

    useEffect(() => {
        if(props.isAuth) {
            props.onSetCompletedTodos()
         }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isAuth])

    return (
        <Completed {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth,
    todos: state.todos.completedTodos,
})

const mapDispatchToProps = (dispatch) => ({
    onSetCompletedTodos: () => dispatch(setCompletedTodosThunk()),
    onDeleteCompletedTodos: (id) => dispatch(deleteCompletedTodosThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedContainer)