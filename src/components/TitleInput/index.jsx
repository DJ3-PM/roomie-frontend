import React from 'react';
import Title from './styles';

const TitleInput = ({ text, children }) => {
  return (
    <div>
      <Title>
        {
          children
        }
        {text}
      </Title>
    </div>
  );
};

export default TitleInput;
