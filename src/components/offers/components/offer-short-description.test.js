import React from 'react'
import { render } from '@testing-library/react'
import OfferShortDescription from './offer-short-description'

test('OfferShortDescription should render properly', () => {
  const mockArea = 4242
  const mockBedroomsCount = 2
  const mockGuestsCount = 4
  const { asFragment, getByText } = render(
    <OfferShortDescription
      area={mockArea}
      bedroomsCount={mockBedroomsCount}
      guestsCount={mockGuestsCount}
    />
  )

  expect(getByText(/4242m/i)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})
