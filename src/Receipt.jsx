import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Divider,
} from '@nextui-org/react';
import { formatDate } from './utils';

const Receipt = ({ receipt }) => {
  const history = useHistory();

  return (
    <Card>
      <CardHeader>
        <h1 className="font-bold">{receipt.name}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <h2 className="text-xs">Total</h2>
          <p>
            $
            {receipt.items.reduce(
              (total, item) => (total += item.price * item.quantity),
              0
            )}
          </p>
        </div>
        <div>
          <h1 className="text-sm">Created At</h1>
          <p>{formatDate(receipt.created_at)}</p>
        </div>
      </CardBody>
      <CardFooter>
        <Button onClick={() => history.push(`/receipts/${receipt.id}`)}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Receipt;
