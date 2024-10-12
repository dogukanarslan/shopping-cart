import { useParams, useHistory } from 'react-router-dom';
import { Card, CardBody, CardHeader, Button } from '@nextui-org/react';

import { formatDate } from './utils';
import { useContext } from 'react';
import { ReceiptsContext } from './contexts/ReceiptsContext';

export const ReceiptDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const { receipts, setReceipts } = useContext(ReceiptsContext);

  const receipt = receipts?.find((receipt) => receipt.id === parseInt(id));

  const deleteReceipt = (receiptId) => {
    const newReceipts = receipts.filter((receipt) => receipt.id !== receiptId);
    setReceipts(newReceipts);
    history.push('/receipts');
  };

  return (
    <div>
      <Card>
        <CardHeader className="justify-between">
          <h1 className="font-bold">{receipt.name}</h1>
          <h2 className="font-bold">{formatDate(receipt.created_at)}</h2>
        </CardHeader>

        <CardBody>
          <div>
            {receipt.items?.map((item) => (
              <div key={item.id}>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.quantity * item.price}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
      <div>
        <h1 className="font-bold">Total Price</h1>
        <div>
          $
          {receipt.items?.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </div>
      </div>
      <Button color="danger" onClick={() => deleteReceipt(receipt.id)}>
        Delete
      </Button>
    </div>
  );
};
