import { SimpleGrid, Box, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ReceiptList from './ReceiptList';
import { getDB } from './db';

export const Receipts = () => {
  const receipts = getDB('receipts') || [];

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
