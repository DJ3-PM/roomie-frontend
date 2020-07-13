import React from 'react';
import { mount } from 'enzyme';
import Description from '../../components/Description';

describe('<Description />', () => {
   it('Description Component should be rendered', () => {
    const description = mount(<Description />);
    expect(description.length).toEqual(1);
  });
});
