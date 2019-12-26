import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from './app'

test('renders app properly', async () => {
  const { asFragment, getByTestId } = render(<App />)
  const headingTitle = await waitForElement(() => getByTestId('heading-title'))

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
