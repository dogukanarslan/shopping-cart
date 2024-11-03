import { useParams } from 'react-router-dom';
import { Button, Divider, useDisclosure } from '@nextui-org/react';

import { formatDate } from './utils';
import { useContext } from 'react';
import { ReceiptsContext } from './contexts/ReceiptsContext';
import EditReceiptModal from './components/EditReceiptModal';
import DeleteReceiptModal from './components/DeleteReceiptModal';

export const ReceiptDetail = () => {
  const { id } = useParams();

  const { receipts } = useContext(ReceiptsContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure();

  const receipt = receipts?.find((receipt) => receipt.id === parseInt(id));

  return (
    <div>
      <h1 className="text-2xl font-semibold">{receipt.name}</h1>
      <div className="my-2 text-sm">{formatDate(receipt.created_at)}</div>

      <div>
        <h2 className="font-medium text-neutral-500">Receipt Items</h2>
        <Divider className="mt-4" />
        {receipt.items?.map((item) => (
          <div
            key={item.id}
            className="border-b border-divider py-4 text-small"
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
      <Button color="danger" variant="flat" onClick={onDeleteOpen}>
        Delete
      </Button>
      <Button className="ml-2" variant="flat" onClick={onOpen}>
        Edit
      </Button>
      <EditReceiptModal
        receipt={receipt}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <DeleteReceiptModal
        receipt={receipt}
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
      />
    </div>
  );
};
