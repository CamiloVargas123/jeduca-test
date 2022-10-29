import { Box, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function LoginOrRegister() {
  return (
    <Center mt={10}>
      <Box padding={4}>
        <Outlet />
      </Box>
    </Center>
  )
}
