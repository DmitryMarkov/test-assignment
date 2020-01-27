import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Offer from './'

const withRouter = ({ children }) => <Router>{children}</Router>

test('Offer should render properly', async () => {
  const { asFragment, getByText } = render(<Offer />, { wrapper: withRouter })
  const headingTitle = getByText(/Details page for id:/)

  expect(headingTitle).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
