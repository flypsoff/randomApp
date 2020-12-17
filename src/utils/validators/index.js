
export const required = (v) => {
    if(!v || v.trim() === '') return 'Required'
    return undefined
}

export const maxLengthCreator = (maxLength) => (v) => {
    if(v.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

export const invalidEmail = (v) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)) return 'Invalid email address'
    return undefined
}