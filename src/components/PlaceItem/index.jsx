import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { RiHeartAddLine as Heart } from 'react-icons/ri';
import { Context } from '../../Context';

import { Item, Details, Button, Title, Image, ImageContainer, Price, Location, Link } from './styles';

const loadPollyfill = async () => {
  try {
    await import('intersection-observer');
  } catch (error) {
    console.log(error);
  }
};

const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) loadPollyfill();

    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return [show, element];
};

const PlaceItem = ({ _id, mainImage, name, location, price }) => {
  const { profileId } = useContext(Context);
  const [show, element] = useNearScreen();

  const handleOnClick = async (event) => {
    const { target } = event;
    console.log(target.id);
    try {
      const { data } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/favorites', {
        profileId,
        placeId: target.id,
      });
      alert(data.message);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Item ref={element}>
      {
        show && (
          <>
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
          </>
        )
      }

    </Item>
  );
};

export default PlaceItem;
