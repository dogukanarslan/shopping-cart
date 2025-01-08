import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Divider, useDisclosure } from '@nextui-org/react';

import { formatDate } from './utils';
import { useReceiptsContext } from './contexts/ReceiptsContext';
import EditReceiptModal from './components/EditReceiptModal';
import DeleteReceiptModal from './components/DeleteReceiptModal';

export const ReceiptDetail = () => {
  const { id } = useParams();

  const { receiptDetail, showReceipt } = useReceiptsContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure();

  useEffect(() => {
    showReceipt(id);
  }, [showReceipt, id]);

  if (!receiptDetail) {
    return;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">{receiptDetail.name}</h1>
      <div className="my-2 text-sm">{formatDate(receiptDetail.created_at)}</div>

      <div>
        <h2 className="font-medium text-neutral-500">Receipt Items</h2>
        <Divider className="mt-4" />
        {receiptDetail.items?.map((item) => (
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
        <div>${receiptDetail.total}</div>
      </div>
      <Button color="danger" variant="flat" onPress={onDeleteOpen}>
        Delete
      </Button>
      <Button className="ml-2" variant="flat" onPress={onOpen}>
        Edit
      </Button>
      <EditReceiptModal
        receipt={receiptDetail}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <DeleteReceiptModal
        receipt={receiptDetail}
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
      />
    </div>
  );
};
