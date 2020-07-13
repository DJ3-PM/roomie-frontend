import React from 'react';

import { ButtonContainer, Button } from './styles';

const FormButton = ({ text }) => {
  return (
    <ButtonContainer>
      <Button type='submit'>{text}</Button>
    </ButtonContainer>
  );
};

export default FormButton;
