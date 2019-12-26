import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import { offersEpics } from './offers/offers.epics'

const __DEV__ = process.env.NODE_ENV === 'development'

let reduxMiddleware = [...getDefaultMiddleware(), offersEpics]

if (__DEV__) {
  const { createLogger } = require('redux-logger')
  const freeze = require('redux-freeze')
  const logger = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry.error,
  })
  reduxMiddleware.push(logger)
  reduxMiddleware.push(freeze)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: reduxMiddleware,
  devTools: __DEV__,
})

export { store }
