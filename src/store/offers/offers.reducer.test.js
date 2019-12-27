import { offers } from './offers.reducer'
import { fetchOffersAction, loadOffersAction } from './offers.actions'

const initialState = {
  metaData: {},
  list: [],
}

test('offers reducers should return initial state', () => {
  expect(offers(initialState, fetchOffersAction)).toBe(initialState)
})

test('offers reducers should return updated state', () => {
  expect(
    offers(initialState, {
      type: loadOffersAction,
      payload: {
        metaData: { test: 'test' },
        offers: [1, 2, 3],
      },
    })
  ).toStrictEqual({
    list: [1, 2, 3],
    metaData: { test: 'test' },
  })
})
