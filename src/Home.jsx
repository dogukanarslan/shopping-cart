import { Card, CardBody } from '@nextui-org/react';
import { FiFile, FiTv } from 'react-icons/fi';

import { useReceiptsContext } from './contexts/ReceiptsContext';
import { useProductsContext } from './contexts/ProductsContext';

const Home = () => {
  const { receipts } = useReceiptsContext();
  const { products } = useProductsContext();

  return (
    <div className="space-y-2">
      <Card classNames={{ body: 'flex-row items-center' }}>
        <CardBody>
          <FiFile size={32} />
          <div className="mx-5">
            <h4 className="text-2xl font-semibold">{receipts.length}</h4>
            <div className="text-gray-500">Total Receipts</div>
          </div>
        </CardBody>
      </Card>
      <Card classNames={{ body: 'flex-row items-center' }}>
        <CardBody>
          <FiTv size={32} />
          <div className="mx-5">
            <h4 className="text-2xl font-semibold">{products.length}</h4>
            <div className="text-gray-500">Total Products</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
