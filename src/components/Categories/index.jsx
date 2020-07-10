import React from 'react';
import H3 from './styles';

const Categories = ({ children, title }) => {
  return (
    <div>
      <H3>{title}</H3>
      {children}
    </div>
  );
};

export default Categories;
