import { useParams, Redirect } from 'react-router-dom';
import useFetch from './useFetch';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error, setData } = useFetch(
    `http://localhost:8000/products/${id}`
  );
  const [isRedirected, setIsRedirected] = useState(false);

  const handleDelete = (e) => {
    fetch(`http://localhost:8000/products/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setIsRedirected(true);
    });
  };

  if (isRedirected) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDetail;
