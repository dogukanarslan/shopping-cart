import { NextUIProvider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

import { ReceiptsContextProvider } from './contexts/ReceiptsContext';
import { ProductsContextProvider } from './contexts/ProductsContext';
import { AuthContextProvider } from './contexts/AuthContext';

export function Providers({ children }) {
  const navigate = useNavigate();

  return (
    <NextUIProvider
      navigate={navigate}
      validationBehavior="native"
      className="h-full"
    >
      <AuthContextProvider>
        <ProductsContextProvider>
          <ReceiptsContextProvider>{children}</ReceiptsContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </NextUIProvider>
  );
}
