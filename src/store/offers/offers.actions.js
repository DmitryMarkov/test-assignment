import { createAction } from '@reduxjs/toolkit'

const fetchOffersAction = createAction('offers/fetch')
const loadOffersAction = createAction('offers/load')

const fetchOffers = () => dispatch => dispatch(fetchOffersAction())

export { fetchOffersAction, fetchOffers, loadOffersAction }
