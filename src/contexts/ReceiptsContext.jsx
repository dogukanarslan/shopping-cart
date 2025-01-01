import { createContext, useCallback, useContext, useState } from 'react';

import { request } from '../request';

const ReceiptsContext = createContext();

export const ReceiptsContextProvider = (props) => {
  const { children } = props;

  const [receipts, setReceipts] = useState([]);

  const getReceipts = useCallback(async () => {
    const data = await request('/api/receipts');
    setReceipts(data.receipts);
  }, []);

  const createReceipt = useCallback(async (body) => {
    await request('/api/receipts', 'POST', body);
  }, []);

  return (
    <ReceiptsContext.Provider
      value={{ receipts, setReceipts, getReceipts, createReceipt }}
    >
      {children}
    </ReceiptsContext.Provider>
  );
};

export const useReceiptsContext = () => useContext(ReceiptsContext);
