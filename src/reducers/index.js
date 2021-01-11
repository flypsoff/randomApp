import { combineReducers  } from 'redux'
import todos from './todos'
import shops from './shops'
import user from './user'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    todos,
    shops,
    user,
    form: formReducer
})

export default reducers