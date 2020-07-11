import React from 'react';
import { mount } from 'enzyme';
import InputFile from '../../components/InputFile';

describe('<InputFile />', () => {
  it('Input Component should be rendered', () => {
    const inputFile = mount(<InputFile />);
    expect(inputFile.length).toEqual(1);
  });
});
