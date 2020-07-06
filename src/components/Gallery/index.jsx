import React from 'react';

import { Section, H2 } from './styles';

import moreIcon from '../../assets/static/more.svg';

import GalleryItem from '../GalleryItem';

const Gallery = ({ imagesList }) => {

  return (
    <Section>
      <H2>ELIGE IMAGENES PARA MOSTRAR</H2>
      {
        imagesList.length > 0 ? (
          // eslint-disable-next-line react/no-array-index-key
          imagesList.map((image, index) => <GalleryItem key={index} image={image} />)
        ) : <GalleryItem image={moreIcon} />
      }

    </Section>
  );
};

export default Gallery;
