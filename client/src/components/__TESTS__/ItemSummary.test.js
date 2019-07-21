import React from 'react';
import { shallow, mount } from 'enzyme';
import ItemSummary from '../ItemSummary.jsx';

describe('<ItemSummary />', () => {
  test('renders', () => {
    const wrapper = shallow(<ItemSummary />);

    expect(wrapper.exists()).toBe(true);
  });
});
