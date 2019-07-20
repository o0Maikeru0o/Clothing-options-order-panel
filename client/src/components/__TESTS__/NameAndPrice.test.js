import React from 'react';
import { shallow, mount } from 'enzyme';
import NameAndPrice from '../NameandPrice.jsx';

describe('<NameAndPrice/>', () => {
  test('renders', () => {
    const wrapper = shallow(<NameAndPrice />);

    expect(wrapper.exists()).toBe(true);
  });
});
