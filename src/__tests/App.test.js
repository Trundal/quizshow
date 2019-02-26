import React from 'react';
import { shallow } from 'enzyme'
import App from '../components/App';
import Header from '../components/Header';
import { BrowserRouter } from "react-router-dom";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('renders the Header and Routes', () => {
  expect(wrapper.find(Header).length).toEqual(1);
  expect(wrapper.find(BrowserRouter).length).toEqual(1);
});
