/* global window */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import epics from './epics'

const __DEV__ = process.env.NODE_ENV === 'development'

let reduxMiddleware = [thunk, ...epics]

if (__DEV__) {
  const { createLogger } = require('redux-logger')
  const freeze = require('redux-freeze')
  const logger = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry.error,
  })
  reduxMiddleware.push(logger)
  reduxMiddleware.push(freeze)
}

const combineEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Bookmarks',
      })
    : compose

const enhancer = combineEnhancer(applyMiddleware(...reduxMiddleware))

const store = createStore(rootReducer, enhancer)

export { store }
