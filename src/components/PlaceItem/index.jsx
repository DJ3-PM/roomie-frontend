import React from 'react';

import { Item, Details, Like, Title, Image, ImageContainer, Price, Location } from './styles';

const PlaceItem = ({ mainImage, name, location, price }) => (
  <Item>
    <ImageContainer>
      <Image src={mainImage} alt='Roomie' />
      <Like>Heart</Like>
    </ImageContainer>
    <Details>
      <Title>{name}</Title>
      <Location>{location}</Location>
      <Price>{`$ ${price} COP`}</Price>
    </Details>
  </Item>
);

export default PlaceItem;
