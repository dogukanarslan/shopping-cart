import Receipt from './Receipt';

const ReceiptList = ({ receipts }) => {
  return receipts.map((receipt) => (
    <Receipt key={receipt.id} receipt={receipt} />
  ));
};

export default ReceiptList;
