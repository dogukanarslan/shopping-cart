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
    <div className="container">
      <div class="row justify-content-center">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.price} TL</p>
              <p class="card-text">{product.quantity} Adet</p>
              <p class="card-text">{product.description}</p>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
