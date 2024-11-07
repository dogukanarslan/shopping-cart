import { createContext, useContext } from 'react';

import { useLocalStorage } from '../useLocalStorage';

const ReceiptsContext = createContext();

export const ReceiptsContextProvider = (props) => {
  const { children } = props;

  const [receipts, setReceipts] = useLocalStorage('receipts', []);

  return (
    <ReceiptsContext.Provider value={{ receipts, setReceipts }}>
      {children}
    </ReceiptsContext.Provider>
  );
};

export const useReceiptsContext = () => useContext(ReceiptsContext);
