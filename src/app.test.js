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
  const { asFragment, getByTestId } = render(<App />)
  const headingTitle = await waitForElement(() => getByTestId('heading-title'))

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
