import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionModel {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionDTO {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionDTO = Pick<
//   TransactionModel,
//   'title' | 'amount' | 'type' | 'category'
// >;

type TransactionDTO = Omit<TransactionModel, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextProps {
  transactions: TransactionModel[];
  createTransaction: (transaction: TransactionDTO) => void;
}

export const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionDTO) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
