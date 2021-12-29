import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12000,00</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td>Casa</td>
            <td className="withdraw">- R$1100,00</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
