import { useParams, useHistory } from 'react-router-dom';
import { Button, Divider } from '@nextui-org/react';

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
      <h1 className="font-semibold text-2xl">{receipt.name}</h1>
      <div className="text-sm my-2">{formatDate(receipt.created_at)}</div>

      <div>
        <h2 className="text-lg font-semibold">Receipt Items</h2>
        <Divider/>
        {receipt.items?.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.quantity * item.price}</p>
          </div>
        ))}
      </div>

      <div className='my-2'>
        <h2 className="font-semibold text-lg">Total Price</h2>
        <Divider/>
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
