import { Spinner } from '@chakra-ui/react';
import ProductList from './ProductList';
import useFetch from './useFetch';

const Home = ({ cartItems, setCartItems }) => {
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

  return <ProductList products={products} cartItems={cartItems} />;
};

export default Home;
