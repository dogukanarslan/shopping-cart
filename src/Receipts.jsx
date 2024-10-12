import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ReceiptList from './ReceiptList';
import { ReceiptsContext } from './contexts/ReceiptsContext';

export const Receipts = () => {
  const { receipts } = useContext(ReceiptsContext);

  if (receipts.length === 0) {
    return (
      <div>
        <p>You do not have any receipts yet.</p>
        <Link to="/receipts/create">Create a new one!</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <ReceiptList receipts={receipts} />
    </div>
  );
};
