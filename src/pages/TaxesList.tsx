import {   Button, Flex, Heading, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import {AiFillCalculator, AiFillCheckSquare, AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {  FiChevronRight } from "react-icons/fi";
export default function TaxesList() {
  return (
    <Flex direction={'column'} >
        <Flex marginY={'2rem'} width={'100%'} align={'center'} justifyContent={'space-between'}>
        <Menu >
  <MenuButton outline={'none'}  as={Button} rightIcon={<FiChevronRight  />}>
    Columns select
  </MenuButton>
  <MenuList>
    <MenuItem>tax type name</MenuItem>
    <MenuItem>Tax exemption limit</MenuItem>
    <MenuItem>Employees</MenuItem>

  </MenuList>
</Menu>
<Button >Search  & Filter  </Button>
<Button > Filter  </Button>
<Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='Tax Name' />
    <Input type='text' placeholder=' tax term to search' />
  </InputGroup>
</Stack>
 </Flex>
        <Flex align={'center'} >

        <Flex direction={'column'}>
        <Heading marginRight={'auto'} textTransform={'capitalize'} >Taxes master List</Heading>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Taxes master list</TableCaption> */}
    <Thead>
      <Tr>
        <Th>TTC</Th>
        <Th>tax type name</Th>
        <Th isNumeric>number of levels</Th>
        <Th isNumeric>Tax exemption limit</Th>
        <Th isNumeric>Employees</Th>
        <Th isNumeric>Actions</Th>

      </Tr>
    </Thead>
    <Tbody maxWidth={'100vw'}overflowY={'scroll'} >
        {Array.from({length:5}).map((_,i)=>(
            <Tr key={i}>
            <Td>{1+i}</Td>
            <Td>egyptian income tax</Td>
            <Td isNumeric>{Math.floor(Math.random()*10)}</Td>
            <Td isNumeric>{Math.floor(Math.random()*50000)} LE</Td>
            <Td isNumeric>{Math.floor(Math.random()*100)}</Td>
            <Td isNumeric>
                <Flex cursor={'pointer'}  align={'center'} justify={'center'} justifyContent={'space-between'}>
                    <div >
                    <AiFillEdit />


                    </div>
                    <div>
                    <AiFillDelete/>


                    </div>
                    <div>
                    <AiFillCheckSquare/>


                    </div>
                    <div>
                    <AiFillCalculator/>


                    </div>


                </Flex>
            </Td>

          </Tr>
        ))
        }

    </Tbody>
    <Tfoot>
      <Tr>
        {/* <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th> */}
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Flex>
        </Flex>

        </Flex>

  )
}
