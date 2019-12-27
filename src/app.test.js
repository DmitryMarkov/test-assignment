import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from './app'
import mocks from './mocks/offers'

global.fetch = jest.fn().mockImplementation(
  () =>
    new Promise(resolve => {
      resolve({
        ok: true,
        Id: 'test',
        json: function() {
          return mocks
        },
      })
    })
)

test('renders app properly', async () => {
  const { asFragment, getByTestId, getByText } = render(<App />)

  expect(getByText(/Loading/)).toBeInTheDocument()

  const headingTitle = await waitForElement(() => getByTestId('heading-title'))

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('app show error message if server respond with error', async () => {
  global.fetch = jest.fn().mockImplementation(
    () =>
      new Promise((_resolve, reject) => {
        reject({
          ok: false,
          Id: 'test',
          json: function() {
            return '<html>404 not found</html>'
          },
        })
      })
  )

  const { getByText } = render(<App />)
  const errorMessage = await waitForElement(() => getByText(/Sorry/))

  expect(errorMessage).toBeInTheDocument()
})
