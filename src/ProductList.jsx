import Product from './Product';

const ProductList = ({ products }) =>
  products.map((product) => <Product key={product.id} product={product} />);

export default ProductList;
