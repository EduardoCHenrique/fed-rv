import React from 'react'
import { shallow } from 'enzyme'
import HotelListItem from './HotelListItem'

describe('HotelListItem Component', () => {
  test('render a label', () => {
    const wrapper = shallow(<HotelListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});