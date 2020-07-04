import React from 'react';

import Div from './styles';

const Wrapper = ({ children }) => {
  return (
    <Div>
      {
        children
      }
    </Div>
  );
};

export default Wrapper;
