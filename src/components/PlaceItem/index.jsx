import React from 'react';

import { Item, Like, Title } from './styles';

const PlaceItem = () => (
  <Item>
    <Like>Heart</Like>
    <img src='img/room.jpg' alt='Roomie' />
    <Title>Santa Marta</Title>
    <p>
      Rodadero
      <span>$10.000</span>
    </p>
  </Item>
);

export default PlaceItem;
