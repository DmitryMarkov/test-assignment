import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from './app'
import mocks from './mocks/offers'

test('renders app properly', async () => {
  global.fetch = jest.fn().mockImplementation(
    () =>
      new Promise(resolve => {
        resolve({
          ok: true,
          Id: 'test',
          json: function () {
            return mocks
          },
        })
      })
  )
  const { asFragment, findByTestId, getByText } = render(<App />)

  expect(getByText(/Loading/)).toBeInTheDocument()

  const headingTitle = await findByTestId('heading-title')

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

xtest('app show error message if server respond with error', async () => {
  // TODO: move these tests to offers.test.js with mocked redux
  global.fetch = jest.fn().mockImplementation(
    () =>
      new Promise((_resolve, reject) => {
        reject({
          ok: false,
          Id: 'test',
          json: function () {
            return '<html>404 not found</html>'
          },
        })
      })
  )

  const { getByText } = render(<App />)
  const errorMessage = await waitFor(() => getByText(/Sorry/))

  expect(errorMessage).toBeInTheDocument()
})
