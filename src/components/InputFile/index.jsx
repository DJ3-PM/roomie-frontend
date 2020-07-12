import React from 'react';
import PropTypes from 'prop-types';

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

InputFile.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  multiple: PropTypes.bool,
};

export default InputFile;
