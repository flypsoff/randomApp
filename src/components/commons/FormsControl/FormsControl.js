import React from 'react'

export const InputRender = ({ input, meta, label, ...props }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} {...props} placeholder={label} />
            </div>
            {meta.touched && meta.error && <span style={{ color: 'darkred' }}>{meta.error}</span>}
        </div>
    )
}

export const TextareaRender = ({ input, meta, label, ...props }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <textarea {...input} {...props} placeholder={label} />
            </div>
            {meta.touched && meta.error && <span style={{ color: 'darkred' }}>{meta.error}</span>}
        </div>
    )
}