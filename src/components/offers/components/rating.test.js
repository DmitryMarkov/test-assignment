import React from 'react'
import { render } from '@testing-library/react'
import Rating, { calculateRating } from './rating'

test('Rating should render properly', () => {
  const mockRating = 90
  const mockVotesCount = 5
  const { asFragment, getByText } = render(
    <Rating rating={mockRating} votesCount={mockVotesCount} />
  )

  expect(getByText(/Rating/)).toBeInTheDocument()
  expect(asFragment()).toMatchSnapshot()
})

test('calculateRating works correctly', () => {
  const mockRating1 = 90
  const mockRating2 = 0
  expect(calculateRating(mockRating1)).toBe('4.5')
  expect(calculateRating(mockRating2)).toBe('0.0')
})
