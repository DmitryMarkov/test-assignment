import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

export const calculateRating = rating => ((5 / 100) * rating).toFixed(1)

const Rating = ({ rating, votesCount }) => (
  <Text color="#999999" fontSize={1}>
    Rating: {calculateRating(rating)} ({votesCount} votes)
  </Text>
)

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  votesCount: PropTypes.number.isRequired,
}

export default Rating
