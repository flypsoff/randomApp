import { combineReducers  } from 'redux'
import todos from './todos'
import themes from './themes'
import todoValue from './todoValue'


const reducers = combineReducers({
    todos,
    themes,
    todoValue
})

export default reducers