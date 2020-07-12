/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Sidebar } from './styles';

const InfoSidebar = ({ children }) => {
  return (
    <Sidebar>{ children }</Sidebar>
  );
};

export default InfoSidebar;
