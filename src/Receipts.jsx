import { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import ReceiptList from './ReceiptList';
import { ReceiptsContext } from './context/ReceiptsContext';

export const Receipts = () => {
  const { receipts } = useContext(ReceiptsContext);

  return (
    <SimpleGrid columns={4} spacing={5}>
      <ReceiptList receipts={receipts} />
    </SimpleGrid>
  );
};
