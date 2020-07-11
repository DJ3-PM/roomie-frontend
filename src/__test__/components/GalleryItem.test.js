import React from 'react';
import { mount } from 'enzyme';
import GalleryItem from '../../components/GalleryItem';

describe('<GalleryItem />', () => {
  it('GalleryItem Component should be rendered', () => {
    const galleryItem = mount(<GalleryItem />);
    expect(galleryItem.length).toEqual(1);
  });
});
