import React from 'react';
import { mount } from 'enzyme';
import TextArea from '../../components/TextArea';

describe('<TextArea />', () => {
  it('TextArea Component should be rendered', () => {
    const textArea = mount(<TextArea />);
    expect(textArea.length).toEqual(1);
  });
});
