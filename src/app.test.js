import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

test('renders app properly', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})
