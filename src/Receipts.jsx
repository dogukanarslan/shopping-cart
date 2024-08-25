import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as ChakraLink, SimpleGrid, Text, Box } from '@chakra-ui/react';

import ReceiptList from './ReceiptList';
import { ReceiptsContext } from './contexts/ReceiptsContext';

export const Receipts = () => {
  const { receipts } = useContext(ReceiptsContext);

  if (receipts.length === 0) {
    return (
      <Box>
        <Text size="lg">You do not have any receipts yet.</Text>
        <ChakraLink as={Link} to="/receipts/create">
          Create a new one!
        </ChakraLink>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={4} spacing={5}>
      <ReceiptList receipts={receipts} />
    </SimpleGrid>
  );
};
