import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label } from './style';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const InputComponent = ({ onChange, name = '', type = 'text', text = '', placeholder = null, required = false }) => {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input onChange={onChange} type={type} name={name} placeholder={placeholder || capitalize(name)} required={required} />
    </>
  );
};

InputComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default InputComponent;
