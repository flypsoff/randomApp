import { combineReducers  } from 'redux'
import todos from './todos'
import themes from './themes'

const reducers = combineReducers({
    todos,
    themes,
})

export default reducers