import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../components/Fields/Select';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Select />, div);
  ReactDOM.unmountComponentAtNode(div);
});
