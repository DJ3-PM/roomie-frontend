import React from 'react';
import { mount } from 'enzyme';
import PlaceInfo from '../../components/PlaceInfo';

describe('<PlaceInfo />', () => {
  it('PlaceInfo should be rendered', () => {
    const placeInfo = mount(<PlaceInfo />);
    expect(placeInfo.length).toEqual(1);
  });
});
