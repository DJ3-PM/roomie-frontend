import React, { useState } from 'react';
import CarouselItem from '../CarouselItem';
import ImagesList from '../ImagesList';
import { Section, CarouselWrapper, BtnLeftWrapper, BtnRightWrapper, Button, BtnImg, Image } from './styles';
import btnLeft from '../../assets/static/left.svg';
import btnRight from '../../assets/static/right.svg';

const Carousel = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleOnClick = (event) => {
    const { target } = event;
    setMainImage(images[target.id]);
  };

  return (
    <Section>
      <CarouselWrapper>
        <BtnLeftWrapper>
          <Button>
            <BtnImg src={btnLeft} />
          </Button>
        </BtnLeftWrapper>
        <CarouselItem active={true} id='image1' image={mainImage} />
        <BtnRightWrapper>
          <Button>
            <BtnImg src={btnRight} />
          </Button>
        </BtnRightWrapper>
      </CarouselWrapper>
      <ImagesList>
        {
          images.map((image, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Image key={index} src={image} id={index} onClick={handleOnClick} active={image === mainImage && true} />
            );
          })
        }
      </ImagesList>
    </Section>
  );
};

export default Carousel;
