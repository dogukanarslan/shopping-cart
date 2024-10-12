import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from './contexts/ProductsContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);
  if (products.length === 0) {
    return (
      <div>
        <p>You do not have any products yet.</p>
        <Link to="/products/create">Create a new one!</Link>
      </div>
    );
  }

  return <div>Products</div>;
};
