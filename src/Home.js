import { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetch failed');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message)
      });
  }, []);

  const addToCart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        if (product.quantity > 0) {
          product.quantity--;
        } else {
          alert('Out of stock!');
        }
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <ul>
        <ProductList products={products} addToCart={addToCart} />
      </ul>
    </div>
  );
};

export default Home;
