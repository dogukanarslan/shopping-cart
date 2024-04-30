import { SimpleGrid, Box, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ReceiptList from './ReceiptList';
import useFetch from './useFetch';

export const Receipts = () => {
  const {
    data: receipts,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/receipts');

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return error;
  }

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
