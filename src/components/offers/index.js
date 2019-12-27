import React, { useCallback, useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, Flex, Image, Heading, Text } from 'rebass'
import { fetchOffersAction } from '../../store/offers/offers.actions'

const offersSelector = createSelector(
  ({ offers }) => offers.offers,
  offers => offers
)

const Offers = () => {
  const dispatch = useDispatch()

  const fetchOffers = useCallback(() => dispatch(fetchOffersAction()), [
    dispatch,
  ])

  useEffect(() => {
    fetchOffers()
  }, [fetchOffers])

  const offers = useSelector(offersSelector)

  const renderOffers = () =>
    offers.map(offer => (
      <Box px={0} py={0} width={366} key={offer.id}>
        <Card
          sx={{
            m: 2,
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
            height: 420,
          }}
        >
          <Flex flexDirection="column" height="100%">
            <Image src={offer?.photos?.[0]?.t} />
            <Flex
              alignItems="stretch"
              alignContent="stretch"
              justifyContent="center"
              flexDirection="column"
              flexGrow={1}
            >
              <Flex p={2}>
                <Heading
                  as="h3"
                  alignSelf="flex-end"
                  fontSize={2}
                  py={2}
                  width={'80%'}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {offer?.details?.name}
                </Heading>
                <Box
                  width={'20%'}
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Text fontSize={0}>{offer?.price?.nights} nights</Text>
                  <Text fontSize={2} fontWeight="bold">
                    &euro; {offer?.price?.total}
                  </Text>
                </Box>
              </Flex>
              <Box
                flexGrow={1}
                m={2}
                sx={{
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                <Text fontSize={1}>
                  {offer?.details?.guestsCount} pers.,{' '}
                  {offer?.details?.bedroomsCount} bedroom(s),{' '}
                  {offer?.details?.area?.value} m<sup>2</sup>
                </Text>
                <Text
                  fontSize={1}
                  sx={{
                    color: '#999999',
                  }}
                >
                  Rating: {((5 / 100) * offer?.rating?.value).toFixed(1)} (
                  {offer?.rating?.count})
                </Text>
              </Box>

              <Button
                alignSelf="flex-end"
                m={2}
                disabled
                title="not implemented"
                sx={{
                  backgroundColor: '#cccccc',
                }}
              >
                To offer
              </Button>
            </Flex>
          </Flex>
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

export default Offers
