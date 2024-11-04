import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { ReceiptsContext } from './contexts/ReceiptsContext';
import { ProductsContext } from './contexts/ProductsContext';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const { receipts, setReceipts } = useContext(ReceiptsContext);
  const { products } = useContext(ProductsContext);

  const history = useHistory('');

  const addItem = (productId, name, price, quantity) => {
    setItems((prev) => [
      ...prev,
      {
        id: Math.random(),
        productId,
        name,
        price,
        quantity,
      },
    ]);
  };

  const handleProductClick = (product) => {
    const isProductAdded = items.some((item) => item.productId === product.id);

    if (isProductAdded) {
      setItems((prev) =>
        prev.map((item) => {
          if (item.productId === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      addItem(product.id, product.name, product.price, 1);
    }
  };

  const createReceipt = async (e) => {
    e.preventDefault();

    setReceipts([
      ...receipts,
      {
        id: Math.floor(Math.random() * 1000),
        name,
        items,
        created_at: new Date(),
      },
    ]);

    history.push('/receipts');
  };

  return (
    <>
      <form onSubmit={createReceipt}>
        <Input
          label="Receipt  Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isRequired
        />

        <div className="my-2">
          <h4 className="font-medium">Products</h4>
          <div className="mb-2 flex gap-2">
            {products.map((product) => (
              <Button
                key={product.id}
                type="button"
                size="sm"
                radius="full"
                onClick={() => handleProductClick(product)}
              >
                {product.name}
              </Button>
            ))}
          </div>
          <Link className="text-sm" to="/products/create">
            Add new product
          </Link>
        </div>

        <h1 className="font-medium">Items</h1>
        {items.length === 0 ? (
          'No item added'
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <Card key={item.id}>
                <CardBody>
                  <h1 className="font-bold">{item.name}</h1>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: {item.quantity * item.price}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
        <Button type="submit" className="mt-2 flex">
          Create Receipt
        </Button>
      </form>
    </>
  );
};

export default CreateReceipt;
