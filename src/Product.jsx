import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { formatDate } from './utils';

const Product = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <h1 className="font-bold">{product.name}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <h2 className="text-xs">Price</h2>
          <p>${product.price}</p>
        </div>
        <div>
          <h1 className="text-sm">Created At</h1>
          <p>{formatDate(product.created_at)}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Product;
