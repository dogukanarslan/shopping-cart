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
        <h2 className="font-medium text-neutral-500">Receipt Items</h2>
        <Divider className="mt-4" />
        {receipt.items?.map((item) => (
          <div
            key={item.id}
            className="text-small py-4 border-divider border-b"
          >
            <h4 className="font-medium">{item.name}</h4>
            <p>
              ${item.price} x {item.quantity}
            </p>
          </div>
        ))}
      </div>
      <div className="my-5 flex items-center gap-x-4 text-sm font-semibold">
        <h2 className="text-neutral-500">Total</h2>
        <div>
          $
          {receipt.items?.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}
        </div>
      </div>
      <Button
        color="danger"
        variant="flat"
        onClick={() => deleteReceipt(receipt.id)}
      >
        Delete
      </Button>
    </div>
  );
};
