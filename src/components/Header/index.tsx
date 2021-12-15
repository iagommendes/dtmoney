import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onClickNewTransaction: () => void;
}

export function Header({ onClickNewTransaction }: HeaderProps) {
  return (
    <Container> 
        <Content>
            <img src={logoImg} className="header__logo" alt="logo" />
            <button onClick={onClickNewTransaction}>Nova Transação</button>
        </Content>
    </Container>
    );
}