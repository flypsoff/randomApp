import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/users";
import { logoutTodos } from '../actions/todos'
import Account from '../components/auth/Account/Account'

const AccountContainer = (props) => {
    const handleLogout = () => {
        props.onLogout()
        props.onLogoutTodos()
    }

    return (
        <Account handleLogout={handleLogout} user={props.user}/>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logout()),
    onLogoutTodos: () => dispatch(logoutTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)