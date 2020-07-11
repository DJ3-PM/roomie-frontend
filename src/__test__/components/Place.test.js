import React from 'react';
import { mount } from 'enzyme';
import Place from '../../components/Place';

describe('<Place />', () => {
  it('Place Component should be rendered', () => {
    const placeComponent = mount(<Place />);
    expect(placeComponent.length).toEqual(1);
  });
});
