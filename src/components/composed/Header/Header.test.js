import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button Component', () => {
  test('render a label', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});