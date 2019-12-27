import { createAction } from '@reduxjs/toolkit'

const fetchOffersAction = createAction('offers/fetch')
const loadOffersAction = createAction('offers/load')

export { fetchOffersAction, loadOffersAction }
