import { Link } from 'react-router-dom';
import { useProductsContext } from './contexts/ProductsContext';
import Product from './Product';

export const Products = () => {
  const { products } = useProductsContext();
  if (products.length === 0) {
    return (
      <div>
        <p>You do not have any products yet.</p>
        <Link to="/products/create">Create a new one!</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
