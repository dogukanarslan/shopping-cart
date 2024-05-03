import React, { useState } from 'react';
import {
  Button,
  Input,
  Box,
  NumberInput,
  NumberInputField,
  VStack,
  Text,
  Stack,
  Card,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import useFetch from './useFetch';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const { data: products, isLoading } = useFetch(
    'http://localhost:8000/products'
  );

  const changeItem = (id, name, price, quantity) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name,
          price: parseFloat(price),
          quantity: parseFloat(quantity),
        };
      }

      return item;
    });

    setItems(newItems);
  };

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

  const addSelectedProduct = (product) => {
    setItems((prev) => [
      ...prev,
      {
        id: Math.random(),
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    ]);
  };

  const createReceipt = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/receipts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, items, created_at: new Date() }),
    });
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

        <Box my={2}>
          {isLoading ? (
            'Fetching products'
          ) : (
            <>
              <Heading size="md">Products</Heading>
              <Stack direction="row">
                {products.map((product) => (
                  <Button
                    isDisabled={items.some(
                      (item) => item.name === product.name
                    )}
                    key={product.id}
                    size="sm"
                    onClick={() => addSelectedProduct(product)}
                  >
                    {product.name}
                  </Button>
                ))}
              </Stack>
            </>
          )}
        </Box>

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
