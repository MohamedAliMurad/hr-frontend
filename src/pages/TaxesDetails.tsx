import {   Button, Editable, EditableInput, EditablePreview, Flex, Heading, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, localStorageManager } from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit, AiFillFileAdd} from 'react-icons/ai'
import {  FiChevronRight } from "react-icons/fi";
export default function TaxDetails() {
  return (

    <Flex direction={'column'} >
        <Heading marginRight={'auto'}>egyptian tax </Heading>
        <Flex marginY={'2rem'} width={'100%'} align={'center'} justifyContent={'space-between'} >
            <Flex direction="column">

        <Menu >
  <MenuButton outline={'none'}  as={Button} rightIcon={<FiChevronRight  />}>
    Source
  </MenuButton>
  <MenuList>
    <MenuItem>main tax</MenuItem>
    <MenuItem>part tax</MenuItem>
    <MenuItem> de tax </MenuItem>

  </MenuList>
</Menu>
            </Flex>

            <Stack spacing={4}>
  <InputGroup>
    <InputLeftAddon children='Allowable Limit' />
    <Input type='number' placeholder='12000'  />
  </InputGroup>
</Stack>

<Button colorScheme="blue"  variant={'solid'} >Tax Calculator  </Button>
 </Flex>
        <Flex align={'center'} >

        <Flex direction={'column'}>

<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Taxes master list</TableCaption> */}
    <Thead>
      <Tr>
        <Th>LC</Th>
        <Th>Level Name</Th>
        <Th isNumeric>From</Th>
        <Th isNumeric>To</Th>
        <Th isNumeric>Type</Th>
        <Th isNumeric>Value</Th>
        <Th isNumeric>Actions</Th>

      </Tr>
    </Thead>
    <Tbody maxWidth={'100vw'}overflowY={'scroll'} >
        {Array.from({length:5}).map((_,i)=>(
            <Tr key={i}>
            <Td>{1+i}</Td>
            <Td> {1+i} level </Td>
            <Td isNumeric>
<Editable defaultValue={String(Math.floor(Math.random()*500000))}>
  <EditablePreview />
  <EditableInput type='number' min={0} />
</Editable> </Td>
            <Td isNumeric>
<Editable defaultValue={String(Math.floor(Math.random()*500000))}>
  <EditablePreview />
  <EditableInput type='number' min={0} />
</Editable> </Td>
<Td>
<Select  defaultValue={'%'} placeholder='type'>
  <option value='%'>%</option>
  <option value='value'>value</option>
</Select>
</Td>
<Td isNumeric>
<Editable defaultValue={String(Math.floor(Math.random()*500000))}>
  <EditablePreview />
  <EditableInput type='number' min={0} />
</Editable> </Td>
            <Td isNumeric>
                <Flex cursor={'pointer'}  align={'center'} justify={'center'} justifyContent={'space-between'}>

                    <div>
                    <AiFillDelete/>


                    </div>
                    <div >
                    <AiFillFileAdd />


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
            <Flex direction={'column'}>

        </Flex>
        <Flex  width={'20%'} marginTop={'auto'} marginLeft={'auto'} align={'center'} justifyContent={'space-between'}>
      <Button colorScheme="blue">
Active
      </Button>
      <Button colorScheme="orange">
Inactive
</Button>
    </Flex>
    {/* <Flex width={'20%'} marginTop={'auto'} marginLeft={'auto'} align={'center'} justifyContent={'space-between'}>
      <Button colorScheme="green">
Save
      </Button>
      <Button colorScheme="red">
Cancel
</Button>
    </Flex> */}
        </Flex>

  )
}
