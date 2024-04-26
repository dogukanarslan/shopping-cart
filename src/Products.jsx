import React from 'react';
import { Spinner } from '@chakra-ui/react';
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

  return <ProductList products={products} />;
};

export default Products;
