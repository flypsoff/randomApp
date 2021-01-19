import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'

import todos from './todos'
import shop from './shop'
import user from './user'
import loading from './loading'

const reducers = combineReducers({
    todos,
    shop,
    user,
    loading,
    form: formReducer
})

export default reducers