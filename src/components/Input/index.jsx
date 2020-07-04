import React from 'react';

import { Input } from './style';

const InputComponent = ({ type, placeholder, required }) => {
  return (
    <Input type={type} name='' id='' placeholder={placeholder} required={required && true} />
  );
};

export default InputComponent;
