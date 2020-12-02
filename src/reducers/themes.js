import {DARK_THEME} from './../constants'

const themes = (state = false, action) => {
    switch (action.type) {
        case DARK_THEME: 
            return !state
        default :
            return state
    }
}

export default themes