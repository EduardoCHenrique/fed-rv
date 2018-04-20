import React from 'react'
import { shallow } from 'enzyme'
import HotelsSection from './HotelsSection'

describe('HotelsSection Component', () => {
  test('render', () => {
    const wrapper = shallow(<HotelsSection />);
    expect(wrapper).toMatchSnapshot();
  });
});