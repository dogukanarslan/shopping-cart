import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { ReceiptsContextProvider } from './contexts/ReceiptsContext';
import { ProductsContextProvider } from './contexts/ProductsContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ProductsContextProvider>
        <ReceiptsContextProvider>
          <App />
        </ReceiptsContextProvider>
      </ProductsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
