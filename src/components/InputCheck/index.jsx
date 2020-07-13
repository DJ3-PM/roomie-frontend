import React from 'react';

import { Label } from './styles';

const InputCheck = ({ name, onClick, text }) => {
  return (
    <Label htmlFor={name}>
      {text}
      <input name={name} type='checkbox' onClick={onClick} />
    </Label>
  );
};

export default InputCheck;
