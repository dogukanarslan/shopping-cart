import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <li className="product-preview" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <p>
                {product.name} ({product.quantity})
              </p>
            </Link>
            <button onClick={() => addToCart(product.id)}>Add</button>
          </li>
        );
      })}
    </div>
  );
};

export default ProductList;
