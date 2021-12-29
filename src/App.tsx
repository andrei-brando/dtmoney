import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';

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

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
