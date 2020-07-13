import React from 'react';

import { Label, Input } from './styles';

const InputFile = ({ name, text, onChange, multiple = false }) => {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input
        name={name}
        onChange={onChange}
        multiple={multiple}
        type='file'
        accept='image/png, image/jpg, image/jpeg'
      />
    </>
  );
};

export default InputFile;
