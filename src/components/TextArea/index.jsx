import React from 'react';
import PropTypes from 'prop-types';

import { Label, Textarea } from './styles';

const TextArea = ({ name, onChange, text }) => {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Textarea name={name} onChange={onChange} id='' cols='30' rows='10' />
    </>
  );
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default TextArea;
