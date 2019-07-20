import React from 'react';
import { shallow, mount } from 'enzyme';
import Accordion from '../Accordions.jsx';

xdescribe('<Accordion />', () => {
  const wrapper = shallow(<Accordion />);

  expect(wrapper.exists()).toBe(true);
});
