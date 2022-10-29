import { Alert, AlertIcon, AlertTitle, Box, Button, FormControl, FormHelperText, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PathName } from "src/const"
import { User } from "src/models"
import { loginUser } from "src/redux/slices/user"

export default function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<Partial<User>>()
  const [invalidUser, setInvalidUser] = useState(false)
  const dispath = useDispatch()
  const navigate = useNavigate()

  function onSubmit(data: User) {
    let users = localStorage.getItem('users')
    if (users) {
      const formmated = JSON.parse(users)
      const user = formmated.find(item => item.userName === data.userName && item.password === data.password)
      if (user) return dispath(loginUser(user))
      return setInvalidUser(true)
    }
  }

  return (
    <VStack spacing={6}>
      <Heading>Acceder</Heading>
      <Box as="form" display="flex" flexDir="column" gap={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input placeholder="Usuario" {...register("userName", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('userName') && <FormHelperText textAlign="end" color={"red.500"}>{errors.userName?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input placeholder="Clave" {...register("password", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('password') && <FormHelperText textAlign="end" color={"red.500"}>{errors.password?.message}</FormHelperText>}
        </FormControl>

        <Button type="submit" colorScheme='blue'>Acceder</Button>
      </Box>
      {
        invalidUser &&
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Credenciales incorrectas</AlertTitle>
        </Alert>
      }
      <Text cursor="pointer" onClick={() => navigate(PathName.home.register)}>Ó registrarse</Text>
    </VStack>
  )
}
