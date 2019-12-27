import React from 'react'
import { render } from '@testing-library/react'
import Loading from './loading'

test('Loading should render properly', () => {
  const { asFragment, getByText } = render(<Loading />)

  expect(getByText(/Loading/)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
