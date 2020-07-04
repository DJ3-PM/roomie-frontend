import React from 'react';
import { Image, ImgWrapper } from './styles';

const CarouselItem = ({ image }) => {
  return (
    <ImgWrapper id='image1'>
      <Image src={image} alt='image1 del room' />
    </ImgWrapper>
  );
};

export default CarouselItem;
