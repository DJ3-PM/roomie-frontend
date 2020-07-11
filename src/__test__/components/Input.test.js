import React from 'react';
import { mount } from 'enzyme';
import Input from '../../components/Input';

describe('<Input />', () => {
  it('Input Component should be rendered', () => {
    const input = mount(<Input />);
    expect(input.length).toEqual(1);
  });
});
