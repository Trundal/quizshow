import React from 'react';
import ReactDOM from 'react-dom';
import Progress from '../components/Progress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Progress />, div);
  ReactDOM.unmountComponentAtNode(div);
});
