import React from 'react';
import { mount } from 'enzyme';
import Modal from '../../components/Modal';

describe('<Modal />', () => {
  it('Modal Component should be rendered', () => {
    const modal = mount(<Modal />);
    expect(modal.length).toEqual(1);
  });
});
