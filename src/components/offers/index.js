import React, { useCallback, useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import pluralize from 'pluralize'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, Flex, Heading, Text } from 'rebass'
import { fetchOffersAction } from '../../store/offers/offers.actions'

const calculateRating = rating => ((5 / 100) * rating).toFixed(1)

const offersSelector = createSelector(
  ({ offers }) => offers.list,
  offers =>
    offers.map(({ details, id, photos, price, rating }) => ({
      id,
      area: details?.area?.value,
      bedroomsCount: details?.bedroomsCount,
      guestsCount: details?.guestsCount,
      nights: price?.nights ?? 0,
      photos,
      price: price?.total ?? 0,
      rating: rating?.value ?? 0,
      title: details?.name,
      votes: rating?.count ?? 0,
    }))
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
      <Box key={offer.id} px={0} py={0} width={366}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 3px 8px rgba(0, 0, 0, .20)',
            height: 420,
            m: 2,
            p: 1,
          }}
        >
          <Flex flexDirection="column" height="100%">
            <Box
              sx={{
                px: 4,
                py: 6,
                backgroundImage: `url(${offer.photos?.[0]?.t})`,
                backgroundSize: 'cover',
                backgroundColor: '#dedede',
              }}
            />

            <Flex flexDirection="column" flexGrow={1}>
              <Flex p={2}>
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
                  {offer.title}
                </Heading>

                <Box
                  width="20%"
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <Text fontSize={0} color="#999999">
                    {pluralize('night', offer.nights, true)}
                  </Text>
                  <Text fontSize={2} fontWeight="bold">
                    &euro; {offer.price.toLocaleString()}
                  </Text>
                </Box>
              </Flex>

              <Box
                flexGrow={1}
                mx={2}
                my={0}
                sx={{
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                <Text fontSize={1}>
                  {offer.guestsCount} pers.,{' '}
                  {pluralize('bedroom', offer.bedroomsCount, true)},{' '}
                  {offer.area}m<sup>2</sup>
                </Text>
                <Text color="#999999" fontSize={1}>
                  Rating: {calculateRating(offer.rating)} ({offer.votes} votes)
                </Text>
              </Box>

              <Button
                alignSelf="flex-end"
                bg="#cccccc"
                disabled
                m={2}
                title="not implemented"
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
