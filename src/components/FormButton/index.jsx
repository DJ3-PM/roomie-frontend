import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, Button } from './styles';

const FormButton = ({ text }) => {
  return (
    <ButtonContainer>
      <Button type='submit'>{text}</Button>
    </ButtonContainer>
  );
};

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormButton;
