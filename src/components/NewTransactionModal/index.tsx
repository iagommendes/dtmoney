import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/fechar.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
        <Modal  
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}

        >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar"/>
            </button>
            <Container>
                <h2>Nova Transação</h2>
                <input placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}