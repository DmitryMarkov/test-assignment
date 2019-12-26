import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Button, Card, Flex, Image, Heading, Text } from 'rebass'
import { fetchOffers } from '../../store/offers/offers.actions'

const Offers = ({ fetchOffers, offers }) => {
  useEffect(() => {
    fetchOffers()
  }, [fetchOffers])
  const renderOffers = () =>
    offers.map(offer => (
      <Box px={0} py={0} width={366} key={offer.id}>
        <Card
          sx={{
            m: 2,
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
            height: 400,
          }}
        >
          <Image src="https://img.holidu.com/images/2691944d-d1ba-4a8a-8b30-4f50d1d75156/t.jpg" />
          <Box px={2}>
            <Heading
              as="h3"
              fontSize={2}
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {offer?.details?.name}
            </Heading>
            <Text fontSize={0}>{offer?.details?.guestsCount} pers.</Text>
            <Button disabled variant="secondary">
              Click me
            </Button>
          </Box>
        </Card>
      </Box>
    ))
  return (
    offers.length > 0 && (
      <Flex flexWrap="wrap" mx={1}>
        {renderOffers()}
      </Flex>
    )
  )
}

const mapStateToProps = ({ offers }) => ({
  offers: offers.offers,
})

const mapDispatchToProps = {
  fetchOffers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers)
