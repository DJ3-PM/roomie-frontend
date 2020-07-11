import React from 'react';
import { mount } from 'enzyme';
import ImagesList from '../../components/ImagesList';

describe('<ImagesList />', () => {
  const imagesList = mount(<ImagesList />);
  it('ImagesList Component should be rendered', () => {
    expect(imagesList.length).toEqual(1);
  });
});
