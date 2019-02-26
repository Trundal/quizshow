import React from 'react';
import { shallow } from 'enzyme'
import Radios from '../../components/Fields/Radios';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Radios />);
});

it('has at least one input', () => {
    expect(wrapper.find('input'));
});
