import { Box, Button, FormControl, FormHelperText, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { User } from "src/models";

export default function FormRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm<User>()

  function onSubmit(data: User) {
    console.log(data)
  }
  return (
    <VStack spacing={6}>
      <Heading>Registrarse</Heading>
      <Box as="form" display="flex" flexDir="column" gap={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input type="number" placeholder="Identificaión" {...register("id", {
            required: "Campo requerido",
            max: { value: 1000, message: "Máximo 1000" },
            min: { value: 1, message: "Mínimo 1" }
          })} />
          {errors.hasOwnProperty('id') && <FormHelperText textAlign="end" color={"red.500"}>{errors.id?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input placeholder="Nombres" {...register("fullName", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('fullName') && <FormHelperText textAlign="end" color={"red.500"}>{errors.fullName?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input type="number" placeholder="Tarjeta de crédito" {...register("cardNumber", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('cardNumber') && <FormHelperText textAlign="end" color={"red.500"}>{errors.cardNumber?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input type="number" placeholder="Saldo" {...register("cash", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('cash') && <FormHelperText textAlign="end" color={"red.500"}>{errors.cash?.message}</FormHelperText>}
        </FormControl>
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

        <Button type="submit" colorScheme='blue'>Registrarse</Button>
      </Box>
    </VStack>
  )
}