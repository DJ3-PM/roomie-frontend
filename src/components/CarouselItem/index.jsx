import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImgWrapper } from './styles';

const CarouselItem = ({ image }) => {
  return (
    <ImgWrapper>
      <Image src={image} alt='Place image' />
    </ImgWrapper>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CarouselItem;
