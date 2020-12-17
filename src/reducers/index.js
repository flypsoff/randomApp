import { combineReducers  } from 'redux'
import todos from './todos'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    todos,
    form: formReducer
})

export default reducers