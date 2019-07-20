import React from 'react';
import { shallow, mount } from 'enzyme';
import Description from '../Description.jsx';

describe('<Description />', () => {
  test('renders', () => {
    const wrapper = shallow(<Description />);

    expect(wrapper.exists()).toBe(true);
  });
});
