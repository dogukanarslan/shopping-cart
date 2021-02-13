import { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
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
      <h2>Homepage</h2>
      {isLoading && <div>Loading...</div>}
      <ul>
        <ProductList products={products} addToCart={addToCart} />
      </ul>
    </div>
  );
};

export default Home;
