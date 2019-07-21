import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorSelector from '../ColorSelector.jsx';

describe('<ColorSelector />', () => {
  test('renders', () => {
    const wrapper = shallow(<ColorSelector />);

    expect(wrapper.exists()).toBe(true);
  });
});
