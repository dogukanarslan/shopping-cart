import { useContext } from 'react';
import { FiFileText } from 'react-icons/fi';
import { ReceiptsContext } from './contexts/ReceiptsContext';
import { Card, CardBody } from '@nextui-org/react';

const Home = () => {
  const { receipts } = useContext(ReceiptsContext);
  return (
    <div>
      <Card classNames={{ body: 'flex-row items-center' }}>
        <CardBody>
          <FiFileText size={32} />
          <div className="mx-5">
            <h4 className="text-2xl font-semibold">{receipts.length}</h4>
            <div className="text-gray-500">Total Receipts</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
