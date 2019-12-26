import { createActions } from 'redux-actions'
import { TEST_ACTION } from '../action.types'

// action creators
const { testAction } = createActions({
  [TEST_ACTION]: payload => payload,
})
// thunks
const changeTestValue = test => dispatch => {
  return dispatch(testAction({ test }))
}

export { changeTestValue }
