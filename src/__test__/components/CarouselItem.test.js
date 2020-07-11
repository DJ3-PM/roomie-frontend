import React from 'react';
import { mount } from 'enzyme';
import CarouselItem from '../../components/CarouselItem';

describe('<CarouselItem />', () => {
  it('CarouselItem Component should be rendered', () => {
    const carouselItem = mount(<CarouselItem />);
    expect(carouselItem.length).toEqual(1);
  });
});
