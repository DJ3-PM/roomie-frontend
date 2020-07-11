import React from 'react';
import { mount } from 'enzyme';
import FormButton from '../../components/FormButton';

describe('<FormButton />', () => {
  it('FormButton Component should be rendered', () => {
    const formButton = mount(<FormButton />);
    expect(formButton.length).toEqual(1);
  });
});
