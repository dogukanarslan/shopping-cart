import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Input, Card, CardBody } from '@nextui-org/react';
import { ReceiptsContext } from './contexts/ReceiptsContext';

const CreateReceipt = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const { receipts, setReceipts } = useContext(ReceiptsContext);

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
          mb="0.5rem"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" className="my-2">
          Create Receipt
        </Button>
      </form>

      <form onSubmit={addItem}>
        <div className="space-y-2">
          <Input
            label="Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <Input
            label="Price"
            value={itemPrice}
            onChange={(num) => setItemPrice(num)}
          />

          <Input
            label="Quantity"
            value={itemQuantity}
            onChange={(num) => setItemQuantity(num)}
          />

          <Button type="submit">Add Item</Button>
        </div>
      </form>

      <h1>Receipt Items</h1>
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
    </>
  );
};

export default CreateReceipt;
