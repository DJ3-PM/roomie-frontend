import React from 'react';
import H3 from './styles';

const Categories = ({ children, title }) => {
  return (
    <div className='categories'>
      <H3 className='categories__title'>{title}</H3>
      {children}
    </div>
  );
};

export default Categories;
