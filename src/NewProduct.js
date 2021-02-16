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
    <div className="product-new">
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
        <label>Quantity</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
        <label>Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
        {!isPosting && <button>Create</button>}
        {isPosting && <button disabled={isPosting}>Creating</button>}
      </form>
    </div>
  );
};

export default NewProduct;
