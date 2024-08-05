import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Input,
  Box,
  NumberInput,
  NumberInputField,
  VStack,
  Text,
  Card,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const history = useHistory('');

  const addItem = (e) => {
    e.preventDefault();

    setItems((prev) => [
      ...prev,
      {
        id: Math.random(),
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
      },
    ]);

    setItemName('');
    setItemPrice('');
    setItemQuantity('');
  };

  const createReceipt = async (e) => {
    e.preventDefault();
    const receipts = JSON.parse(localStorage.getItem('receipts') || '[]');
    localStorage.setItem(
      'receipts',
      JSON.stringify([
        ...receipts,
        {
          id: Math.floor(Math.random() * 1000),
          name,
          items,
          created_at: new Date(),
        },
      ])
    );

    history.push('/receipts');
  };

  return (
    <>
      <form onSubmit={createReceipt}>
        <FormControl isRequired>
          <FormLabel>Receipt Name</FormLabel>
          <Input
            mb="0.5rem"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <Box display="flex" justifyContent="end">
          <Button type="submit">Create Receipt</Button>
        </Box>
      </form>

      <form onSubmit={addItem}>
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={itemName}
              mb="10px"
              onChange={(e) => setItemName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <NumberInput
              mb="10px"
              value={itemPrice}
              onChange={(num) => setItemPrice(num)}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Quantity</FormLabel>
            <NumberInput
              mb="10px"
              value={itemQuantity}
              onChange={(num) => setItemQuantity(num)}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <Button type="submit">Add Item</Button>
        </Box>
      </form>

      <Heading size="md">Receipt Items</Heading>
      {items.length === 0 ? (
        'No item added'
      ) : (
        <VStack spacing={2}>
          {items.map((item) => (
            <Card key={item.id} w="100%" variant="outline" size="sm">
              <CardBody>
                <Heading size="md">{item.name}</Heading>
                <Text>Price: {item.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Total: {item.quantity * item.price}</Text>
              </CardBody>
            </Card>
          ))}
        </VStack>
      )}
    </>
  );
};

export default CreateReceipt;
