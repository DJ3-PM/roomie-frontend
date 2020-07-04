import React from 'react';

import { Figure, Image } from './styles';

const GalleryItem = ({ image }) => {
  return (
    <Figure className='gallery-container'>
      <Image src={image} className='gallery-container__item' alt='' />
    </Figure>
  );
};

export default GalleryItem;
