import React from 'react';

import { Input } from './style';

const InputComponent = ({ type, name, placeholder, required, onChange }) => {
  return (
    <Input onChange={onChange} type={type} name={name} id='' placeholder={placeholder} required={required && true} />
  );
};

export default InputComponent;
