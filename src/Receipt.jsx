import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';
import { formatDate } from './utils';

const Receipt = ({ receipt }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <h1 className="font-bold">{receipt.name}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <h2 className="text-xs">Total</h2>
          <p>${receipt.total}</p>
        </div>
        <div>
          <h1 className="text-sm">Created At</h1>
          <p>{formatDate(receipt.created_at)}</p>
        </div>
      </CardBody>
      <CardFooter>
        <Button onPress={() => navigate(`/receipts/${receipt.id}`)}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Receipt;
