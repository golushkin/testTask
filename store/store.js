import { createStore, combineReducers } from 'redux'
import { dataReducer } from './reducers/dataReducer'
import { errorsReducer } from './reducers/errorReducer'

const cominedReducer = combineReducers({
    data: dataReducer,
    errors: errorsReducer
})

export const store = createStore(
    cominedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)