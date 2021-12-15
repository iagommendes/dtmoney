import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>{}</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Almoço</td>
                        <td className="deposit">R$ 50,00</td>
                        <td>Alimentação</td>
                        <td>20/10/2020</td>
                    </tr>

                    <tr>
                        <td>Salário</td>
                        <td className="deposit"> R$ 50,00</td>
                        <td>Freelas</td>
                        <td>20/10/2020</td>
                    </tr>

                    <tr>
                        <td>Almoço</td>
                        <td className="withdraw">- R$ 50,00</td>
                        <td>Alimentação</td>
                        <td>20/10/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}