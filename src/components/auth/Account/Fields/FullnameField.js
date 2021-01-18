import React from 'react'

const FullnameField = (props) => {
    return (
        <div>
            <h3>
                {props.name} {props.surname}, {props.date}
            </h3>
        </div>
    )
}

export default FullnameField