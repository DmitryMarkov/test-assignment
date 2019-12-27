import React from 'react'
import { render } from '@testing-library/react'
import ErrorMessage from './error-message'

test('ErrorMessage should render properly', () => {
  const { asFragment, getByText } = render(<ErrorMessage />)

  expect(
    getByText(
      /Sorry, we cannot load offers\. If you think this is an error try to reload this page again/
    )
  ).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
