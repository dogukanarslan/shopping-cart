import React, { useState } from 'react';
import {
  Button,
  Input,
  Box,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const changeItem = (id, name, price) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name, price: parseFloat(price) };
      }

      return item;
    });

    setItems(newItems);
  };

  const addItem = () => {
    setItems((prev) => [...prev, { id: Math.random(), name: '' }]);
  };

  const createReceipt = () => {
    fetch('http://localhost:8000/receipts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, items, created_at: new Date() }),
    });
  };

  return (
    <div>
      <Input
        mb="0.5rem"
        placeholder="Receipt name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NumberInput>
        <NumberInputField
          placeholder="Total price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </NumberInput>
      <Box display="flex" justifyContent="space-between">
        <Button my="0.8rem" onClick={addItem}>
          Add Item
        </Button>
        <Button my="0.8rem" onClick={createReceipt}>
          Create Receipt
        </Button>
      </Box>
      {items.map((item) => (
        <Box mb="10px" key={item.id}>
          <Input
            mb="10px"
            placeholder="Item name"
            value={item.name}
            onChange={(e) => changeItem(item.id, e.target.value, item.price)}
          />
          <NumberInput>
            <NumberInputField
              placeholder="Item price"
              value={item.price}
              onChange={(e) => changeItem(item.id, item.name, e.target.value)}
            />
          </NumberInput>
        </Box>
      ))}
    </div>
  );
};

export default CreateReceipt;
