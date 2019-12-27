import { createAction } from '@reduxjs/toolkit'

const fetchOffersAction = createAction('offers/fetch')
const loadingOffersStartAction = createAction('offers/loading-start')
const loadingOffersEndAction = createAction('offers/loading-end')
const loadOffersAction = createAction('offers/load', payload => {
  if (payload.error !== undefined) {
    return {
      payload,
      error: true,
    }
  }
  return { payload }
})

export {
  fetchOffersAction,
  loadingOffersEndAction,
  loadingOffersStartAction,
  loadOffersAction,
}
