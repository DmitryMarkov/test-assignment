import React from 'react'
import { connect } from 'react-redux'
import { Box, Button, Card, Image, Heading, Text } from 'rebass'
import { changeTestValue } from '../store/actions/test.action'

const Test = ({ changeTestValue, test }) => {
  return (
    <Box width={256}>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }}
      >
        <Image src="https://img.holidu.com/images/2691944d-d1ba-4a8a-8b30-4f50d1d75156/t.jpg" />
        <Box px={2}>
          <Heading as="h3">Title</Heading>
          <Text fontSize={0}>{test}</Text>
          <Button onClick={() => changeTestValue('changed')}>Click me</Button>
        </Box>
      </Card>
    </Box>
  )
}

const mapStateToProps = state => ({
  test: state.test.test,
})

const mapDispatchToProps = {
  changeTestValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
