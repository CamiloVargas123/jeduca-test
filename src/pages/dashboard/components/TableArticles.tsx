import { PlusSquareIcon } from '@chakra-ui/icons'
import { Heading, IconButton, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArticle, selectArticles } from 'src/redux/slices/article'
import { selectUserData } from 'src/redux/slices/user'

export default function TableArticles() {
  const dispatch = useDispatch()
  const articles = useSelector(selectArticles)
  const user = useSelector(selectUserData)

  useEffect(() => {
    let articles = localStorage.getItem('articles')
    if (articles) {
      let formmated = JSON.parse(articles)
      dispatch(addArticle(formmated))
    }
  }, [])

  function handleBuy(){

  }
  
  if (!articles.length) return <Heading>No hay productos en venta</Heading>
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Descripción</Th>
            <Th isNumeric>Precio</Th>
            <Th isNumeric>Precio de puja</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            articles.map(item => (
              <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.description}</Td>
                <Td>{item.initialPrice}</Td>
                <Td>{item.bidPrice}</Td>
                <Td>
                  <IconButton aria-label='buy' colorScheme="green" disabled={item.userId === user.id} icon={<PlusSquareIcon />} onClick={handleBuy} />
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
