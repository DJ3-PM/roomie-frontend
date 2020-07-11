import React from 'react';
import { mount } from 'enzyme';
import Loader from '../../components/Loader';

describe('<Loader />', () => {
  it('Loader Component should be rendered', () => {
    const loader = mount(<Loader />);
    expect(loader.length).toEqual(1);
  });
});
