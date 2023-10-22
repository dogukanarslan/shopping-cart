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
      <div className="row justify-content-center">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price} TL</p>
              <p className="card-text">{product.quantity} Adet</p>
              <p className="card-text">{product.description}</p>
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
