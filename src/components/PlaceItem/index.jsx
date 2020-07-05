import React from 'react';

import { Item, Like, Title } from './styles';

const PlaceItem = ({ mainImage, name, location, price }) => (
  <Item>
    <Like>Heart</Like>
    <img src={mainImage} alt='Roomie' />
    <Title>{name}</Title>
    <p>
      {location}
      <span>{price}</span>
    </p>
  </Item>
);

export default PlaceItem;
