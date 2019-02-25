import React from 'react';
import ReactDOM from 'react-dom';
import Answers from '../components/Answers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Answers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
