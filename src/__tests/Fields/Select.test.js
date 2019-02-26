import React from 'react';
import { shallow } from 'enzyme'
import Select from '../../components/Fields/Select';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Select />);
});

it('has a select field', () => {
    expect(wrapper.find('select').length).toEqual(1);
});

it('has an input field that can recieve user inputs', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'new comment'}
  });
});
