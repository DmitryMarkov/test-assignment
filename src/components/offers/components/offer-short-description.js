import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'
import pluralize from 'pluralize'

const OfferShortDescription = ({ area, bedroomsCount, guestsCount }) => (
  <Text fontSize={1}>
    {guestsCount} pers., {pluralize('bedroom', bedroomsCount, true)}, {area}m
    <sup>2</sup>
  </Text>
)

OfferShortDescription.propTypes = {
  area: PropTypes.number.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  guestsCount: PropTypes.number.isRequired,
}

export default OfferShortDescription
