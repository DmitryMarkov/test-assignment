import { fetchOffersAction, loadOffersAction } from './offers.actions'
import mocks from '../../mocks/offers'

async function stall(stallTime = 1000) {
  await new Promise(resolve => setTimeout(resolve, stallTime))
}

const getFolders = async () => {
  await stall()
  return new Promise(resolve => {
    resolve(mocks)
  })
}

const folderService = {
  getFolders,
}

const fetchFolders = dispatch => {
  folderService
    .getFolders()
    .then(payload => dispatch(loadOffersAction(payload)))
    .catch(error => dispatch(loadOffersAction(error)))
}

const offersEpics = ({ dispatch }) => next => action => {
  switch (action.type) {
    case fetchOffersAction.type: {
      fetchFolders(dispatch)
      break
    }
    default:
      return next(action)
  }
}

export { offersEpics }
