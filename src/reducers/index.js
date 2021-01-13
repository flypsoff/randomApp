import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'

import todos from './todos'
import shops from './shops'
import user from './user'

const reducers = combineReducers({
    todos,
    shops,
    user,
    form: formReducer
})

export default reducers