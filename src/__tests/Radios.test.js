import React from 'react';
import ReactDOM from 'react-dom';
import Radios from '../components/Fields/Radios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Radios />, div);
  ReactDOM.unmountComponentAtNode(div);
});
