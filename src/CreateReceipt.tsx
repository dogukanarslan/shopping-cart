import React, { useState } from 'react';
import { Button, Input, Box } from '@chakra-ui/react';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const changeItemName = (id: number, name: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name };
      }

      return item;
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, { id: Math.random() }]);
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
      <Input
        placeholder="Total price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
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
            value={item.name}
            onChange={(e) => changeItemName(item.id, item.name)}
          />
        </Box>
      ))}
    </div>
  );
};

export default CreateReceipt;
