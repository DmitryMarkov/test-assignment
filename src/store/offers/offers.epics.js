import {
  fetchOffersAction,
  loadingOffersEndAction,
  loadingOffersStartAction,
  loadOffersAction,
} from './offers.actions'

const BASE_URL = 'https://api.holidu.com/rest/v6'

// this should be in another file, but it here for simplicity
const getData = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/offers?searchTerm=Mallorca,%20Spanien`
    )
    return await res.json()
  } catch (error) {
    throw Error(error)
  }
}

const offersService = {
  getData,
}

const fetchOffers = dispatch => {
  offersService
    .getData()
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
const offersEpics = ({ dispatch }) => next => action => {
  switch (action.type) {
    case fetchOffersAction.type: {
      dispatch(loadingOffersStartAction())
      fetchOffers(dispatch)
      break
    }
    default:
      return next(action)
  }
}

export { offersEpics }
