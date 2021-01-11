import React from "react"

const Account = (props) => {
    return (
        <div>
            Account
            <button onClick={props.handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Account