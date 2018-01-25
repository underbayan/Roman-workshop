/* eslint-disable global-require */
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
let isProduction = process.env.NODE_ENV === 'production'

export default function configureStore(history,initialState = {}) {
  const middlewares = [ReduxThunk,routerMiddleware(history)]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = !isProduction ? require('redux-devtools-extension').composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  }) : o=>o
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  if (module.hot && isProduction) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-line global-require
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
