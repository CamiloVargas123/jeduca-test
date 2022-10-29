import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function OverView() {
  return (
    <>
      <Box as="header" display="flex" justifyContent="end">
        <Button>Logout</Button>
      </Box>
    </>
  )
}
