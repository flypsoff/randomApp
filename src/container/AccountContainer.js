import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/users";
import Account from '../components/auth/Account/Account'

const AccountContainer = (props) => {
    return (
        <Account handleLogout={props.onlogout}/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onlogout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(AccountContainer)