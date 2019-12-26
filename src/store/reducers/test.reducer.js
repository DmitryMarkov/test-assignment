import { handleActions } from 'redux-actions'
import p from 'immer'
import { TEST_ACTION } from '../action.types'

const initialState = {
  test: 'test',
}

const test = handleActions(
  {
    [TEST_ACTION]: p((test, { payload }) => {
      test.test = payload.test
    }),
  },
  initialState
)

export { test }
