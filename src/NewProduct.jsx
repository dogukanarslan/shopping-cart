import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, quantity, description })
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
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center">
              {!isPosting && (
                <button className="btn btn-secondary">Create</button>
              )}
              {isPosting && (
                <button className="btn btn-secondary" disabled={isPosting}>
                  Creating
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
