import Receipt from './Receipt';

const ReceiptList = ({ receipts }) =>
  receipts.map((receipt) => <Receipt key={receipt.id} receipt={receipt} />);

export default ReceiptList;
