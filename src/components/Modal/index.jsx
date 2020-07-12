import React from 'react';
import ReactDOM from 'react-dom';
import { Container, ModalContainer, BtnModalOK, Message } from './styles';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container>
      <ModalContainer>
        <Message>
          {children}
        </Message>
        <BtnModalOK onClick={closeModal}>OK</BtnModalOK>
      </ModalContainer>
    </Container>,
    document.getElementById('modal'),
  );
};

export default Modal;
