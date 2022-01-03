import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          category: 'food',
          amount: 400,
          type: 'deposit',
          createdAt: new Date(),
        },
      ];
    });
  },
});

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = (): void =>
    setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = (): void =>
    setIsNewTransactionModalOpen(false);

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <GlobalStyle />
    </>
  );
}
