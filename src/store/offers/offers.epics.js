import {
  fetchOffersAction,
  loadingOffersEndAction,
  loadingOffersStartAction,
  loadOffersAction,
} from './offers.actions'

const BASE_URL = 'https://api.holidu.com'

// this should be in another file, but it here for simplicity
const getData = async (
  url = `/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien`
) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`)
    return await res.json()
  } catch (error) {
    throw Error(error)
  }
}

const offersService = {
  getData,
}

const fetchOffers = (dispatch, payload) => {
  offersService
    .getData(payload)
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
