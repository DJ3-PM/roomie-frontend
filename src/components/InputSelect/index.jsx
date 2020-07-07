/* eslint-disable react/no-array-index-key */
import React from 'react';

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

export default InputSelect;
