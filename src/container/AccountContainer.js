import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/users";
import { deleteAllTodos } from '../actions/todos'
import Account from '../components/auth/Account/Account'

const AccountContainer = (props) => {
    const handleLogout = () => {
        props.onlogout()
        props.deleteTodos()
    }

    return (
        <Account handleLogout={handleLogout} user={props.user}/>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    onlogout: () => dispatch(logout()),
    deleteTodos: () => dispatch(deleteAllTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)