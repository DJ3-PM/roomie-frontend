import React from 'react';
import { mount } from 'enzyme';
import TitleInput from '../../components/TitleInput';

describe('<TitleInput />', () => {
  it('TitleInput Component should be rendered', () => {
    const titleInput = mount(<TitleInput />);
    expect(titleInput.length).toEqual(1);
  });
});
