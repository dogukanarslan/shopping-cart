import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Input } from '@nextui-org/react';
import { ProductsContext } from './contexts/ProductsContext';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { setProducts } = useContext(ProductsContext);

  const history = useHistory('');

  const createProduct = async (e) => {
    e.preventDefault();

    setProducts((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        name,
        price,
        created_at: new Date(),
      },
    ]);

    history.push('/products');
  };

  return (
    <form onSubmit={createProduct} className="space-y-2">
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
