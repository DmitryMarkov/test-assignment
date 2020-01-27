import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Heading, Text } from 'rebass'

const Offer = React.memo(() => {
  let { id } = useParams()
  const history = useHistory()

  return (
    <>
      <Heading as="h1" data-testid="heading-title" fontSize={4} m={3}>
        Details page for id: {id}
      </Heading>
      <Text m={3} pt={3}>
        Details to be done
      </Text>
      <Button m={3} onClick={() => history.push('/')}>
        Go Back
      </Button>
    </>
  )
})

export default Offer
