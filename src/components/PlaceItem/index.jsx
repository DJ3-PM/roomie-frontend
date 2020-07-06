import React from 'react';

import { Item, Details, Like, Title, Image, Price } from './styles';

const PlaceItem = ({ mainImage, name, location, price }) => (
  <Item>
    <Image src={mainImage} alt='Roomie' />
    <Details>
      <Like>Heart</Like>
      <Title>{name}</Title>
      <Price>
        {location}
        <span>{price}</span>
      </Price>
    </Details>
  </Item>
);

export default PlaceItem;
