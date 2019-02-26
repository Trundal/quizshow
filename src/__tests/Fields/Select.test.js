import React from 'react';
import { shallow } from 'enzyme'
import Select from '../../components/Fields/Select';
import Error from '../../components/UIElements/Error'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Select />);
});

it('returns an Error component if no options prop', () => {
    expect(wrapper.find(Error).length).toEqual(1);
});

it('has an input field that can recieve user inputs', () => {
  wrapper.setProps({ options: [{"value": "Blue"},{"value": "Red"}]  });
  wrapper.find('select').simulate('change', {
    target: { value: 'new comment'}
  });
});
