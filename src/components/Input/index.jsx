import React from 'react';
import { Input, Label } from './style';


// TODO:
// Esto se puede solucionar con css
// p::first-letter {
//   text-transform: capitalize;
// }
// https://tympanus.net/codrops/css_reference/first-letter/
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

export default InputComponent;
