import React, { useCallback, useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, Flex } from 'rebass'
import {
  ErrorMessage,
  Loading,
  OfferCardPrice,
  OfferCardTitle,
  OfferShortDescription,
  Rating,
} from './components'
import { fetchOffersAction } from '../../store/offers/offers.actions'

export const offersSelector = createSelector(
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
      votesCount: rating?.count ?? 0,
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
  const error = useSelector(({ offers }) => offers.error)
  const loading = useSelector(({ offers }) => offers.loading)

  if (loading) {
    return <Loading />
  }

  if (!loading && error) {
    return <ErrorMessage />
  }

  const renderOffers = () =>
    offers.length > 0 &&
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
                <OfferCardTitle title={offer.title} />
                <OfferCardPrice nights={offer.nights} price={offer.price} />
              </Flex>

              <Box
                flexGrow={1}
                mx={2}
                my={0}
                sx={{
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                <OfferShortDescription
                  area={offer.area}
                  bedroomsCount={offer.bedroomsCount}
                  guestsCount={offer.guestsCount}
                />
                <Rating rating={offer.rating} votesCount={offer.votesCount} />
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
    <Flex flexWrap="wrap" mx={1}>
      {renderOffers()}
    </Flex>
  )
}

export default Offers
