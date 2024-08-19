import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Box } from '@chakra-ui/react';

import ReceiptList from './ReceiptList';
import { ReceiptsContext } from './context/ReceiptsContext';

export const Receipts = () => {
  const { receipts } = useContext(ReceiptsContext);

  return (
    <SimpleGrid columns={4} spacing={5}>
      <ReceiptList receipts={receipts} />
      <Box
        border="1px"
        borderColor="gray.100"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/receipts/create">New Receipt</Link>
      </Box>
    </SimpleGrid>
  );
};
