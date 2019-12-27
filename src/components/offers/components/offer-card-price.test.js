import React from 'react'
import { render } from '@testing-library/react'
import OfferCardPrice from './offer-card-price'

test('OfferCardPrice should render properly', () => {
  const mockNights = 7
  const mockPrice = 4200
  const { asFragment, getByText } = render(
    <OfferCardPrice nights={mockNights} price={mockPrice} />
  )

  expect(getByText(`${mockNights} nights`)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
