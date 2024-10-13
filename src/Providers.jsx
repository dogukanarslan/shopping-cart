import { NextUIProvider } from '@nextui-org/react';
import { useHistory } from 'react-router-dom';

import { ReceiptsContextProvider } from './contexts/ReceiptsContext';
import { ProductsContextProvider } from './contexts/ProductsContext';

export function Providers({ children }) {
  const history = useHistory();

  return (
    <NextUIProvider navigate={history.push} className="h-full">
      <ProductsContextProvider>
        <ReceiptsContextProvider>{children}</ReceiptsContextProvider>
      </ProductsContextProvider>
    </NextUIProvider>
  );
}
