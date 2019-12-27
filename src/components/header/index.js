import React from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { Heading } from 'rebass'

const headerSelector = createSelector(
  ({ offers }) => offers.metaData,
  metaData => ({
    listTitle: metaData?.listTitle,
    name: metaData?.searchRegion?.name,
    totalCount: metaData?.cursor?.totalCount,
  })
)

const Header = React.memo(() => {
  const { listTitle, name, totalCount } = useSelector(headerSelector)

  return (
    name && (
      <Heading as="h1" fontSize={4} m={3} data-testid="heading-title">
        {name}: {totalCount} {listTitle}
      </Heading>
    )
  )
})

export default Header
