import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'

const OfferCardTitle = ({ title, width }) => (
  <Heading
    as="h3"
    alignSelf="flex-end"
    fontSize={2}
    a
    py={2}
    width={width}
    sx={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
  >
    {title}
  </Heading>
)

OfferCardTitle.defaultProps = {
  width: '80%',
}

OfferCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default OfferCardTitle
