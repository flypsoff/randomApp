import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/users";
import { logoutTodos } from '../actions/todos'
import { changeFieldThunk, changeEmailThunk, changePasswordThunk, deletePostThunk } from "../actions/account";
import Account from '../components/auth/Account/Account'

const AccountContainer = ({onLogout, onLogoutTodos, onDeletePost, ...props}) => {
    const handleLogout = () => {
        onLogout()
        onLogoutTodos()
    }

    const handleDelete = async (carID) => {
        onDeletePost(carID)
    }

    return (
        <Account handleLogout={handleLogout} handleDelete={handleDelete} {...props}/>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.currentUser,
    isLoading: state.loading.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logout()),
    onLogoutTodos: () => dispatch(logoutTodos()),
    onChangeField: (field, state) => dispatch(changeFieldThunk(field, state)),
    onChangeEmail: (field, email, pass) => dispatch(changeEmailThunk(field, email, pass)),
    onChangePassword: (field, email, pass) => dispatch(changePasswordThunk(field, email, pass)),
    onDeletePost: (carID) => dispatch(deletePostThunk(carID))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)