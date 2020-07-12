import React from 'react';
import PropTypes from 'prop-types';

import { Info, Img, About } from './styles';

const ProfileInfo = ({ avatar, firstname, lastname, about, price }) => {
  return (
    <Info>
      <Img src={avatar} alt='Imagen del profile' />
      <h3>{`${firstname} ${lastname}`}</h3>
      <About>{`${about}`}</About>
      <p>{`${price} COP / Día`}</p>
    </Info>
  );
};

export default ProfileInfo;
