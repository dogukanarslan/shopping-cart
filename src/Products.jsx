import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as ChakraLink, Text, Box } from '@chakra-ui/react';
import { ProductsContext } from './contexts/ProductsContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);
  if (products.length === 0) {
    return (
      <Box>
        <Text size="lg">You do not have any products yet.</Text>
        <ChakraLink as={Link} to="/products/create">
          Create a new one!
        </ChakraLink>
      </Box>
    );
  }

  return <div>Products</div>;
};
