import { combineReducers } from '@reduxjs/toolkit'
import { errorHandle } from './hoc.errorHandle'
import { offers } from './offers/offers.reducer'

const reducersMap = {
  offers: errorHandle(offers),
}

export const rootReducer = combineReducers(reducersMap)
