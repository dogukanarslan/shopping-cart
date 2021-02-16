import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error, setData } = useFetch(
    `http://localhost:8000/products/${id}`
  );
  return (
    <div>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
