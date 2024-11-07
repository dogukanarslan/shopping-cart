import { Link } from 'react-router-dom';

import ReceiptList from './ReceiptList';
import { useReceiptsContext } from './contexts/ReceiptsContext';

export const Receipts = () => {
  const { receipts } = useReceiptsContext();

  if (receipts.length === 0) {
    return (
      <div>
        <p>You do not have any receipts yet.</p>
        <Link to="/receipts/create">Create a new one!</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-4">
      <ReceiptList receipts={receipts} />
    </div>
  );
};
