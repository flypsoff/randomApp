import { ADD_TODO, CHANGE_TODO_CHECKBOX } from './../constants'

let initialState = [
    {text: 'Hello Kitty', completed: false, id: 10002},
    {text: 'Welcome to the party', completed: false, id:10001}
]

const todos = (state = initialState, action) => {
    let lastID = state[0].id

    switch (action.type) {
        case ADD_TODO: 
            return [
                {
                    text: action.text,
                    completed: false,
                    id: lastID + 1
                },
                ...state
            ]
        case CHANGE_TODO_CHECKBOX: 
            state.forEach(item => item.id === action.idItem 
                ? item.completed = !item.completed : item.completed)
            return [
                ...state
            ]
        default :
            return state
    }
}

export default todos