import React, { useState } from 'react';
import { AiFillCaretLeft as Left, AiFillCaretRight as Right } from 'react-icons/ai';
import CarouselItem from '../CarouselItem';
import ImagesList from '../ImagesList';
import { Section, CarouselWrapper, BtnLeftWrapper, BtnRightWrapper, Button, Image } from './styles';

const Carousel = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleOnClick = (event) => {
    const { target } = event;
    setMainImage(images[target.id]);
  };

  // This could be improved...
  const handleLeft = () => {
    let newPosition = images.indexOf(mainImage) - 1;
    if (newPosition < 0) {
      newPosition = images.length - 1;
    }
    setMainImage(images[newPosition]);
  };
  const handleRight = () => {
    let newPosition = images.indexOf(mainImage) + 1;
    if (newPosition >= images.length) {
      newPosition = 0;
    }
    setMainImage(images[newPosition]);
  };

  return (
    <Section>
      <CarouselWrapper>
        <BtnLeftWrapper onClick={handleLeft}>
          <Button>
            <Left size='25px' color='#BACD25' />
          </Button>
        </BtnLeftWrapper>
        <CarouselItem active={true} id='image1' image={mainImage} />
        <BtnRightWrapper onClick={handleRight}>
          <Button>
            <Right size='25px' color='#BACD25' />
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
