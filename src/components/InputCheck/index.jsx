import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './styles';

const InputCheck = ({ name, onClick, text }) => {
  return (
    <Label htmlFor={name}>
      {text}
      <input name={name} type='checkbox' onClick={onClick} />
    </Label>
  );
};

InputCheck.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default InputCheck;
