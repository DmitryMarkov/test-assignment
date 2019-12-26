import { combineReducers } from 'redux'
import { errorHandle } from './hoc.errorHandle'
import { test } from './test.reducer'

const reducersMap = {
  test: errorHandle(test),
}

export const rootReducer = combineReducers(reducersMap)
