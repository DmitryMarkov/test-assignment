import React from 'react'
import { render } from '@testing-library/react'
import OfferCardTitle from './offer-card-title'

test('OfferCardTitle should render properly', () => {
  const mockTitle = 'Grand Royal'
  const { asFragment, getByText } = render(<OfferCardTitle title={mockTitle} />)

  expect(getByText(mockTitle)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
