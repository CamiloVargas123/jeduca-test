import { Alert, AlertIcon, AlertTitle, Box, Button, FormControl, FormHelperText, Heading, Input, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Articles } from "src/models";
import { addArticle } from "src/redux/slices/article";
import { selectUserData } from "src/redux/slices/user";

export default function SellArticle() {
  const { register, handleSubmit, formState: { errors } } = useForm<Articles>()
  const [invlaidArticle, setInvlaidArticle] = useState(false)
  const dispatch = useDispatch()
  const toast = useToast()
  const user = useSelector(selectUserData)

  function onSubmit(data: Articles) {
    if (user.id) data.userId = user.id
    let articles = localStorage.getItem('articles')
    if (articles) {
      let formmated = JSON.parse(articles)
      if (formmated.find(item => item.name === data.name)) return setInvlaidArticle(true)
      formmated.push(data)
      setInvlaidArticle(false)
      dispatch(addArticle(formmated))
      return toast({
        title: 'Producto en oferta.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    }
    if (!articles) {
      localStorage.setItem("articles", JSON.stringify([{ ...data }]))
      dispatch(addArticle([{ ...data }]))
      setInvlaidArticle(false)
      return toast({
        title: 'Producto en oferta.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    }
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
      {
        invlaidArticle &&
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Ya existe este producto en venta</AlertTitle>
        </Alert>
      }
    </VStack>
  )
}