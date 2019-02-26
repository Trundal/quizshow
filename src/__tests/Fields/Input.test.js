import React from 'react';
import { shallow } from 'enzyme'
import Input from '../../components/Fields/Input';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Input />);
});

it('has an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
});

it('has an input field that can recieve user inputs', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'new comment'}
  });
});
