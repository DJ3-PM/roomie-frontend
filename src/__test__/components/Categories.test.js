import React from 'react';
import { mount } from 'enzyme';
import Categories from '../../components/Categories';

describe('<Categories />', () => {
  it('Categories Component should be rendered', () => {
    const categories = mount(<Categories />);
    expect(categories.length).toEqual(1);
  });
});
