import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Header, { headerSelector } from './'

const initialState = {
  offers: {
    metaData: {
      cursor: {
        totalCount: 2,
      },
      listTitle: 'hotels',
      searchRegion: {
        name: 'Test',
      },
    },
  },
}

const mockStore = configureStore([])

const withRedux = ({ children }) => (
  <Provider store={mockStore(initialState)}>{children}</Provider>
)

test('Header should render properly', async () => {
  const { asFragment, findByText } = render(<Header />, { wrapper: withRedux })
  const headingTitle = await findByText(/Test/)

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('headerSelector return proper values', () => {
  const returnedObject = {
    listTitle: 'hotels',
    name: 'Test',
    totalCount: 2,
  }

  expect(headerSelector(initialState, initialState.offers.metaData)).toEqual(
    returnedObject
  )
})
