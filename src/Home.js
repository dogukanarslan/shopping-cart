import { useState } from 'react';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Coffee',
      price: 10,
      quantity: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt neque sed magna egestas, eget volutpat felis ullamcorper. Vestibulum sagittis.'
    },
    {
      id: 2,
      name: 'Water',
      price: 1,
      quantity: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique, diam vel luctus accumsan, lacus lorem ornare libero, sed ultrices.'
    }
  ]);

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
      <ul>
        <ProductList products={products} addToCart={addToCart} />
      </ul>
    </div>
  );
};

export default Home;
