import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('Footer Component should be rendered', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
