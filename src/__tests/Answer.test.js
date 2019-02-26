import React from 'react';
import { mount } from 'enzyme'
import Answer from '../components/Answer';
import Button from '../components/UIElements/Button';
import Input from '../components/Fields/Input';
import Select from '../components/Fields/Select';
import Radios from '../components/Fields/Radios';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Answer />);
});

afterEach(() => {
    wrapper.unmount;
});

it('renders the Navigation Buttons', () => {
  expect(wrapper.find(Button).length).toEqual(2);
});

it('sometimes renders an input field', () => {
  wrapper.setProps({ type: 'input' });
  wrapper.update();
  expect(wrapper.find(Input).length).toEqual(1);
});

it('sometimes renders a select field with multiple options', () => {
  wrapper.setProps({ type: 'select', link: '/question/0', options: [{"value": "Blue"},{"value": "Red"}]  });
  wrapper.update();
  expect(wrapper.find(Select).length).toEqual(1);
  expect(wrapper.find('option').length).toEqual(2);
});

it('sometimes renders a set of Radio inputs', () => {
  wrapper.setProps({ type: 'radio', link: '/question/0', options: [{"value": "Blue"},{"value": "Red"}]  });
  wrapper.update();
  expect(wrapper.find(Radios).length).toEqual(1);
  expect(wrapper.find('input').length).toEqual(2);
});
