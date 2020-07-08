import React from 'react';
import { AiFillHeart as Heart } from 'react-icons/ai';

import { Item, Details, Button, Title, Image, ImageContainer, Price, Location } from './styles';

const PlaceItem = ({ mainImage, name, location, price }) => (
  <Item>
    <ImageContainer>
      <Image src={mainImage} alt='Roomie' />
      <Button onClick={(e) => alert('liked!')}><Heart color='#BACD25' size='24px' /></Button>
    </ImageContainer>
    <Details>
      <Title>{name}</Title>
      <Location>{location}</Location>
      <Price>{`$ ${price} COP`}</Price>
    </Details>
  </Item>
);

export default PlaceItem;
