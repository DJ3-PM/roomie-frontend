import React from 'react';

import { Label, Textarea } from './styles';

const TextArea = ({ name, onChange, text }) => {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Textarea name={name} onChange={onChange} id='' cols='30' rows='10' />
    </>
  );
};

export default TextArea;
