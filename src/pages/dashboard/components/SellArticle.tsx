import { Box, Button, FormControl, FormHelperText, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Articles } from "src/models";

export default function SellArticle() {
  const { register, handleSubmit, formState: { errors } } = useForm<Articles>()

  function onSubmit(data: Articles) {
    console.log("🚀 ~ file: sellArticle.tsx ~ line 9 ~ onSubmit ~ data", data)
  }

  return (
    <VStack spacing={6}>
      <Heading>Vender producto</Heading>
      <Box as="form" display="flex" flexDir="column" gap={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input placeholder="Nombre del producto" {...register("name", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('name') && <FormHelperText textAlign="end" color={"red.500"}>{errors.name?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input placeholder="Precio inicial" {...register("initialPrice", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('initialPrice') && <FormHelperText textAlign="end" color={"red.500"}>{errors.initialPrice?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input placeholder="Precio de puja" {...register("bidPrice", {
            required: "Campo requerido"
          })} />
          {errors.hasOwnProperty('bidPrice') && <FormHelperText textAlign="end" color={"red.500"}>{errors.bidPrice?.message}</FormHelperText>}
        </FormControl>
        <FormControl>
          <Input placeholder="Descripción" {...register("description")} />
        </FormControl>

        <Button type="submit" colorScheme='green'>Vender</Button>
      </Box>
    </VStack>
  )
}