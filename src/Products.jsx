import React from 'react';
import { Box, SimpleGrid, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import useFetch from './useFetch';

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/products');

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return error;
  }

  return (
    <SimpleGrid columns={4} spacing={5}>
      <ProductList products={products} />
      <Box
        border="1px"
        borderColor="gray.100"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/products/create">New Product</Link>
      </Box>
    </SimpleGrid>
  );
};

export default Products;
