import React, { useCallback, useEffect } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import ReactList from 'react-list'
import { useDispatch, useSelector } from 'react-redux'
import SimpleImageSlider from 'react-simple-image-slider'
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

  const renderItem = (i, key) => (
    <Box key={key} px={0} py={0} width={366}>
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
          <SimpleImageSlider
            width={342}
            height={240}
            images={offers[i].photos
              ?.slice(0, 5)
              .map((_, index) => ({ url: offers[i].photos?.[index]?.t }))}
          />

          <Flex flexDirection="column" flexGrow={1}>
            <Flex p={2}>
              <OfferCardTitle title={offers[i].title} />
              <OfferCardPrice
                nights={offers[i].nights}
                price={offers[i].price}
              />
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
                area={offers[i].area}
                bedroomsCount={offers[i].bedroomsCount}
                guestsCount={offers[i].guestsCount}
              />
              <Rating
                rating={offers[i].rating}
                votesCount={offers[i].votesCount}
              />
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
  )

  const renderItems = (items, ref) => (
    <Flex flexWrap="wrap" mx={1} ref={ref}>
      {items}
    </Flex>
  )

  return (
    <ReactList
      itemRenderer={renderItem}
      itemsRenderer={renderItems}
      length={offers.length}
      type="simple"
    />
  )
}

export default Offers
