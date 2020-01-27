import { createReducer } from '@reduxjs/toolkit'
import {
  loadingOffersEndAction,
  loadingOffersStartAction,
  loadOffersAction,
} from './offers.actions'

const initialState = {
  error: undefined,
  list: [],
  loading: false,
  metaData: {},
}

const offers = createReducer(initialState, {
  [loadOffersAction]: (state, { payload }) => {
    state.list = [...state.list, ...payload.offers]
    state.metaData = payload.metaData
  },
  [loadingOffersStartAction]: state => {
    state.loading = true
  },
  [loadingOffersEndAction]: state => {
    state.loading = false
  },
})

export { offers }
