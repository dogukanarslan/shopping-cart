import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ReceiptsContextProvider } from './contexts/ReceiptsContext';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { NextUIProvider } from '@nextui-org/react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <ProductsContextProvider>
        <ReceiptsContextProvider>
          <App />
        </ReceiptsContextProvider>
      </ProductsContextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
