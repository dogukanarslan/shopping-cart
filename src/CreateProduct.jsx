import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@nextui-org/react';
import { useProductsContext } from './contexts/ProductsContext';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { createProduct } = useProductsContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createProduct({
      name,
      price,
    });

    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        isRequired
      />
      <Input
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        isRequired
      />

      <Button type="submit">Create Product</Button>
    </form>
  );
};

export default CreateProduct;
