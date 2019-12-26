import { createReducer } from '@reduxjs/toolkit'
import { loadOffersAction } from './offers.actions'

const initialState = {
  metaData: {},
  offers: [],
}

const offers = createReducer(initialState, {
  [loadOffersAction]: (state, { payload }) => {
    state.offers = payload.offers
    state.metaData = payload.metaData
  },
})

export { offers }
