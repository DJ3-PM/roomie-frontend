import React from 'react';

import { Section, H2 } from './styles';

import moreIcon from '../../assets/static/more.svg';
import placeImage from '../../assets/static/2.jpg';
import GalleryItem from '../GalleryItem';

const Gallery = () => {
  return (
    <Section>
      <H2>ELIGE IMAGENES PARA MOSTRAR</H2>
      <GalleryItem image={moreIcon} />
      <GalleryItem image={placeImage} />
      <GalleryItem image={placeImage} />
      <GalleryItem image={placeImage} />
      <GalleryItem image={placeImage} />
      <GalleryItem image={placeImage} />
    </Section>
  );
};

export default Gallery;
