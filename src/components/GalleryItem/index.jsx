import React from 'react';

import { Figure, Image } from './styles';

const GalleryItem = ({ image }) => {
  return (
    <Figure>
      <Image src={image} alt='' />
    </Figure>
  );
};

export default GalleryItem;
