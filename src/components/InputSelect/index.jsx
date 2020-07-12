/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './styles';

const InputSelect = ({ name, optionsArray, onChange }) => {
  return (
    <Select name={name} onChange={onChange}>
      {
        optionsArray.map((option, index) => <option key={index} value={option}>{option}</option>)
      }
    </Select>
  );
};

InputSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  optionsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string,
};

export default InputSelect;
