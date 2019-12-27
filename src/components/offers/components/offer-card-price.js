import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'
import pluralize from 'pluralize'

const OfferCardPrice = ({ nights, price }) => (
  <Box
    width="20%"
    sx={{
      textAlign: 'right',
    }}
  >
    <Text fontSize={0} color="#999999">
      {pluralize('night', nights, true)}
    </Text>
    <Text fontSize={2} fontWeight="bold">
      &euro; {price.toLocaleString()}
    </Text>
  </Box>
)

OfferCardPrice.propTypes = {
  nights: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default OfferCardPrice
