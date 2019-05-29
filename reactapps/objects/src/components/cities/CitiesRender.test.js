import React from 'react';
import ReactDOM from 'react-dom';
import CitiesComp from './CitiesComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CitiesComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
