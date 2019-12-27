import { createReducer } from '@reduxjs/toolkit'
import { loadOffersAction } from './offers.actions'

const initialState = {
  metaData: {},
  list: [],
}

const offers = createReducer(initialState, {
  [loadOffersAction]: (state, { payload }) => {
    state.list = payload.offers
    state.metaData = payload.metaData
  },
})

export { offers }
