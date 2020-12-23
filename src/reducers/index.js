import { combineReducers  } from 'redux'
import todos from './todos'
import shops from './shops'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    todos,
    shops,
    form: formReducer,
})

export default reducers