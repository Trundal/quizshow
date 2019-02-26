import React from 'react';
import { shallow } from 'enzyme'
import Question from '../components/Question';
import Progress from '../components/Progress';
import Answer from '../components/Answer';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Question />);
});

it('renders the Progress Bar and Answer block', () => {
  expect(wrapper.find(Progress).length).toEqual(1);
  expect(wrapper.find(Answer).length).toEqual(1);
});
