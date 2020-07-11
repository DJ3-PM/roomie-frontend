import React from 'react';
import { mount } from 'enzyme';
import PlaceForm from '../../components/PlaceForm';

describe('<PlaceForm />', () => {
  it('PlaceForm Component should be rendered', () => {
    const placeForm = mount(<PlaceForm />);
    expect(placeForm.length).toEqual(1);
  });
});
