import React from 'react';
import { RiHeartAddLine as Heart } from 'react-icons/ri';

import { Item, Details, Button, Title, Image, ImageContainer, Price, Location, Link } from './styles';

const PlaceItem = ({ _id, mainImage, name, location, price }) => {
  const handleOnClick = (event) => {
    console.log(event.target.id);
  };
  return (
    <Item>
      <ImageContainer>
        <Image src={mainImage} alt='Roomie' />
        <Button id={_id} onClick={handleOnClick}><Heart id={_id} color='#BACD25' size='24px' /></Button>
      </ImageContainer>
      <Details>
        <Title>{name}</Title>
        <Location>{location}</Location>
        <Price>
          {`$${price} COP `}
          <span>
            {' per month'}
          </span>
        </Price>
        <Link to={`/places/${_id}`}>
          Learn more
        </Link>
      </Details>
    </Item>
  );
};

export default PlaceItem;
