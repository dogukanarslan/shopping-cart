import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  useDisclosure,
} from '@nextui-org/react';
import { formatDate } from './utils';
import { useContext } from 'react';
import { ProductsContext } from './contexts/ProductsContext';
import EditProductModal from './components/EditProductModal';

const Product = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setProducts } = useContext(ProductsContext);

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  return (
    <>
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
        <CardFooter className="gap-2">
          <Button color="danger" variant="flat" onClick={handleDelete}>
            Delete
          </Button>
          <Button onClick={onOpen}>Edit</Button>
        </CardFooter>
      </Card>
      <EditProductModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        product={product}
      />
    </>
  );
};

export default Product;
