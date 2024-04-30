import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Container, Input, Textarea, VStack } from '@chakra-ui/react';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, description }),
    }).then(() => {
      setIsRedirected(true);
    });
  };

  if (isRedirected) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <VStack spacing="5">
          <Input
            focusBorderColor="cyan.700"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            focusBorderColor="cyan.700"
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <Textarea
            focusBorderColor="cyan.700"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>

          {!isPosting && <Button type="submit">Create</Button>}
          {isPosting && (
            <Button type="submit" disabled={isPosting}>
              Creating
            </Button>
          )}
        </VStack>
      </form>
    </Container>
  );
};

export default NewProduct;
