import React from 'react';

import { Section } from './styles';

import GalleryItem from '../GalleryItem';

const Gallery = ({ imagesList }) => {

  return (
    <Section>
      {
        imagesList.length > 0 && (
          // eslint-disable-next-line react/no-array-index-key
          imagesList.map((image, index) => <GalleryItem key={index} image={image} />)
        )
      }

    </Section>
  );
};

export default Gallery;
