import { combineReducers  } from 'redux'
import todos from './todos'
import shops from './shops'

const reducers = combineReducers({
    todos,
    shops,
})

export default reducers