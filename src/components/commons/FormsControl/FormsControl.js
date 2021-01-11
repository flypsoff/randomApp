import React from 'react'

export const InputRender = ({ input, meta, label, placeholder, ...props }) => {
    return (
        <input {...input} {...props} placeholder={placeholder} />
    )
}

