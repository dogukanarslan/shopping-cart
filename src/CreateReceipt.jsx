import React, { useState } from 'react';
import {
  Button,
  Input,
  Box,
  NumberInput,
  NumberInputField,
  VStack,
  StackDivider,
  Stack,
} from '@chakra-ui/react';
import useFetch from './useFetch';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

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

  const addItem = () => {
    setItems((prev) => [...prev, { id: Math.random(), name: '' }]);
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
    <form onSubmit={createReceipt}>
      <Input
        mb="0.5rem"
        placeholder="Receipt name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Box display="flex" justifyContent="space-between">
        <Button onClick={addItem}>Add Item</Button>
        <Button type="submit">Create Receipt</Button>
      </Box>
      <Box my={5}>
        {isLoading ? (
          'Fetching products'
        ) : (
          <Stack direction="row">
            {products.map((product) => (
              <Button
                key={product.id}
                size="sm"
                onClick={() => addSelectedProduct(product)}
              >
                {product.name}
              </Button>
            ))}
          </Stack>
        )}
      </Box>

      {items.length === 0 ? (
        'No item added'
      ) : (
        <VStack spacing={10} divider={<StackDivider />}>
          {items.map((item) => (
            <Box key={item.id} w="100%">
              <Input
                mb="10px"
                placeholder="Item name"
                value={item.name}
                onChange={(e) =>
                  changeItem(item.id, e.target.value, item.price)
                }
              />
              <NumberInput
                mb="10px"
                value={item.price}
                onChange={(e) => changeItem(item.id, item.name, e.target.value)}
              >
                <NumberInputField placeholder="Item price" />
              </NumberInput>
              <NumberInput
                value={item.quantity}
                onChange={(e) =>
                  changeItem(item.id, item.name, item.price, e.target.value)
                }
              >
                <NumberInputField placeholder="Item quantity" />
              </NumberInput>
            </Box>
          ))}
        </VStack>
      )}
    </form>
  );
};

export default CreateReceipt;
