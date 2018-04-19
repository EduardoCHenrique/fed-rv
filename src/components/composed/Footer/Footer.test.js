import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer Component', () => {
  test('render a label', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});