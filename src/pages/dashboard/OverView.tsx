import { Box, Button, Center } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { PathName } from 'src/const'
import { logoutUser } from 'src/redux/slices/user'

export default function OverView() {
  const dispath = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <Box as="header" display="flex" gap={10} justifyContent="end" padding={2} bgColor="blue.200">
        <Button colorScheme="green" variant="solid" onClick={() => navigate(PathName.dashboard.sell)}>Vender</Button>
        <Button colorScheme="blue" variant="solid" onClick={() => dispath(logoutUser())}>Logout</Button>
      </Box>
      <Center mt={10}>
        <Outlet />
      </Center>
    </>
  )
}
