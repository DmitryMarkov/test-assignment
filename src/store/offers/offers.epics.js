import Api from '../../api'
import {
  fetchOffersAction,
  loadingOffersEndAction,
  loadingOffersStartAction,
  loadOffersAction,
} from './offers.actions'

const fetchOffers = (dispatch, payload) => {
  Api.fetchOffers(payload)
    .then(payload => {
      dispatch(loadOffersAction(payload))
      dispatch(loadingOffersEndAction())
    })
    .catch(error => {
      dispatch(loadOffersAction({ error: error.toString() }))
      dispatch(loadingOffersEndAction())
    })
}

// actual epic
const offersEpics = ({ dispatch, getState }) => next => action => {
  switch (action.type) {
    case fetchOffersAction.type: {
      if (!getState().offers.list.length) {
        dispatch(loadingOffersStartAction())
      }
      fetchOffers(dispatch, action.payload)
      break
    }
    default:
      return next(action)
  }
}

export { offersEpics }
