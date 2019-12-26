import React from 'react'
import { connect } from 'react-redux'
import { Heading } from 'rebass'

const Header = ({ metaData }) => {
  return (
    !!metaData?.listTitle && (
      <Heading fontSize={5} m={2} data-testid="heading-title">
        {metaData?.searchRegion?.name}: {metaData?.cursor?.totalCount}{' '}
        {metaData?.listTitle}
      </Heading>
    )
  )
}

const mapStateToProps = ({ offers }) => ({
  metaData: offers.metaData,
})

export default connect(mapStateToProps)(Header)
