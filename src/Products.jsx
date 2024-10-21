import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from './contexts/ProductsContext';
import Product from './Product';

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

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
