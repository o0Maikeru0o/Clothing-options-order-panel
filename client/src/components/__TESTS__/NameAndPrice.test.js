import React from 'react';
import { shallow, mount } from 'enzyme';
import NameAndPrice from '../NameandPrice.jsx';
import sinon from 'sinon';

describe('<NameAndPrice/>', () => {
  test('renders', () => {
    const wrapper = shallow(<NameAndPrice />);

    expect(wrapper.exists()).toBe(true);
  });

  test('allows props to change', () => {
    const wrapper = mount(<NameAndPrice name='Not Your Average Jacket' />);

    expect(wrapper.props().name).toBe('Not Your Average Jacket');

    wrapper.setProps({ name: 'Yoga Mat'});
    expect(wrapper.props().name).toBe('Yoga Mat');
  });
});
