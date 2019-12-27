import { fetchOffersAction, loadOffersAction } from './offers.actions'

test('offers actions should return type', () => {
  expect(fetchOffersAction.toString()).toBe('offers/fetch')
  expect(loadOffersAction.toString()).toBe('offers/load')
})
