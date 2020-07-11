import React from 'react';
import { mount } from 'enzyme';
import InputCheck from '../../components/InputCheck';

describe('<InputCheck />', () => {
  it('InputCheck Component should be rendered', () => {
    const inputCheck = mount(<InputCheck />);
    expect(inputCheck.length).toEqual(1);
  });
});
