import React from 'react';
import { Link } from '@reach/router';
import CarouselItem from '../CarouselItem';
import { Section, CarouselWrapper, ListImages, ListItem, BtnLeftWrapper, BtnRightWrapper, ButtonLeft, ButtonRight, BtnImg } from './styles';
import btnLeft from '../../assets/static/left.svg';
import btnRight from '../../assets/static/right.svg';
import placeImage from '../../assets/static/2.jpg';
import placeImage2 from '../../assets/static/3.jpg';

const Carousel = () => {
  return (
    <Section>
      <CarouselWrapper>
        <BtnLeftWrapper>
          <ButtonLeft>
            <BtnImg src={btnLeft} />
          </ButtonLeft>
        </BtnLeftWrapper>
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <BtnRightWrapper>
          <ButtonRight>
            <BtnImg src={btnRight} />
          </ButtonRight>
        </BtnRightWrapper>
      </CarouselWrapper>
      <ListImages>
        <Link to={placeImage2}>
          <ListItem image={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <ListItem image={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <ListItem image={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <ListItem image={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <ListItem image={placeImage} />
        </Link>
      </ListImages>
    </Section>
  );
};

export default Carousel;
