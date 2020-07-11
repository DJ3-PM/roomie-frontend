import React from 'react';
import { mount } from 'enzyme';
import Search from '../../components/Search';

describe('<Search />', () => {
  it('Search Component renders', () => {
    const search = mount(<Search />);
    expect(search.length).toEqual(1);
  });
});
