const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <li className="product-preview" key={product.id}>
            <p>
              {product.name} ({product.quantity})
            </p>
            <button onClick={() => addToCart(product.id)}>Add</button>
          </li>
        );
      })}
    </div>
  );
};

export default ProductList;
