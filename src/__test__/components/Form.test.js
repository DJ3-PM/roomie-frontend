import React from 'react';
import { mount } from 'enzyme';
import Form from '../../components/Form';

describe('<Form />', () => {
  it('Form Component should be rendered', () => {
    const form = mount(<Form />);
    expect(form.length).toEqual(1);
  });
});
