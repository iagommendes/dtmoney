import incomeImg from "../../assets/incomes.svg";
import outcomeImg from "../../assets/outcomes.svg";
import totalImg from "../../assets/total.svg";


import { Container } from "./style";

export function Summmary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg}  alt="Entradas"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg}  alt="Saídas"/>
        </header>
        <strong>- R$ 500</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg}  alt="Total"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
