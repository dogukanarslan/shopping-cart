import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react';
import { formatDate } from './utils';
import { useContext } from 'react';
import { ProductsContext } from './contexts/ProductsContext';

const Product = ({ product }) => {
  const { setProducts } = useContext(ProductsContext);

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

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
      <CardFooter>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
