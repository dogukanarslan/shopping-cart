import { createContext, useCallback, useContext, useState } from 'react';

import { request } from '../request';

const ReceiptsContext = createContext();

export const ReceiptsContextProvider = (props) => {
  const { children } = props;

  const [receipts, setReceipts] = useState([]);
  const [receiptDetail, setReceiptDetail] = useState();

  const getReceipts = useCallback(async () => {
    const data = await request('/api/receipts');
    setReceipts(data.receipts);
  }, []);

  const createReceipt = useCallback(async (body) => {
    await request('/api/receipts', 'POST', body);
  }, []);

  const showReceipt = useCallback(async (receiptId) => {
    const data = await request(`/api/receipts/${receiptId}`);
    setReceiptDetail(data);
  }, []);

  return (
    <ReceiptsContext.Provider
      value={{
        receipts,
        receiptDetail,
        setReceipts,
        getReceipts,
        createReceipt,
        showReceipt,
      }}
    >
      {children}
    </ReceiptsContext.Provider>
  );
};

export const useReceiptsContext = () => useContext(ReceiptsContext);
