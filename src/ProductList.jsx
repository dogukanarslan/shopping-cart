import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container">
      <ul className="list-group w-60 m-auto">
        {products.map((product) => {
          return (
            <li
              className="list-group-item"
              key={product.id}
            >
              <div className="d-flex justify-content-between align-items-center">
                <Link
                  to={`/products/${product.id}`}
                  className="text-decoration-none text-dark fs-2"
                >
                  <p className="">{product.name}</p>
                </Link>
                <span className="badge bg-primary">{product.quantity}</span>
              </div>

              <button
                className="btn btn-sm btn-secondary"
                onClick={() => addToCart(product.id)}
              >
                Add
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
