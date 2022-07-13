
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { boardReducer } from './reducer/board.reducer.js'
import { userReducer } from './reducer/user.reducer.js'

const rootReducer = combineReducers({
    boardModule: boardReducer,
    userModule: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


