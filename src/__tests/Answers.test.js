import React from 'react';
import { shallow } from 'enzyme'
import Answers from '../components/Answers';
import { Redirect } from "react-router-dom";
import questionList from '../server/questions'

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Answers />);
});

it('Redirects to start page if no steps taken', () => {
  expect(wrapper.find(Redirect).length).toEqual(1);
});

it('Renders all questions if steps have been taken', () => {
  wrapper.setProps({ step: 4 });
  expect(wrapper.find('li').length).toEqual(questionList.length);
});
