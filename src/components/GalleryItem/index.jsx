import React from 'react';
import PropTypes from 'prop-types';

import { Figure, Image } from './styles';

const GalleryItem = ({ image }) => {
  return (
    <Figure>
      <Image src={image} alt='' />
    </Figure>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryItem;
