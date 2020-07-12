import React from 'react';
import ReactDOM from 'react-dom';
import { Container, ModalContainer, BtnModalClose, BtnModalOK, Message } from './styles';

// const useModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => {
//     setIsOpen(!isOpen);
//   };

//   return isOpen;
// };

const Modal = ( props ) => {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container>
      <ModalContainer>
        <BtnModalClose>X</BtnModalClose>
        <Message>
          {props.children}
        </Message>
        <BtnModalOK>OK</BtnModalOK>
      </ModalContainer>
    </Container>,
    document.getElementById('modal')
  );
};

export default Modal;
