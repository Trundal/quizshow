import React from 'react';
import { shallow } from 'enzyme'
import Radios from '../../components/Fields/Radios';
import Error from '../../components/UIElements/Error'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Radios />);
});

it('returns an Error component if no options prop', () => {
    expect(wrapper.find(Error).length).toEqual(1);
});

it('creates one radio input per option.value', () => {
  wrapper.setProps({ options: [{"value": "Blue"},{"value": "Red"}]  });
  expect(wrapper.find('input').length).toEqual(2);
});
