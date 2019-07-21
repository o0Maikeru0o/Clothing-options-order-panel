import React from 'react';
import { shallow, mount } from 'enzyme';
import SizeSelector from '../SizeSelector.jsx';

describe('<SizeSelector />', () => {
  test('renders', () => {
    const wrapper = shallow(<SizeSelector />);

    expect(wrapper.exists()).toBe(true);
  })
});
