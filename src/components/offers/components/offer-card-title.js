import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'

const OfferCardTitle = ({ title }) => (
  <Heading
    as="h3"
    alignSelf="flex-end"
    fontSize={2}
    py={2}
    width="80%"
    sx={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
  >
    {title}
  </Heading>
)

OfferCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default OfferCardTitle
