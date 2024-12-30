import { createContext, useCallback, useContext, useState } from 'react';
import { request } from '../request';

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const products = await request('/api/products');
    setProducts(products.products);
  }, [setProducts]);

  const createProduct = async (body) => {
    await request('/api/products', 'POST', body);
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, getProducts, createProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
