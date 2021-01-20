import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'

import todos from './todos'
import user from './user'
import loading from './loading'
import cars from './cars'

const reducers = combineReducers({
    todos,
    cars,
    user,
    loading,
    form: formReducer
})

export default reducers